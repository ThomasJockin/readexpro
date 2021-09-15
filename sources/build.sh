#!/bin/sh
set -e
#source ../env/bin/activate

vf=ReadexPro[HEXP,wght].ttf

echo ".
BUILD READEX PRO
."

gftools builder config.yaml
fonttools varLib.instancer ../fonts/variable/$vf HEXP=0 --output ../fonts/variable/ReadexPro[wght].ttf

echo ".
COMPLETE!
."
