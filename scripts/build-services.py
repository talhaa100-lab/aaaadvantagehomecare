"""
Builds app/lib/services.ts and downloads service-page images from the
existing site (aaaadvantagehomecare.com).

Input : services.json + the six saved service-page HTML files (see SRC below),
        produced from the live site's pages.
Output: app/lib/services.ts, public/images/services/*
"""
import json
import os
import re
import html
import urllib.request

SRC = os.path.join(os.environ["TEMP"], "aaa")  # saved copies of the live pages
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "public", "images", "services")
os.makedirs(IMG_DIR, exist_ok=True)
data = json.load(open(os.path.join(SRC, "services.json"), encoding="utf8"))


def meta(slug):
    s = open(os.path.join(SRC, f"{slug}.html"), encoding="utf8").read()
    t = re.search(r"<title>(.*?)</title>", s, re.S)
    md = re.search(r'<meta name="description" content="(.*?)"', s, re.S)
    return (
        html.unescape(t.group(1)).strip() if t else "",
        html.unescape(md.group(1)).strip() if md else "",
    )


def fetch(url, dest):
    full = re.sub(r"-\d+x\d+(\.\w+)$", r"\1", url)  # prefer the full-size upload
    last = None
    for u in (full, url):
        try:
            req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=60) as r, open(dest, "wb") as f:
                f.write(r.read())
            return u
        except Exception as e:  # noqa: BLE001
            last = e
    raise last


def q(s):
    return json.dumps(s, ensure_ascii=False)


L = []
L.append("// All copy below is taken verbatim from the existing service pages on")
L.append("// aaaadvantagehomecare.com. Keep it here so pages stay presentation-only.")
L.append("")
L.append("export type ServicePage = {")
L.append("  slug: string;")
L.append("  title: string;")
L.append("  metaTitle: string;")
L.append("  metaDescription: string;")
L.append("  /** Hero intro paragraphs + the bullet list that belongs to them */")
L.append("  intro: { paragraphs: string[]; list: string[] };")
L.append("  images: string[];")
L.append("  sections: {")
L.append("    heading: string;")
L.append("    paragraphs: string[];")
L.append("    list: string[];")
L.append("    cards: { title: string; text: string }[];")
L.append("  }[];")
L.append("  faqs: { q: string; a: string }[];")
L.append("};")
L.append("")
L.append("export const servicePages: ServicePage[] = [")

for slug, v in data.items():
    mt, md = meta(slug)
    local = []
    for i, u in enumerate(v["images"], 1):
        ext = os.path.splitext(u)[1].lower()
        name = f"{slug}-{i}{ext}"
        used = fetch(u, os.path.join(IMG_DIR, name))
        local.append(f"/images/services/{name}")
        print("img", name, "<-", used.rsplit("/", 1)[-1])
    secs = v["sections"]
    hero = secs[0]
    faq = []
    body = []
    for s in secs[1:]:
        if s["faq"]:
            faq = s["faq"]
            continue
        body.append(s)
    L.append("  {")
    L.append(f"    slug: {q(slug)},")
    L.append(f"    title: {q(v['title'])},")
    L.append(f"    metaTitle: {q(mt)},")
    L.append(f"    metaDescription: {q(md)},")
    L.append("    intro: {")
    L.append(f"      paragraphs: {json.dumps(hero['paras'], ensure_ascii=False)},")
    L.append(f"      list: {json.dumps(hero['list'], ensure_ascii=False)},")
    L.append("    },")
    L.append(f"    images: {json.dumps(local)},")
    L.append("    sections: [")
    for s in body:
        L.append("      {")
        L.append(f"        heading: {q(s['heading'])},")
        L.append(f"        paragraphs: {json.dumps(s['paras'], ensure_ascii=False)},")
        L.append(f"        list: {json.dumps(s['list'], ensure_ascii=False)},")
        L.append(f"        cards: {json.dumps(s['cards'], ensure_ascii=False)},")
        L.append("      },")
    L.append("    ],")
    L.append(f"    faqs: {json.dumps(faq, ensure_ascii=False)},")
    L.append("  },")

L.append("];")
L.append("")
L.append("export function getServicePage(slug: string) {")
L.append("  return servicePages.find((s) => s.slug === slug);")
L.append("}")
open(os.path.join(ROOT, "app", "lib", "services.ts"), "w", encoding="utf8").write("\n".join(L) + "\n")
print("done")
