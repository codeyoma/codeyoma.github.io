#!/bin/bash

# /Users/yoma/Library/Mobile Documents/com~apple~CloudDocs/Documents/Yoma

basic_path="/Users/yoma/Library/Mobile Documents/com~apple~CloudDocs/Documents/Yoma"
allow_path=(
    "/& Areas/Computer Science/"
    "/+ Resources/Note Taking/"
    "/+ Resources/Philosophy/"
    "/+ Resources/Publish/index.md"
    "/∞ Akashic Records/attachments/"
)

output_path=(
    "Computer Science/"
    "Note Taking/"
    "Philosophy/"
    "index.md"
    "Attachments/"
)

pre_fix="./content/"

len=${#allow_path[@]}
out_len=${#output_path[@]}

if [ $len -ne $out_len ]; then
    echo "Error: The number of allowed paths and output paths do not match."
    exit 1
fi

for ((i = 0; i < len; i++)); do
    echo "$basic_path${allow_path[$i]}" "$pre_fix${output_path[$i]}"
    rsync -av --delete "$basic_path${allow_path[$i]}" "$pre_fix${output_path[$i]}"
done
