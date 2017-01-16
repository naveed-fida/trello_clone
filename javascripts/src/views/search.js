let Backbone    = require('backbone')
  , _           = require('underscore')
  , $           = require('jquery')
  , Handlebars  = require('handlebars')
  , HeaderView  = require('./header')
  , CardView    = require('./card')
  , lists       = require('../collections/lists');

Backbone.$ = $;

require('../../../handlebars/search');

var SearchView = Backbone.View.extend({
  template: Handlebars.templates['search.hbs'],
  className: 'search_wrapper',
  events: {
    'hide': 'removeSearch',
    'click li': 'removeSearch'
  },
  
  initialize(options) {
    this.cards = options.cards;
  },

  render() {
    this.$el.html(this.template({cards: this.cardsToPlain()}));
    this.$ul = this.$('ul');
    if(this.cards.length > 0) {
      _.each(this.cards, this.addCard, this);
    }
    return this;
  },

  addCard(card) {
    var card_view = new CardView({model: card})
      , $card_el = card_view.render().$el;

    card_view.$('.fa-pencil').hide();
    this.$ul.append($card_el);
  },

  removeSearch() {
    this.remove();
    $('.search').fadeOut(300);
  },

  cardsToPlain() {
    var plain = [];
    _.each(this.cards, model => plain.push(model.toJSON()));
    return plain;
  }
});

module.exports = SearchView;