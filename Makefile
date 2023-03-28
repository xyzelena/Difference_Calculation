install:
	npm ci

publish:
	npm publish --dry-run

lint-fix:
	npx eslint --fix .

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
