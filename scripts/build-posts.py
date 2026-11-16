"""Pull the two live blog posts that aren't in Sanity yet -> app/lib/legacy-posts.json (+ cover images).

Run from the project root:  python scripts/build-posts.py
"""
import html, json, re, urllib.request

UA = {"User-Agent": "Mozilla/5.0"}
SITE = "https://aaaadvantagehomecare.com"
POSTS = ["how-to-get-paid-to-be-a-caregiver-in-arizona", "guide-to-cds-in-missouri"]


def fetch(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=90).read()


def meta(raw, key):
    m = re.search(r'<meta (?:property|name)="' + key + r'" content="([^"]*)"', raw)
    return html.unescape(m.group(1)).strip() if m else ""


def decode_cf(h):
    k = int(h[:2], 16)
    return "".join(chr(int(h[i : i + 2], 16) ^ k) for i in range(2, len(h), 2))


out = []
for slug in POSTS:
    raw = fetch(f"{SITE}/{slug}/").decode("utf8")
    cm = re.search(r'class="[^"]*hentry[^"]*category-([\w-]+)', raw)
    cat = cm.group(1) if cm else "homecare"
    start = raw.index('<div class="page-content">') + len('<div class="page-content">')
    # walk to the matching </div> of the page-content wrapper
    depth, pos = 1, start
    for m in re.finditer(r"<div\b|</div>", raw[start:]):
        depth += 1 if m.group(0) == "<div" else -1
        if depth == 0:
            pos = start + m.start()
            break
    body = raw[start:pos]
    body = re.sub(r'\s+class="[^"]*"', "", body)
    body = re.sub(r"<(script|style|form|svg)[^>]*>.*?</\1>", "", body, flags=re.S)
    body = re.sub(r"<(?!/?(?:p|h2|h3|h4|ul|ol|li|a|strong|em|b|i|br|blockquote)\b)[^>]+>", "", body)
    body = re.sub(r'<a href="https?://aaaadvantagehomecare\.com/?"', '<a href="/"', body)
    body = re.sub(r'<a href="https?://aaaadvantagehomecare\.com/([^"]+)"', r'<a href="/\1"', body)
    body = re.sub(r"<p>\s*</p>", "", body)
    body = re.sub(r"\n{2,}", "\n", body).strip()

    img_url = meta(raw, "og:image")
    img = None
    if img_url:
        name = img_url.rsplit("/", 1)[-1]
        open("public/images/blog/" + name, "wb").write(fetch(img_url))
        img = "/images/blog/" + name

    title = html.unescape(re.search(r'<h1 class="entry-title">(.*?)</h1>', raw, re.S).group(1)).strip()
    out.append(
        {
            "slug": slug,
            "title": title,
            "date": meta(raw, "article:published_time"),
            "excerpt": meta(raw, "og:description"),
            "metaTitle": html.unescape(meta(raw, "og:title")),
            "category": cat.replace("-", " ").title(),
            "image": img,
            "imageAlt": title,
            "html": body,
        }
    )
    print(slug, len(body), "h2:", body.count("<h2"), "|", out[-1]["category"], "|", img)

json.dump(out, open("app/lib/legacy-posts.json", "w", encoding="utf8"), ensure_ascii=False, indent=1)
