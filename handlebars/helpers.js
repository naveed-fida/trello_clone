var Handlebars = require('handlebars');
var moment = require('moment');

Handlebars.registerHelper('ifIn', function(elem, list, options) {
  if(list.indexOf(elem) > -1) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 1; i <= n; ++i)
        accum += block.fn(i);
    return accum;
});

Handlebars.registerHelper("format_date_small", function(date_stamp) {
  var moment_date = moment(date_stamp);
  return moment_date.format('MMM DD');
});