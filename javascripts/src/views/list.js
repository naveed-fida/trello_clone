let Backbone    = require('backbone') 
  , $           = require('jquery')
  , Handlebars  = require('handlebars')
  , CardView    = require('./card');
  

require('../../../handlebars/list');
require('jquery-ui/');

Backbone.$ = $;

let ListView = Backbone.View.extend({
  className: "list",
  template: Handlebars.templates["list.hbs"],
  events: {
    'click .add_card': 'newCard',
    'click .cancel': 'hideNew',
    'click .button.add': 'addCardModel',
    'keypress textarea.add_new': 'handleEnter',
    'click .options': 'removeList',
    'sortstop ul': 'handleSort',
    'placed': 'handlePlaced',
    'dblclick h2': 'editTitle',
    'close_edit': 'closeEdit',
    'close_new': 'closeNew',
    'keypress input.edit_list': 'saveTitle',
    'click input.edit_list': 'stopProp',
    'click .new_card': 'stopProp',
    'sortreceive ul': 'receiveCard',
    'sortstart ul': 'stylePlaceholder'
  },

  initialize() {
    this.listenTo(this.model.cards, 'add', this.renderCards);
    this.listenTo(this.model.cards, 'remove', this.renderCards);
    this.listenTo(this.model, 'change:title', this.render);
  },

  render() {
    this.$el.html(this.template({
      list: this.model.toJSON()
    }));

    this.$ul = this.$('ul');
    this.$ul.sortable({
      placeholder: "sort_placeholder",
      connectWith: '.list ul'
    });

    this.renderCards();
    return this
  },

  renderCards() {
    this.$ul.html('');
    this.model.cards.each(this.addOne, this);
  },

  addOne(card) {
    let cardView = new CardView({ model: card });
    this.$ul.append(cardView.render().$el);
  },

  newCard(e) {
    this.closeOtherEdits();
    this.$el.addClass('add_mode');
    this.$('textarea').focus();
    return false;
  },

  hideNew(e) {
    e.preventDefault();
    this.$el.removeClass('add_mode');
  },

  addCardModel(e) {
    if (e) e.preventDefault();
    let title = this.$('textarea').val().trim();
    if (!title) return;
    this.model.cards.add({ title });
    this.$('textarea').val('').focus();
  },

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addCardModel();
    }
  },

  removeList() {
    this.model.collection.remove(this.model);
  },

  handleSort(e, ui) {
    ui.item.trigger('placed');
  },

  handlePlaced() {
    this.model.collection.changePosition(this.model, this.$el.index());
  },

  editTitle(e) {
    this.$('h2').hide();
    this.$('input.edit_list').show()
                             .val(this.model.get('title'))
                             .focus()[0].select();
  },

  saveTitle(e) {
    if (e.key === 'Enter') {
      let text = $(e.target).val().trim();
      if (text) this.model.set('title', text);
      this.closeEdit();
    }
  },

  stopProp(e) {
    e.stopPropagation();
  },

  closeEdit() {
    this.$('input.edit_list').hide()
    this.$('h2').show();
  },

  closeNew() {
    this.$el.removeClass('add_mode');
  },

  closeOtherEdits() {
    $('.new_card:visible').closest('.list').trigger('close_new');
    $('.new_list:visible').trigger('close_form');
    $('input.edit_list:visible').closest('.list').trigger('close_edit');
    $('.search_wrapper').trigger('hide');
  },

  receiveCard(e, ui) {
    ui.item.trigger('moved_to_other', {list_id: this.model.get('id')});
  },

  stylePlaceholder(e, ui) {
    ui.placeholder.width(ui.helper.outerWidth());
    ui.placeholder.height(ui.helper.outerHeight());    
  }
});

module.exports = ListView;