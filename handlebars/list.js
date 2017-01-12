var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['list.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n<ul>\n</ul>\n<a href=\"#\" class=\"add_card\">Add a card...</a>\n<div class=\"new_card\">\n  <textarea class=\"add_new\"></textarea>\n  <a href=\"#\" class=\"button add\">Add</a>\n  <a href=\"#\" class=\"button cancel fa fa-close fa-2x\"></a>\n</div>";
},"useData":true});
