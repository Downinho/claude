#!/bin/bash
# uso: entregar.sh <origem.mp4> <destino.mp4> → recodifica até caber em 29 MB
src=$1; dst=$2; crf=18
while :; do
  ffmpeg -loglevel error -y -i "$src" -c:v libx264 -preset slow -crf $crf -pix_fmt yuv420p -c:a copy -movflags +faststart "$dst"
  s=$(stat -c %s "$dst"); [ $s -lt 29000000 ] && break; crf=$((crf+2))
done
echo "$dst crf=$crf $(du -h "$dst" | cut -f1)"
