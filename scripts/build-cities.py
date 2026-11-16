"""Pull the 23 city pages from aaaadvantagehomecare.com -> app/lib/cities.json.

Run from the project root:  python scripts/build-cities.py
"""
import html, json, re, urllib.request

UA = {"User-Agent": "Mozilla/5.0"}
SITE = "https://aaaadvantagehomecare.com"

# state slug -> city slugs (order = order shown on each state page)
STATES = {
    "arizona": ["chandler", "gilbert", "mesa", "phoenix", "tucson"],
    "indiana": ["carmel", "evansville", "fort-wayne", "indianapolis", "south-bend"],
    "missouri": ["columbia", "independence", "kansas-city", "springfield", "st-louis"],
    "south-dakota": ["aberdeen", "brookings", "rapid-city", "sioux-falls", "watertown"],
    "michigan": ["ann-arbor", "detroit", "grand-rapids"],
}


def fetch(slug):
    return urllib.request.urlopen(urllib.request.Request(f"{SITE}/{slug}/", headers=UA), timeout=90).read().decode("utf8", "replace")


def clean(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s))).strip()


def lines(raw):
    """Main content as lines: headings start with '## ', links are inlined as [text](href)."""
    m = re.search(r"<main.*?</main>", raw, re.S)
    b = m.group(0) if m else raw
    b = re.sub(r"<(script|style|svg|noscript)[^>]*>.*?</\1>", "", b, flags=re.S)
    b = re.sub(r"<(h[1-6])[^>]*>", "\n## ", b)
    b = re.sub(r"</h[1-6]>", "\n", b)
    b = re.sub(r"</(p|div|li)>", "\n", b)
    b = re.sub(
        r"<a [^>]*href=\"([^\"]+)\"[^>]*>(.*?)</a>",
        lambda x: "[" + re.sub("<[^>]+>", "", x.group(2)).strip() + "](" + x.group(1).replace(SITE, "") + ")",
        b,
        flags=re.S,
    )
    b = re.sub(r"<[^>]+>", " ", b)
    b = html.unescape(b)
    out = []
    for ln in b.split("\n"):
        ln = re.sub(r"\s+", " ", ln).strip()
        if ln:
            out.append(ln)
    return out


def fix(s):
    # "AAA Avantage" typo on one live page
    return s.replace("Avantage", "Advantage")


LINK_ONLY = re.compile(r"^(\[[^\]]*\]\([^)]*\)\s*)+$")
IMG_LINK = re.compile(r"\[\]\([^)]*\)")


def text_lines(body):
    res = []
    for ln in body:
        ln = IMG_LINK.sub("", ln).strip()
        if not ln or LINK_ONLY.match(ln):
            continue
        res.append(fix(ln))
    return res


def parse(state, city):
    raw = fetch(city)
    title = clean(re.search(r"<title>(.*?)</title>", raw, re.S).group(1))
    md = re.search(r'<meta name="description" content="(.*?)"', raw, re.S)
    ls = lines(raw)
    i = next(k for k, t in enumerate(ls) if t.startswith("## Home Care in"))
    ls = ls[i:]

    # sections: heading line "## X" (X may be empty -> the title is then the first body line)
    secs = []
    for ln in ls:
        if ln.startswith("##"):
            secs.append({"h": ln[2:].strip(), "body": []})
        elif secs:
            secs[-1]["body"].append(ln)

    h1 = secs[0]["h"]
    name = h1.replace("Home Care in ", "").strip()
    city_name, st = [x.strip() for x in name.rsplit(",", 1)]

    intro = " ".join(text_lines(secs[0]["body"]))
    program = secs[1]
    program_paras = text_lines(program["body"])

    svc_i = next(k for k, s in enumerate(secs) if s["h"].startswith("Our Home Care Services"))
    why_i = next(k for k, s in enumerate(secs) if s["h"].startswith("Why Choose"))
    svc_intro = " ".join(text_lines(secs[svc_i]["body"]))
    cards = []
    for s in secs[svc_i + 1 : why_i]:
        lm = re.match(r"^\[([^\]]+)\]\(/([^)/]+)/?\)$", s["h"])
        if lm:
            tl = text_lines(s["body"])
            cards.append({"slug": lm.group(2), "title": lm.group(1), "text": tl[0] if tl else ""})
        elif s["h"] and not svc_intro:
            svc_intro = fix(s["h"])  # the intro sometimes sits in its own heading

    why_intro = " ".join(text_lines(secs[why_i]["body"]))
    items = []
    for s in secs[why_i + 1 :]:
        if "Questions" in s["h"]:
            break
        tl = text_lines(s["body"])
        if s["h"] == "":
            if len(tl) >= 2:
                items.append({"title": tl[0], "text": tl[1]})
        elif not tl and not items and not why_intro:
            why_intro = fix(s["h"])  # the intro sometimes sits in its own heading
        else:
            items.append({"title": fix(s["h"]), "text": tl[0] if tl else ""})

    return {
        "slug": city,
        "state": state,
        "city": city_name,
        "stateAbbr": st,
        "metaTitle": title,
        "metaDescription": html.unescape(md.group(1)).strip() if md else "",
        "heading": h1,
        "intro": intro,
        "programHeading": program["h"],
        "programParagraphs": program_paras,
        "servicesIntro": svc_intro,
        "services": cards,
        "whyIntro": why_intro,
        "why": items,
    }


out = []
for state, cities in STATES.items():
    for c in cities:
        d = parse(state, c)
        out.append(d)
        print(f"{state:13} {c:14} svc={len(d['services'])} why={len(d['why'])} prog={len(d['programParagraphs'])} | {d['programHeading'][:40]}")


# The live pages were copy-pasted between cities, so some text names a neighbouring city
# (e.g. the Evansville page says "Fort Wayne"). Point each mention back at the page's own city.
def own_city(obj, mine, others):
    if isinstance(obj, str):
        for o in others:
            if o in obj:
                print(f"  fixed '{o}' -> '{mine}' in: {obj[:70]}")
                obj = obj.replace(o, mine)
        return obj
    if isinstance(obj, list):
        return [own_city(x, mine, others) for x in obj]
    if isinstance(obj, dict):
        return {k: own_city(v, mine, others) for k, v in obj.items()}
    return obj


names = {c["slug"]: c["city"] for c in out}
for n, c in enumerate(out):
    others = [names[s] for s in STATES[c["state"]] if s != c["slug"]]
    keep = {k: c[k] for k in ("slug", "state", "city", "stateAbbr")}
    fixed = own_city({k: v for k, v in c.items() if k not in keep}, c["city"], others)
    out[n] = {**keep, **fixed}

json.dump(out, open("app/lib/cities.json", "w", encoding="utf8"), ensure_ascii=False, indent=1)
print("cities:", len(out))
