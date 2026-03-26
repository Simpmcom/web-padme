import re
path = r"i:\Du lieu cho Antigravity HOT\web-padme\frontend\src\App.jsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

text = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', text)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)
