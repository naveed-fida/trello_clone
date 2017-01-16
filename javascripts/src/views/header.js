let Backbone    = require('backbone')
  , $           = require('jquery')
  , SearchView  = require('./search')
  , lists       = require('../collections/lists')
  , Handlebars  = require('handlebars');

require('../../../handlebars/header');

let HeaderView = Backbone.View.extend({
  template: Handlebars.templates['header.hbs'],
  events: {
    'input #search': 'renderSearch'
  },

  render() {
    this.$el.html(this.template());
    this.$search = $('.search');
    return this;
  },

  renderSearch() {
    if (!this.$("#search").val().trim()) {
      $('.search_wrapper').trigger('hide')
      return;
    }
    var search_view = new SearchView({cards: this.searchCards()});
    this.$search.html(search_view.render().$el);
    this.$search.fadeIn(300);
  },

  searchCards() {
    var search_term = this.$('#search').val().trim();
    var cards = [];
    lists.each(list => {
      cards = cards.concat(list.cards.filter(card => card.get('title').includes(search_term)));
    });

    return cards;
  }
});

module.exports = HeaderView;