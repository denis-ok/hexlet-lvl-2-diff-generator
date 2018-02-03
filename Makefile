install:
	npm install

build:
	rm -rf dist
	npm run build

publish:
	npm publish

test:
	npm test

test-watch:
	npm test -- --watch

test-coverage:
	npm test -- --coverage

lint:
	npm run eslint .

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


start:
	npm run babel-node -- 'src/bin/gendiff.js'

start-help:
	npm run babel-node -- src/bin/gendiff.js -h

start-version:
	npm run babel-node -- src/bin/gendiff.js -V


json-start-flat-default:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-after.json \

json-start-deep-default:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-after.json

json-start-flat-plain:
	npm run babel-node -- src/bin/gendiff.js -f plain \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-after.json \

json-start-deep-plain:
	npm run babel-node -- src/bin/gendiff.js -f plain \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-after.json


yaml-start-1:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-flat-before.yml \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-flat-after.yml

yaml-start-2:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-deep-before.yml \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-deep-after.yml


ini-start-1:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-flat-before.ini \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-flat-after.ini

ini-start-2:
	npm run babel-node -- src/bin/gendiff.js \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-deep-before.ini \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-deep-after.ini



json-start-global-flat-default:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-after.json

json-start-global-deep-default:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-after.json

json-start-global-flat-plain:
	gendiff -f plain \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-flat-after.json

json-start-global-deep-plain:
	gendiff -f plain \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-before.json \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/json/1-deep-after.json



yaml-start-global-1:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-flat-before.yml \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-flat-after.yml

yaml-start-global-2:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-deep-before.yml \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/yaml/1-deep-after.yml



ini-start-global-1:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-flat-before.ini \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-flat-after.ini

ini-start-global-2:
	gendiff \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-deep-before.ini \
	/home/denis/Projects/project-lvl2-s185/__tests__/__fixtures__/ini/1-deep-after.ini


local-run:
	make json-start-1-default
	make json-start-2-default
	make json-start-1-plain
	make json-start-2-plain

global-run:
	make json-start-global-1-default
	make json-start-global-2-default
	make json-start-global-1-plain
	make json-start-global-2-plain

