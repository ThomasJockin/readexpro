#!/bin/sh
set -e


echo "Generating Static fonts"
mkdir -p ../fonts ../fonts/ttf ../fonts/vf
fontmake -g Lexend.glyphs -i -o ttf --output-dir ../fonts/ttf/

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

echo "Post processing VFs"
vfs=$(ls ../fonts/vf/*-VF.ttf)
for vf in $vfs
do
	gftools fix-dsig -f $vf;
	gftools fix-nonhinting $vf $vf.fix;
	mv "$vf.fix" $vf;

	ttx -f -x "MVAR" $vf; # Drop MVAR. Table has issue in DW
	rtrip=$(basename -s .ttf $vf)
	new_file=../fonts/vf/$rtrip.ttx;
	rm $vf;
	ttx $new_file
	rm $new_file
done
rm ../fonts/vf/*gasp.ttf
