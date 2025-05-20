#!/bin/bash

# /Users/yoma/Library/Mobile Documents/com~apple~CloudDocs/Documents/Yoma

basic_path="/Users/yoma/Library/Mobile Documents/com~apple~CloudDocs/Documents/Yoma"
allow_path=(
    "/∞ Akashic Records/attachments/"
    "/∞ Akashic Records/- Guideline.md"
    "/& Areas/Computer Science/"
    "/+ Resources/Note Taking/"
    "/+ Resources/Philosophy/"
    "/+ Resources/Publish/index.md"
    "/+ Resources/Publish/about.md"
)

output_path=(
    "Attachments/"
    "z-index/Guideline.md"
    "Computer Science/"
    "Note Taking/"
    "Philosophy/"
    "index.md"
    "About.md"
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
    rsync -av \
        --delete \
        --filter='- /.git/' \
        --filter='- /.vscode/' \
        --filter='- .*/' \
        --filter='+ */' \
        --filter='+ *.md' \
        --filter='- *' \
        "$basic_path${allow_path[$i]}" \
        "$pre_fix${output_path[$i]}"

    find "$pre_fix${output_path[$i]}" -type f -name "- *.md" | while read file; do
        dir=$(dirname "$file")
        mv "$file" "$dir/index.md"
    done
done
