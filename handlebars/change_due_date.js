var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['change_due_date.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop_over_header\">\n  <h3>Change Due Date</h3>\n</div>\n<div class=\"pop_over_body\">\n  <div>\n    <input type=\"text\" class=\"date_format\">\n  </div>\n  <div class=\"date_picker\"></div>\n  <div class=\"date_actions\">\n    <a href=\"#\" class=\"button save_date\">Save</a>\n    <a href=\"\" class=\"button remove_date\">Remove</a>\n  </div>\n</div>";
},"useData":true});
