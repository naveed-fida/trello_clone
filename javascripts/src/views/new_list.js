let Backbone    = require('backbone')
  , $           = require('jquery')
  , HeaderView  = require('./header')
  , Handlebars  = require('handlebars')
  , lists       = require('../collections/lists');

require('../../../handlebars/new_list');
Backbone.$ = $;

let NewListView = Backbone.View.extend({
  template: Handlebars.templates['new_list.hbs'],
  className: 'new_list',
  events: {
    'click a.add_a_list': 'showForm',
    'click a.save': 'handleSave',
    'keypress .form input': 'handleEnter',
    'click a.close': 'render',
    'close_form': 'render',
    'click': 'closeOtherEdits'
  },

  render() {
    this.$el.html(this.template());
    this.$input = this.$('input');
    return this;
  },

  showForm(e) {
    e.preventDefault();
    $(e.target).hide();
    this.$('.form').show().find('input').focus();
  },

  closeOtherEdits(e) {
    e.stopPropagation();
    $('input.edit_list:visible').closest('.list').trigger('close_edit');
    $('.new_card:visible').closest('.list').trigger('close_new');
  },

  handleSave(e) {
    e.preventDefault();
    this.saveList();
  },

  handleEnter(e) {
    if(e.key === "Enter") {
      this.saveList();
    }
  },

  saveList(e) {
    let list_title = this.$input.val().trim();
    if (!list_title) return;
    lists.add({
      title: list_title,
      cards: []
    }, {parse: true});
    this.render();
  }
});

module.exports = NewListView;