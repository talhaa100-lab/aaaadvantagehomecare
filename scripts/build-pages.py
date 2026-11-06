"""Pull About / Terms / Privacy from aaaadvantagehomecare.com -> app/lib/pages.json (+ About images)."""
import json, re, html, urllib.request
from html.parser import HTMLParser

UA = {"User-Agent": "Mozilla/5.0"}
SITE = "https://aaaadvantagehomecare.com"

def fetch(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=90).read()

def decode_cf(h):
    k = int(h[:2], 16)
    return "".join(chr(int(h[i:i+2], 16) ^ k) for i in range(2, len(h), 2))

KEEP = {"h1","h2","h3","h4","h5","h6","p","ul","ol","li","strong","em","b","i","br","a"}

class Extract(HTMLParser):
    """Collect clean content markup (no classes/attrs except href) from <main>."""
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out, self.in_main, self.skip, self.cf = [], False, 0, None
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "main": self.in_main = True
        if not self.in_main: return
        if tag in ("script","style","svg","form","noscript","button","select"): self.skip += 1; return
        if self.skip: return
        if "data-cfemail" in a:
            self.cf = decode_cf(a["data-cfemail"]); return
        if tag in KEEP:
            if tag == "a" and a.get("href"):
                self.out.append(f'<a href="{html.escape(a["href"], quote=True)}">')
            elif tag == "br": self.out.append("<br>")
            else: self.out.append(f"<{tag}>")
    def handle_endtag(self, tag):
        if tag == "main": self.in_main = False
        if not self.in_main: return
        if tag in ("script","style","svg","form","noscript","button","select"): self.skip -= 1; return
        if self.skip: return
        if self.cf and tag in ("a","span"):
            self.out.append(html.escape(self.cf)); self.cf = None
            if tag == "a": self.out.append("</a>")
            return
        if tag in KEEP and tag != "br": self.out.append(f"</{tag}>")
    def handle_data(self, data):
        if self.in_main and not self.skip and self.cf is None: self.out.append(html.escape(data, quote=False))

def clean(markup):
    s = "".join(markup)
    s = re.sub(r"<(\w+)>\s*</\1>", "", s)          # empty tags
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\s*\n\s*", "\n", s)
    return s.strip()

def fix_mail(h):
    # Cloudflare-obfuscated links -> real mailto links; repair the orphaned closing tag.
    h = re.sub(r'<a href="/cdn-cgi/l/email-protection#[0-9a-f]+">([^<]+)</a>', r'<a href="mailto:\1">\1</a>', h)
    h = re.sub(r'Email: ([\w.@-]+)</a>', r'Email: <a href="mailto:\1">\1</a>', h)
    return h

def page(slug):
    raw = fetch(f"{SITE}/{slug}/").decode("utf8")
    p = Extract(); p.feed(raw)
    title = html.unescape(re.search(r"<title>(.*?)</title>", raw, re.S).group(1)).strip()
    m = re.search(r'<meta name="description" content="(.*?)"', raw, re.S)
    return {"title": title, "description": html.unescape(m.group(1)).strip() if m else "", "html": fix_mail(clean(p.out)), "raw": raw}

out = {}
for key, slug in (("terms", "terms-conditions"), ("privacy", "privacy-policy"), ("about", "about-us"), ("contact", "contact-us")):
    pg = page(slug)
    if key == "about":
        imgs = re.findall(r'<img[^>]+src="([^"]*wp-content/uploads/2026/10/[^"]+)"[^>]*?(?:alt="([^"]*)")?', pg["raw"])
        pg["images"] = []
        for src, alt in dict.fromkeys(imgs):
            name = src.rsplit("/", 1)[-1]
            open("public/images/about/" + name, "wb").write(fetch(src))
            pg["images"].append({"src": "/images/about/" + name, "alt": alt})
    pg.pop("raw")
    out[key] = pg

json.dump(out, open("app/lib/pages.json", "w", encoding="utf8"), ensure_ascii=False, indent=1)
for k, v in out.items():
    print("=====", k, "|", v["title"], "|", v["description"][:60], "| html chars", len(v["html"]), v.get("images"))
