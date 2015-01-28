JSHINT_EXEC = ./node_modules/jshint/bin/jshint

test: jshint test-u

jshint:
	@echo "\n---| JSHINT |---"
	@find . \
	-name "*.js" -not -path "*node_modules*" -print0 | xargs -0 $(JSHINT_EXEC)

test-u:
	@echo "\n---| Unit Test |---"
	@find ./test \
	-name "*.js" -exec node {} ';'

.PHONY: test-u jshint test
