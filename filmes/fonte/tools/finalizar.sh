#!/bin/bash
# uso: finalizar.sh <filme>  → out/<filme>-{pt,en,es}.mp4 com trilha
set -e
F=$(cd "$(dirname "$0")/.." && pwd); X=$1; cd $F/tools
export NODE_PATH=$F/../node_modules
D=$(node cues.cjs $X $F/out/$X.cues.json)
python3 som.py $F/out/$X.cues.json $D $F/out/$X.wav
for L in pt en es; do
  node reccomp.cjs $X $L $F/out/$X-$L.video.mp4
  ffmpeg -loglevel error -y -i $F/out/$X-$L.video.mp4 -i $F/out/$X.wav -map 0:v -map 1:a -c:v copy -af "loudnorm=I=-14:TP=-1:LRA=11" -c:a aac -b:a 256k -ar 48000 -shortest -movflags +faststart $F/out/$X-$L.mp4
  echo "pronto $X-$L"
done
