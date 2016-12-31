javascripts := $(shell find ./javascripts/src -name "*.js")
app := javascripts/src/app.js
app_bundled := javascripts/app.js
styl := $(wildcard assets/css/*.styl)
css := $(patsubst %.styl,%.css,$(styl))
hbs_files := $(wildcard handlebars/*.hbs)
hbs_templates := $(patsubst %.hbs,%.js,$(hbs_files))

all: $(app_bundled) $(css) 

.PHONY: all handlebars browserify stylus
handlebars: $(hbs_templates)
browserify: $(app_bundled)
stylus: $(css)

$(app_bundled): $(javascripts)
	@echo "Running browserify...."
	@browserify -d $(app) -o $@
	@echo "Done browserify...."

$(css): %.css: %.styl
	@echo "Running Stylus...."
	@stylus -w $< -o $@
	@echo "Done Stylus...."

$(hbs_templates): %.js: %.hbs
	@echo "Running Handlebars...."
	@handlebars $< -c handlebars -f $@
	@echo "Done Handlebars...."

clean:
	@echo "Running Clean...."
	@rm -f $(app) $(css) $(hbs_templates)
	@echo "Done Clean...."


