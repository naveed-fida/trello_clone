var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input id=\"search\" class=\"menu_elem\" type=\"search\" name=\"search\" placeholder=\"Search Cards...\">\n<a id=\"logo\" href=\"\"></a>";
},"useData":true});
