var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['edit_card.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"edit_card\">\n  <div class=\"form\">\n    <textarea>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea>\n    <a href=\"#\" class=\"button save\">Save</a>\n  </div>\n  <div class=\"edit_actions\">\n    <a href=\"#\"><span class=\"fa fa-flag-o\"></span>Edit Labels</a>\n    <a href=\"#\"><span class=\"fa fa-long-arrow-right\"></span>Move</a>\n    <a href=\"#\"><span class=\"fa fa-copy\"></span>Copy</a>\n    <a href=\"#\"><span class=\"fa fa-clock-o\"></span>Change Due Date</a>\n    <a href=\"#\"><span class=\"fa fa-trash-o\"></span>Remove</a>\n  </div>\n</div>";
},"useData":true});
