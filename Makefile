
run: update
	npx quartz sync


update:
	./obsidian-content-sync.sh

test:
	npx quartz build --serve
