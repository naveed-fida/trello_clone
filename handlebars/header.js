var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<label id=\"boards_menu\"></label>\n<input id=\"search\" type=\"search\" name=\"search\">\n<a id=\"logo\" href=\"\"></a>\n<label id=\"add_board\"></label>";
},"useData":true});
