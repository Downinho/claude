#!/usr/bin/env bash
# Testa rotas para obter fotos do Instagram a partir do runner do GitHub.
UA_WEB='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36'
UA_BOT='facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'
UA_APP='Instagram 316.0.0.38.109 Android (30/11; 420dpi; 1080x2220; samsung; SM-G973F; beyond1; exynos9820; pt_BR; 562750302)'
for u in jonasfigueiredoadv barbearialacerda; do
  echo "=== $u"
  t(){ local name="$1"; shift; local out=$(mktemp); local code=$(curl -sL -m 25 -o "$out" -w '%{http_code}' "$@"); 
       local og=$(grep -o 'og:image" content="[^"]*' "$out" | head -1 | cut -c1-80); local imgs=$(grep -oE 'https:[^"]*(cdninstagram|fbcdn)[^" ]*\.(jpg|webp)[^" ]*' "$out" | sort -u | wc -l);
       echo "$name: HTTP $code, bytes $(wc -c <"$out"), og:image=[${og}], imagens_cdn=$imgs"; }
  t api_web -H 'x-ig-app-id: 936619743392459' -A "$UA_WEB" "https://i.instagram.com/api/v1/users/web_profile_info/?username=$u"
  t api_app -A "$UA_APP" -H 'x-ig-app-id: 567067343352427' "https://i.instagram.com/api/v1/users/web_profile_info/?username=$u"
  t api_www -H 'x-ig-app-id: 936619743392459' -A "$UA_WEB" "https://www.instagram.com/api/v1/users/web_profile_info/?username=$u"
  t html_web -A "$UA_WEB" "https://www.instagram.com/$u/"
  t html_bot -A "$UA_BOT" "https://www.instagram.com/$u/"
  t embed -A "$UA_WEB" "https://www.instagram.com/$u/embed/"
  t imginn -A "$UA_WEB" "https://imginn.com/$u/"
  t picuki -A "$UA_WEB" "https://www.picuki.com/profile/$u"
  t unavatar -A "$UA_WEB" "https://unavatar.io/instagram/$u?json"
  sleep 5
done
