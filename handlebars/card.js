var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <span class=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"date yellow\"><i class=\"fa fa-clock-o\"></i>"
    + container.escapeExpression((helpers.format_date_small || (depth0 && depth0.format_date_small) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.due_date : depth0),{"name":"format_date_small","hash":{},"data":data}))
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"fa fa-align-left\"></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"labels\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<p>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n<div class=\"info\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<span class=\"fa fa-pencil\"></span>";
},"useData":true});
