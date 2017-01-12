var Backbone    = require('backbone') 
  , $           = require('jquery')
  , Handlebars  = require('handlebars')
  , CardView    = require('./card');
  

require('../../../handlebars/list');
require('jquery-ui/');

Backbone.$ = $;

var ListView = Backbone.View.extend({
  className: "list",
  template: Handlebars.templates["list.hbs"],
  events: {
    'click .add_card': 'newCard',
    'click .cancel': 'hideNew',
    'click .button.add': 'addCardModel',
    'keypress textarea.add_new': 'handleEnter'
  },

  initialize() {
    this.listenTo(this.model.cards, 'add', this.renderCards);
    this.listenTo(this.model.cards, 'remove', this.renderCards);
  },

  render() {
    this.$el.html(this.template({
      list: this.model.toJSON()
    }));

    this.$ul = this.$('ul');
    this.$ul.sortable({
      placeholder: "sort_placeholder"
    });

    this.renderCards();
    return this
  },

  renderCards() {
    this.$ul.html('');
    this.model.cards.each(this.addOne, this);
  },

  addOne(card) {
    var cardView = new CardView({ model: card });
    this.$ul.append(cardView.render().$el);
  },

  newCard(e) {
    e.preventDefault();
    this.$el.addClass('add_mode');
    this.$('textarea').focus();
  },

  hideNew(e) {
    e.preventDefault();
    this.$el.removeClass('add_mode');
  },

  addCardModel(e) {
    if (e) e.preventDefault();
    var title = this.$('textarea').val();
    this.model.cards.add({ title });
    this.$('textarea').val('').focus();
  },

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addCardModel();
    }
  }
});

module.exports = ListView;