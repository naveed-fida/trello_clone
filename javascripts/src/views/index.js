var Backbone    = require('backbone')
  , $           = require('jquery')
  // , Handlebars  = require('handlebars')
  , HeaderView  = require('./header');

Backbone.$ = $;

var IndexView = Backbone.View.extend({
  el: $('#app')[0],

  initialize() {
    this.$header = this.$('#header');
    this.$main = this.$('#main');
  },

  render() {
    let headerView = new HeaderView();
    this.$header.html(headerView.render().$el);
  }
});

module.exports = IndexView;