#!/bin/bash
# Check if both arguments are provided
if [ $# -ne 2 ]; then
  echo "Error: Two arguments required"
  exit 1
fi
# Change to the directory specified by the first argument
cd "$1"
# List all files that end in the string specified by the second argument
ls -p | grep -v / | grep "$2$"
