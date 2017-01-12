var Backbone    = require('backbone')
  , $           = require('jquery')
  , HeaderView  = require('./header')
  , ListView  = require('./list');

Backbone.$ = $;

var IndexView = Backbone.View.extend({
  el: $('#app')[0],

  initialize(options) {
    this.$header = this.$('#header');
    this.$main = this.$('#main');
    this.lists = options.lists;
  },

  render() {
    let headerView = new HeaderView();
    this.$header.html(headerView.render().$el);
    this.lists.each(this.addList, this);
  },

  addList(list) {
    let listView = new ListView({ model: list });
    this.$main.append(listView.render().$el);
  }
});

module.exports = IndexView;