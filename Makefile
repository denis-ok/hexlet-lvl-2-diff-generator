install:
	npm install

start:
	npm run babel-node -- 'src/bin/gendiff.js'

build:
	rm -rf dist
	npm run build

publish:
	npm publish

test:
	npm test	

lint:
	npm run eslint src/

list:
	npm list -g --depth=0

link:
	npm run build
	npm link
	npm list -g --depth=0

unlink:
	npm unlink
	npm list -g --depth=0
	sudo rm -rf dist

relink:
	npm unlink
	sudo rm -rf dist
	npm run build
	npm link


install-global:
	npm list -g --depth=0
	npm install -g strelkov-gendiff
	npm list -g --depth=0

uninstall-global:
	npm list -g --depth=0
	npm uninstall -g strelkov-gendiff
	npm list -g --depth=0

