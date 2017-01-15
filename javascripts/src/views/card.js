let Backbone      = require('backbone')
  , $             = require('jquery')
  , Handlebars    = require('handlebars')
  , EditCardView  = require('./edit_card')
  , CardModalView = require('./card_modal')
  , lists         = require('../collections/lists');

require('../../../handlebars/card');
Backbone.$ = $;

let CardView = Backbone.View.extend({
  template: Handlebars.templates['card.hbs'],
  tagName: 'li',
  className: 'card',
  events: {
    'click': 'openCardModal',
    'click span.fa-pencil': 'openEdit',
    'placed': 'handlePlaced',
    'moved_to_other': 'moveCard'
  },

  initialize() {
    this.listenTo(this.model, 'change change_labels change_comments', this.render);
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  openEdit(e) {
    e.stopPropagation();
    let edit_view = new EditCardView({
      model: this.model,
      card_view: this
    });
    $(document.body).append(edit_view.render().$el);
    edit_view.$('.form textarea').focus()[0].select();
  },

  openCardModal() {
    let modal_view = new CardModalView({ model: this.model });
    $(document.body).append(modal_view.render().$el);
  },

  handlePlaced() {
    console.log(this.$el.index());
    this.model.collection.changePosition(this.model, this.$el.index());
  },

  moveCard(e, options) {
    let model     = this.model.collection.remove(this.model, {silent: true})
      , position  = this.$el.index()
      , list      = lists.get(options.list_id);

    list.cards.add(model, {at: position, silent: true});
  }
});

module.exports = CardView;