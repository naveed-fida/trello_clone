var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card_modal.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"modal_labels\">\n        <h3>Labels</h3>\n      <section>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <a href=\"#\" class=\"button add_labels fa fa-plus\"></a>  \n      </section>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <span class=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <h3>Description <a class=\"edit_description\" href=\"#\">Edit</a></h3>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <h3><a class=\"edit_description\" href=\"#\">Edit Description</a></h3>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <p>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <li><span>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression;

  return "<div class=\"modal\">\n  <div class=\"main\">  \n    <header>\n      <h1>"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n      <p>in list <a href=\"#\">"
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.title : stack1), depth0))
    + "</a></p>\n    </header>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1["0"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"modal_description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "      <div class=\"description_area\" style=\"display: none;\">\n        <textarea id=\"description_text\"></textarea>\n        <a href=\"#\" class=\"button save_description\">Save</a>\n        <a href=\"#\" class=\"button cancel fa fa-close fa-2x\"></a>\n      </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"modal_comments\">\n      <h2>Add Comment</h2>\n      <textarea id=\"cmnt_text\" placeholder=\"Write a comment...\"></textarea>\n      <a class=\"button cmnt_send\">Send</a>\n      <ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n  <div class=\"panel\">\n    <div class=\"add_actions\">\n      <h2>Add</h2>\n      <a href=\"#\"><span class=\"fa fa-flag-o\"></span> &nbsp; Labels</a>\n      <a href=\"#\"><span class=\"fa fa-clock-o\"></span> &nbsp; Date</a>\n    </div>\n    <div class=\"other_actions\">\n      <h2>Actions</h2>\n      <a href=\"#\"><span class=\"fa fa fa-long-arrow-right\"></span> &nbsp; Move</a>\n      <a href=\"#\"><span class=\"fa fa-copy\"></span> &nbsp; Copy</a>\n      <a href=\"#\"><span class=\"fa fa-trash-o\"></span> &nbsp; Remove</a>\n    </div>\n  </div>\n</div>";
},"useData":true});
