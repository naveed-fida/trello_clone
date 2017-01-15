let Backbone    = require('backbone')
  , Handlebars  = require('handlebars');

require('../../../handlebars/header');

let HeaderView = Backbone.View.extend({
  template: Handlebars.templates['header.hbs'],

  render() {
    this.$el.html(this.template());
    return this;
  } 
});

module.exports = HeaderView;