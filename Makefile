
run: sync
	npx quartz sync

sync:
	./obsidian-content-sync.sh

update:
	npx quartz update

test: sync
	npx quartz build --serve

build:
	npx quartz build
