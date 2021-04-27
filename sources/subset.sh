#!/bin/sh
set -e
#source ../env/bin/activate

ttDir=../fonts/ttf

echo ".
SUBSETTING STATICS
."

ttfs=$(ls $ttDir/*.ttf)
for font in $ttfs
do
	pyftsubset $font --unicodes="0-3c0,1e08-fb02" --layout-scripts=latn,grek --layout-features='*' --output-file=$font.subset --name-IDs='*' --name-legacy --glyph-names --symbol-cmap --legacy-cmap --notdef-glyph --notdef-outline --recommended-glyphs  --drop-tables=
	mv $font.subset $font
done 

echo ".
COMPLETE!
."
