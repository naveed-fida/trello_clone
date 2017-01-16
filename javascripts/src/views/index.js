let Backbone    = require('backbone')
  , $           = require('jquery')
  , HeaderView  = require('./header')
  , ListView    = require('./list')
  , NewListView = require('./new_list')
  , lists       = require('../collections/lists');

require('jquery-ui');
Backbone.$ = $;

let IndexView = Backbone.View.extend({
  el: $('#app')[0],
  events: {
    'sortstop #lists': 'handleSortStop',
    'click': 'hideEdits'
  },

  initialize(options) {
    this.$header = this.$('#header');
    this.$main = this.$('#main');
    this.$lists = this.$('#main #lists');
    this.listenTo(lists, 'add', this.addList);
    this.listenTo(lists, 'remove', this.renderLists)
  },

  render() {
    let headerView = new HeaderView();

    this.$header.html(headerView.render().$el);
    this.renderLists();
    this.$lists.sortable({
      items: '.list'
    });
  },

  renderLists() {
    let new_list_view = new NewListView()
    this.$lists.html(new_list_view.render().$el);
    this.$new_list = this.$('.new_list');
    lists.each(this.addList, this);
  },

  addList(list) {
    let listView = new ListView({ model: list });
    this.$new_list.before(listView.render().$el);
  },
  
  handleSortStop(e, ui) {
    ui.item.trigger('placed');
  },

  hideEdits(e) {
    // if (e.target !== e.currentTarget) return;

    $('input.edit_list:visible').closest('.list').trigger('close_edit');
    $('.new_card:visible').closest('.list').trigger('close_new');
    $('.form:visible').closest('.new_list').trigger('close_form');
    $('.search_wrapper').trigger('hide');
  }
});

module.exports = IndexView;