#!/bin/sh
set -e
#source ../env/bin/activate

vf=Lexend[HEXP,wght].ttf

echo ".
BUILD DECA
."

gftools builder deca.yaml
fonttools varLib.instancer ../fonts/7families/deca/$vf HEXP=0 --output ../fonts/7families/deca/LexendDeca[wght].ttf 
rm ../fonts/7families/deca/$vf

echo ".
BUILD EXA
."
gftools builder exa.yaml
fonttools varLib.instancer ../fonts/7families/exa/$vf HEXP=40 --output ../fonts/7families/exa/LexendExa[wght].ttf 
rm ../fonts/7families/exa/$vf

echo ".
BUILD GIGA
."
gftools builder giga.yaml
fonttools varLib.instancer ../fonts/7families/giga/$vf HEXP=56 --output ../fonts/7families/giga/LexendGiga[wght].ttf 
rm ../fonts/7families/giga/$vf

echo ".
BUILD MEGA
."
gftools builder mega.yaml
fonttools varLib.instancer ../fonts/7families/mega/$vf HEXP=64 --output ../fonts/7families/mega/LexendMega[wght].ttf 
rm ../fonts/7families/mega/$vf

echo ".
BUILD PETA
."
gftools builder peta.yaml
fonttools varLib.instancer ../fonts/7families/peta/$vf HEXP=72 --output ../fonts/7families/peta/LexendPeta[wght].ttf 
rm ../fonts/7families/peta/$vf

echo ".
BUILD TERA
."
gftools builder tera.yaml
fonttools varLib.instancer ../fonts/7families/tera/$vf HEXP=80 --output ../fonts/7families/tera/LexendTera[wght].ttf 
rm ../fonts/7families/tera/$vf

echo ".
BUILD ZETTA
."
gftools builder zetta.yaml
fonttools varLib.instancer ../fonts/7families/zetta/$vf HEXP=100 --output ../fonts/7families/zetta/LexendZetta[wght].ttf 
rm ../fonts/7families/zetta/$vf

echo ".
BUILD ALL STATICS, WEBFONTS, AND 2AXES VF
."

gftools builder lexend.yaml


# echo ".
# SUBSETTING STATICS
# ."

# ttfs=$(ls $ttDir/*.ttf)
# for font in $ttfs
# do
# 	pyftsubset $font --unicodes="0-3c0,1e08-fb02" --layout-scripts=latn,grek --layout-features='*' --output-file=$font.subset --name-IDs='*' --name-legacy --glyph-names --symbol-cmap --legacy-cmap --notdef-glyph --notdef-outline --recommended-glyphs  --drop-tables=
# 	mv $font.subset $font
# done 

echo ".
COMPLETE!
."
