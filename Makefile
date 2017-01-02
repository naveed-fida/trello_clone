hbs_files := $(wildcard handlebars/*.hbs)
hbs_templates := $(patsubst %.hbs,%.js,$(hbs_files))
javascripts := $(shell find ./javascripts/src -name "*.js") $(hbs_templates)
app := javascripts/src/app.js
app_bundled := javascripts/bundle.js
styl := $(wildcard assets/css/*.styl)
css := $(patsubst %.styl,%.css,$(styl))

all: $(handlebars) $(app_bundled) $(css) 

.PHONY: handlebars browserify stylus
handlebars: $(hbs_templates)
browserify: $(app_bundled)
stylus: $(css)

$(app_bundled): $(javascripts)
	@echo "Running browserify...."
	@browserify $(app) --debug | exorcist $(patsubst %.js,%.map.js,$@) > $@
	@echo "Done browserify...."

$(css): %.css: %.styl
	@echo "Running Stylus...."
	@stylus $< -o $@
	@echo "Done Stylus...."

$(hbs_templates): %.js: %.hbs
	@echo "Running Handlebars...."
	@handlebars $< -c handlebars -f $@
	@echo "Done Handlebars...."

clean:
	@echo "Running Clean...."
	@rm -f $(app_bundled) $(css) $(hbs_templates) javascripts/*.map.js
	@echo "Done Clean...."
