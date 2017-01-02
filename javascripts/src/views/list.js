var Backbone    = require('backbone')
  , $           = require('jquery')
  , Handlebars  = require('handlebars');

require('../../../handlebars/list');

Backbone.$ = $;

var ListView = Backbone.View.extend({
  className: "list",
  template: Handlebars.templates["list.hbs"],

  render() {
    this.$el.html(this.template({
      list: this.model.toJSON(),
      cards: this.model.cards.toJSON()
    }));
    return this;
  }
});

module.exports = ListView;