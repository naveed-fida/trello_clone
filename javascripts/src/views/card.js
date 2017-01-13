let Backbone      = require('backbone')
  , $             = require('jquery')
  , Handlebars    = require('handlebars')
  , EditCardView  = require('./edit_card')
  , CardModalView = require('./card_modal');

require('../../../handlebars/card');
Backbone.$ = $;

let CardView = Backbone.View.extend({
  template: Handlebars.templates['card.hbs'],
  tagName: 'li',
  className: 'card',
  events: {
    'click': 'openCardModal',
    'click span.fa-pencil': 'openEdit'
  },

  initialize() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'comment_added', this.render);
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  openEdit(e) {
    e.stopPropagation();
    var edit_view = new EditCardView({
      model: this.model,
      card_view: this
    });
    $(document.body).append(edit_view.render().$el);
    edit_view.$('.form textarea').focus()[0].select();
  },

  openCardModal() {
    var modal_view = new CardModalView({ model: this.model });
    $(document.body).append(modal_view.render().$el);
  },
});

module.exports = CardView;