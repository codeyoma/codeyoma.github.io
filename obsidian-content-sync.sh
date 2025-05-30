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
    --filter='+ *.png' \
    --filter='+ *.jpg' \
    --filter='+ *.jpeg' \
    --filter='+ *.gif' \
    --filter='+ *.bmp' \
    --filter='+ *.svg' \
    --filter='+ *.webp' \
    --filter='+ *.mp4' \
    --filter='+ *.webm' \
    --filter='+ *.ogv' \
    --filter='+ *.mov' \
    --filter='+ *.mkv' \
    --filter='+ *.mp3' \
    --filter='+ *.wav' \
    --filter='+ *.m4a' \
    --filter='+ *.ogg' \
    --filter='+ *.3gp' \
    --filter='+ *.flac' \
    --filter='+ *.pdf' \
    --filter='- *' \
    "$basic_path${allow_path[$i]}" \
    "$pre_fix${output_path[$i]}"

  find "$pre_fix${output_path[$i]}" -type f -name "- *.md" | while read file; do
    dir=$(dirname "$file")
    newfile="$dir/index.md"
    mv "$file" "$newfile"

    filename=$(basename "$file" .md)
    if grep -q "^---" "$newfile"; then
      # YAML 끝나는 줄 찾기
      yaml_end=$(awk '/^---$/ { if (NR != 1) { print NR; exit } }' "$newfile")

      # aliases: 있는지 확인
      if awk "NR<=${yaml_end}" "$newfile" | grep -q "^aliases:"; then
        # aliases: [] 형태면 [] 지우고 값 추가
        if awk "NR<=${yaml_end}" "$newfile" | grep -q "^aliases: *\[\]"; then
          sed -i '' "s/^aliases: *\[\]/aliases:\n  - \"$filename\"/" "$newfile"
        else
          # 이미 aliases가 있으면 그 밑에 추가
          sed -i '' "/^aliases:/a\\
  - \"$filename\"
" "$newfile"
        fi
      else
        # YAML 내부엔 있지만 aliases가 없을 때
        sed -i '' "${yaml_end}i\\
aliases:\n  - \"$filename\"
" "$newfile"
      fi
    else
      # YAML 자체가 없을 경우 새로 추가
      tmp=$(mktemp)
      echo -e "---\naliases:\n  - \"$filename\"\n---" >"$tmp"
      cat "$newfile" >>"$tmp"
      mv "$tmp" "$newfile"
    fi

  done
done
