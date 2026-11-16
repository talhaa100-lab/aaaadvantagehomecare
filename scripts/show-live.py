"""Print the readable main content of pages on aaaadvantagehomecare.com (for reading, not building).

Usage: python scripts/show-live.py slug [slug ...]
"""
import html, re, sys, urllib.request

UA = {"User-Agent": "Mozilla/5.0"}
SITE = "https://aaaadvantagehomecare.com"


def show(slug, limit=20000):
    raw = urllib.request.urlopen(urllib.request.Request(f"{SITE}/{slug}/", headers=UA), timeout=60).read().decode("utf8", "replace")
    m = re.search(r"<main.*?</main>", raw, re.S)
    b = m.group(0) if m else raw
    b = re.sub(r"<(script|style|svg|noscript)[^>]*>.*?</\1>", "", b, flags=re.S)
    b = re.sub(r"<(h[1-6])[^>]*>", r"\n## ", b)
    b = re.sub(r"</h[1-6]>", "\n", b)
    b = re.sub(r"<li[^>]*>", "\n - ", b)
    b = re.sub(
        r"<a [^>]*href=\"([^\"]+)\"[^>]*>(.*?)</a>",
        lambda x: f"[{re.sub('<[^>]+>', '', x.group(2)).strip()}]({x.group(1).replace(SITE, '')})",
        b,
        flags=re.S,
    )
    b = re.sub(r"<[^>]+>", " ", b)
    b = html.unescape(b)
    b = re.sub(r"[ \t]+", " ", b)
    b = re.sub(r"\n\s*(-\s*)?\n+", "\n", b)
    print("=====", slug)
    print(b[:limit])


for s in sys.argv[1:]:
    show(s)
