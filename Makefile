install: 
	npm ci
brain-games:
	node bin/brain-games.js	
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gcd.js
	node bin/brain-progression.js
publish: 
	npm publish --dry-run	
lint:
	npx eslint . --fix	