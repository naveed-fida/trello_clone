var Backbone = require('backbone')
  , $ = require('jquery')
  , Handlebars = require('handlebars');

require('../../../handlebars/boards');

var BoardsView = Backbone.View.extend({
  template: Handlebars.templates['boards.hbs'],

  render() {
    this.$el.html(this.template({ boards: this.collection.toJSON() }));
    return this;
  }
});

module.exports = BoardsView;



