var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['edit_labels.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "class=\"fa fa-check\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div class=\"pop_over_header\">\n  <h3>Labels</h3>\n</div>\n<div class=\"pop_over_body\">\n  <ul class=\"color_list\">\n    <li class=\"green\"><span "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"green",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></li>\n    <li class=\"yellow\"><span "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"yellow",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></li>\n    <li class=\"orange\"><span "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"orange",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></li>\n    <li class=\"red\"><span "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"red",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></li>\n    <li class=\"purple\"><span "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"purple",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></li>\n    <li class=\"blue\"><span "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"blue",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></span></li>\n  </ul>\n</div>";
},"useData":true});
