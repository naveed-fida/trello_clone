typescripts := $(shell find ./javascripts/src -name "*.ts")
javascripts := $(patsubst %.ts,%.js,$(typescripts))
app := javascripts/src/app.js
app_bundled := javascripts/app.js
styl := $(wildcard assets/css/*.styl)
css := $(patsubst %.styl,%.css,$(styl))

all: $(app) $(css)

$(app_bundled): $(javascripts)
	browserify -d $(app) -o $@

$(javascripts): %.js: %.ts
	tsc $<

$(css): %.css: %.styl
	stylus -w $< -o $@
	
clean:
	rm -f $(app) $(javascripts) $(css)

