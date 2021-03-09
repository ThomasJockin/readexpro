#!/bin/sh
set -e


echo "Generating Static fonts"
mkdir -p ../fonts ../fonts/ttf ../fonts/vf
fontmake -g Lexend.glyphs -i --family-name "Lexend Deca" -o ttf --output-dir ../fonts/ttf/
fontmake -g Lexend.glyphs -i --family-name "Lexend Exa" -o ttf --output-dir ../fonts/ttf/
fontmake -g Lexend.glyphs -i --family-name "Lexend Giga" -o ttf --output-dir ../fonts/ttf/
fontmake -g Lexend.glyphs -i --family-name "Lexend Mega" -o ttf --output-dir ../fonts/ttf/
fontmake -g Lexend.glyphs -i --family-name "Lexend Peta" -o ttf --output-dir ../fonts/ttf/
fontmake -g Lexend.glyphs -i --family-name "Lexend Tera" -o ttf --output-dir ../fonts/ttf/
fontmake -g Lexend.glyphs -i --family-name "Lexend Zetta" -o ttf --output-dir ../fonts/ttf/

echo "Generating VFs"
fontmake -g Lexend.glyphs -o variable --output-path ../fonts/vf/Lexend-VF.ttf

rm -rf master_ufo/ instance_ufo/


echo "Post processing"
ttfs=$(ls ../fonts/ttf/*.ttf)
for ttf in $ttfs
do
	gftools fix-dsig -f $ttf;
	gftools fix-nonhinting $ttf $ttf.fix;
	mv "$ttf.fix" $ttf;
done
rm ../fonts/ttf/*gasp.ttf

echo "Post processing VF"
vf=../fonts/vf/Lexend-VF.ttf
gftools fix-dsig -f $vf;
gftools fix-nonhinting $vf $vf.fix;
mv "$vf.fix" $vf;

# Strip MVAR
ttx -f -x "MVAR" $vf; # Drop MVAR. Table has issue in DW
rtrip=$(basename -s .ttf $vf)
new_file=../fonts/vf/$rtrip.ttx;
rm $vf;
ttx $new_file
rm $new_file

# Patch name and stat tables
ttx -m '../fonts/vf/Lexend-VF.ttf' vf-patch.ttx
mv vf-patch.ttf "../fonts/vf/Lexend[LXND].ttf"
rm ../fonts/vf/Lexend-VF.ttf

rm ../fonts/vf/*gasp.ttf
