var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['new_list.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"add_a_list\">Add a list...</a>\n<div class=\"form\" style=\"display: none;\">\n  <input type=\"text\">\n  <div>\n    <a href=\"#\" class=\"button save\">Save</a>\n    <a href=\"#\" class=\"button close\"><span class=\"fa fa-close\"></span></a>\n  </div>\n</div>";
},"useData":true});
