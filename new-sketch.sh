#!/bin/bash
echo "Please name your new p5js sketch:"
read sketch_name
cp -r ./sketchbook/base/ ./sketchbook/$sketch_name
echo $sketch_name successfully created