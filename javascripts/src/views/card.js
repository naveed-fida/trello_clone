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
    this.$overlay = $('.overlay');
    this.$modal = $('.modal');
    this.listenTo(this.model, 'change', this.render);
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  openEdit(e) {
    e.stopPropagation();
    this.edit_view = new EditCardView({
      model: this.model,
      card_view: this
    });
    this.listenTo(this.edit_view, 'update', this.updateCard);
    this.$el.append(this.edit_view.render().$el);
    this.edit_view.$('textarea').focus()[0].select();
    this.$overlay.show();
    this.$overlay.on('click', this.closeEdit.bind(this));
  },

  closeEdit() {
    var $pop_over = $('.pop_over');
    if ($pop_over.is('.is_shown')) {
      this.trigger('hide_pop');
      return;
    }
    $('.overlay').off().hide();
    this.edit_view.remove();
    this.render();
  },

  updateCard(options) {
    this.model.set('title', options.title);
    this.closeEdit();
  },

  openCardModal() {
    this.modal_view = new CardModalView({ model: this.model });
    this.$overlay.show();
    this.$modal.html(this.modal_view.render().$el);
    this.$modal.addClass('is_shown')
    this.$overlay.on('click', this.closeCardModal.bind(this));
  },

  closeCardModal() {
    this.modal_view.remove();
    this.$overlay.off().hide();
    this.$modal.removeClass('is_shown').removeAttr('style');
  }
});

module.exports = CardView;