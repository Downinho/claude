#!/bin/bash
# uso: produzir.sh <filme> → 3D completo + finalização nas 3 línguas
F=$(cd "$(dirname "$0")/.." && pwd); X=$1; cd $F/tools; export NODE_PATH=$F/../node_modules
node rec3d.cjs $X > $F/out/rec3d-$X.log 2>&1 && ./finalizar.sh $X > $F/out/fin-$X.log 2>&1; echo "FIM $X $?" >> $F/out/fila.log
