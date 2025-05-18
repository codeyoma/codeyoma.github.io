
run: update
	npx quartz sync

sync:
	./obsidian-content-sync.sh

update:
	npx quartz update

test:
	npx quartz build --serve

build:
	npx quartz build
