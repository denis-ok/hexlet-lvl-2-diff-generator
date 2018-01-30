install:
	npm install

start:
	npm run babel-node -- 'src/bin/gendiff.js'

start-help:
	npm run babel-node -- src/bin/gendiff.js -h

start-1:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/1-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/1-after.json

start-2:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/2-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/2-after.json

start-3-1:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-after.json

start-3-2:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-after.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-before.json

start-4:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/4-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/4-after.json

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

start-global-1:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/1-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/1-after.json

start-global-2:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/2-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/2-after.json

start-global-3-1:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-after.json

start-global-3-2:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-after.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/3-before.json

start-global-4:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/4-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/4-after.json

