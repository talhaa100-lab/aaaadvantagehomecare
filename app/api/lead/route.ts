import { createClient } from "@sanity/client";
import { form } from "../../lib/michigan-landing";

// Saves a Michigan landing-page lead into Sanity.
//
// Needs SANITY_WRITE_TOKEN (Editor role) in the environment. It is only ever read here,
// on the server, and is never sent to the browser.
//
// Privacy: the dataset is public, and published documents are readable by anyone.
// Leads are therefore saved as DRAFTS (`drafts.` id), which the public API never returns.
// Staff read them in Studio under "Lead (Michigan form)"; they must not be published.

const MAX_NAME = 100;
const MAX_URL = 500;

// The form endpoint of the original Unbounce page (found in its HTML). Override or switch
// off with UNBOUNCE_FORM_URL in the environment ("off" disables it).
const UNBOUNCE_PAGE_ID = "f2c4abac-c310-4684-89c7-b54baa85607f";
const UNBOUNCE_URL =
  process.env.UNBOUNCE_FORM_URL ??
  `https://aaaadvantagehomecare.com/fsg?pageId=${UNBOUNCE_PAGE_ID}&variant=a`;

const consent = `${form.consentLead} Terms of Use and Privacy Policy. ${form.consentTail}`;

const bad = (message: string, status = 400) => Response.json({ ok: false, message }, { status });

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return bad("Invalid request.");
  }

  // Honeypot: real visitors never see or fill this field, so a value means a bot.
  // Answer "ok" so the bot learns nothing.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim().replace(/\s+/g, " ") : "";
  if (name.length < 2 || name.length > MAX_NAME) {
    return bad("Please enter your full name.");
  }

  const digits = (typeof body.phone === "string" ? body.phone : "").replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (national.length !== 10) {
    return bad("Please enter a 10-digit phone number.");
  }
  const phone = `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;

  const pageUrl =
    typeof body.pageUrl === "string" ? body.pageUrl.slice(0, MAX_URL) : "";

  const [unbounce, sanity] = await Promise.allSettled([
    sendToUnbounce(name, phone),
    saveToSanity({ name, phone, pageUrl }),
  ]);

  if (unbounce.status === "rejected") console.error("[lead] Unbounce failed:", unbounce.reason);
  if (sanity.status === "rejected") console.error("[lead] Sanity failed:", sanity.reason);

  if (unbounce.status === "rejected" && sanity.status === "rejected") {
    return bad("We couldn't save your details right now.", 502);
  }
  return Response.json({ ok: true });
}

/** Posts the same fields the original Unbounce form sent. Throws if Unbounce doesn't accept it. */
async function sendToUnbounce(name: string, phone: string) {
  if (UNBOUNCE_URL === "off") return;
  const res = await fetch(UNBOUNCE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body: new URLSearchParams({
      pageId: UNBOUNCE_PAGE_ID,
      pageVariant: "a",
      full_name: name,
      phone_number: phone,
      campaign_id: "",
    }),
    redirect: "manual", // Unbounce answers a success with a redirect to its confirmation page
    signal: AbortSignal.timeout(8000),
  });
  // 2xx = accepted, 3xx = redirect to the confirmation page (also a success).
  if (res.status >= 400) throw new Error(`Unbounce responded ${res.status}`);
}

async function saveToSanity(lead: { name: string; phone: string; pageUrl: string }) {
  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) throw new Error("SANITY_WRITE_TOKEN is not set");

  const client = createClient({
    projectId: "9iuyuzir",
    dataset: "production",
    apiVersion: "2025-01-01",
    useCdn: false,
    token,
  });

  await client.create({
    _id: `drafts.lead-${crypto.randomUUID()}`,
    _type: "lead",
    ...lead,
    submittedAt: new Date().toISOString(),
    source: "michigan-landing",
    consent,
    status: "new",
  });
}