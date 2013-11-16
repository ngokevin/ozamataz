#!/bin/sh

sizes=(16 32 48 60 90 120 128)
for i in "${sizes[@]}"
do
    convert $1 -resize ${i}x${i} icon-$i.png
done
