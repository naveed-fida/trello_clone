let Backbone     = require('backbone')
  , jquery       = require('jquery')
  , Handlebars   = require('handlebars');

require('../../../handlebars/card');

let CardView = Backbone.View.extend({
  template: Handlebars.templates['card.hbs'],
  tagName: 'li',

  render() {
    this.$el.html(this.template(this.model.toJSON());
    return this;
  }
})