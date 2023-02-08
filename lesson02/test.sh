#! /bin/bash
# Ths bash script has two parameters. 
# It should change directory to the first parameter 
# and then list all files that end with the second parameter.

cd $1
ls *.$2

