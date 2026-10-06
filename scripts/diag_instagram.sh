#!/usr/bin/env bash
# Inspeciona o conteúdo da página /embed/ de dois perfis diferentes.
UA_WEB='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36'
for u in jonasfigueiredoadv barbearialacerda; do
  echo "=== $u"
  curl -sL -m 25 -A "$UA_WEB" "https://www.instagram.com/$u/embed/" -o e.html
  echo "bytes $(wc -c < e.html) | menciona o usuário: $(grep -o "$u" e.html | wc -l)x"
  grep -o '<title>[^<]*' e.html | head -1
  grep -oE '"(username|full_name|profile_pic_url|display_url|shortcode)":"[^"]{0,90}' e.html | sort | uniq -c | sort -rn | head -12
  grep -oE 'class="[A-Za-z]*(Avatar|Header|Media|Image)[^"]*"' e.html | sort | uniq -c | head -8
  grep -oE 'https:\\?/\\?/[^"]*(cdninstagram|fbcdn)[^"]*' e.html | head -3 | cut -c1-140
  sleep 4
done
