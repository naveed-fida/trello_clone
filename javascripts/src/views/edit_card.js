var Backbone           = require('backbone')
  , Handlebars         = require('handlebars')
  , $                  = require('jquery')
  , EditLabelsView     = require('./edit_labels')
  , MoveView           = require('./move')
  , CopyView           = require('./copy')
  , ChangeDueDateView  = require('./change_due_date');

require('../../../handlebars/edit_card');
Backbone.$ = $;

var EditCardView = Backbone.View.extend({
  template: Handlebars.templates['edit_card.hbs'],
  className: 'edit_overlay',
  events: {
    'click .save': 'handleSave',
    'keypress .form textarea': 'handleEnter',
    'click .edit_actions a:first-child': 'editLabels',
    'click .edit_actions a:nth-child(2)': 'moveCard',
    'click .edit_actions a:nth-child(3)': 'copyCard',
    'click .edit_actions a:nth-child(4)': 'changeDueDate',
    'click .edit_actions a:nth-child(5)': 'removeCard',
    'click .edit_card': 'stopProp',
    'click': 'closeEdit'
  },

  initialize(opts) {
    this.card_view = opts.card_view;
  },
  
  closeEdit() {
    var $pop_over = $('.pop_over');
    if ($pop_over.is('.is_shown')) {
      this.removeSubView();
      return;
    }
    this.remove();
  },

  stopProp(e) {
    e.stopPropagation();
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$text = this.$('.form textarea');
    this.$popover = $('.pop_over');
    this.$('.edit_card').offset(this.card_view.$el.offset());
    return this;
  },

  editLabels(e) {
    e.preventDefault();
    this.removeSubView();

    if (this.sub_edit_class !== "edit_labels") {
      this.sub_edit_view = new EditLabelsView({
        model: this.model
      });

      this.sub_edit_class = "edit_labels";
      this.showSubEdit(e.target);
    } else {
      this.sub_edit_class = "";
    }
  },

  removeCard(e) {
    e.preventDefault();
    this.remove();
    this.model.collection.remove(this.model);
  },

  moveCard(e) {
    e.preventDefault();
    this.removeSubView();

    if (this.sub_edit_class !== "move_card") {
      this.sub_edit_view = new MoveView({ model: this.model });
      this.sub_edit_class = "move_card"
      this.showSubEdit(e.target);
    } else {
      this.sub_edit_class = "";
    }
  },

  copyCard(e) {
    e.preventDefault();
    this.removeSubView();

    if (this.sub_edit_class !== "copy_card") {
      this.sub_edit_view = new CopyView({ model: this.model });
      this.sub_edit_class = "copy_card";
      this.showSubEdit(e.target);
    } else {
      this.sub_edit_class = "";
    }
  },

  changeDueDate(e) {
    e.preventDefault();
    this.removeSubView();

    if (this.sub_edit_class !== "change_due_date") {
      this.sub_edit_view = new ChangeDueDateView({ model: this.model });
      this.sub_edit_class = "change_due_date";
      this.showSubEdit(e.target);
    } else {
      this.sub_edit_class = "";
    }
  },

  removeSubView() {
    if (this.sub_edit_view) {
      this.sub_edit_view.remove();
    }

    this.clearPop();
  },

  clearPop() {
    if (this.$popover.is('.is_shown'))
      this.$popover = $('<div>', { class: "pop_over" }).replaceAll(this.$popover);
  },

  setPopCoords(coords) {
    coords.top = coords.top + 35;
    this.$popover.offset(coords);
  },

  updateCard() {
    var title = this.$('textarea').val().trim();
    if (!title) return;
    this.model.set('title', title);
    this.remove();
  },

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.updateCard();
    }
  },

  handleSave(e) {
    e.preventDefault();
    this.updateCard();
  },

  showSubEdit(target) {
    this.setPopCoords($(target).offset());
    this.$popover.html(this.sub_edit_view.render().$el)
                 .addClass('is_shown');
  },

});

module.exports = EditCardView;