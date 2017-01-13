var Backbone          = require('backbone')
  , $                 = require('jquery')
  , Handlebars        = require('handlebars')
  , _                 = require('underscore')
  , EditLabelsView    = require('./edit_labels')
  , CopyView          = require('./copy')
  , MoveView          = require('./move')
  , ChangeDueDateView = require('./change_due_date');

require('../../../handlebars/card_modal');

CardModalView = Backbone.View.extend({
  template: Handlebars.templates['card_modal.hbs'],
  className: 'modal_overlay',
  events: {
    'click a.cmnt_send': 'addComment',
    'click a.edit_description': 'editDescription',
    'click #description_text': 'stopProp',
    'click .modal': 'handleModalClick',
    'click .save_description': 'saveDescription',
    'click': 'removeModal',
    'click .add_actions a:first-of-type': 'editLabels',
    'click .add_actions a:nth-of-type(2)': 'changeDueDate',
    'click .other_actions a:first-of-type': 'moveCard',
    'click .other_actions a:nth-of-type(2)': 'copyCard',
    'click .other_actions a:nth-of-type(3)': 'removeCard'
  },

  initialize() {
    this.listenTo(this.model, 'comment_added', this.render);
    this.listenTo(this.model, 'change:description', this.render);
    this.$popover = $('.pop_over');
  },

  render() {
    this.$el.html(this.template(_.extend(this.model.toJSON(),
                                { list: this.model.collection.list.toJSON() })));
    this.$desc_area = this.$('.description_area');
    this.$desc_text = this.$('#description_text');
    this.$desc_p = this.$('.modal_description p');
    return this;
  },

  addComment(e) {
    e.preventDefault();
    var comment = this.$('.modal_comments textarea').val().trim();
    if (!comment) return;
    this.model.addComment(comment);
    console.log(this.model.toJSON());
  },

  saveDescription(e) {
    e.preventDefault();
    var description = this.$desc_text.val().trim();
    this.model.set('description', description);
  },

  stopProp(e) {
    e.stopPropagation();
  },

  handleModalClick(e) {
    e.stopPropagation();
    this.hideDescArea();
    if (this.$popover.is('.is_shown')) {
      this.removeAction();
      this.action_type = "";
    }
  },

  editDescription(e) {
    if (this.$desc_area.is(':visible')) {
      this.hideDescArea()
      return;
    }

    this.prepActionView(e);
    this.$desc_area.show();
    this.$desc_text.val(this.model.get('description'))
                   .focus()[0].select();
    this.$desc_p.hide();
  },

  editLabels(e) {
    this.prepActionView(e);

    if (this.action_type !== "edit_labels") {
      this.action_view = new EditLabelsView({
        model: this.model
      });

      this.action_type = "edit_labels";
      this.showAction(e.target);
    } else {
      this.action_type = "";
    }
  },

  copyCard(e) {
    this.prepActionView(e);

    if (this.action_type !== "copy_card") {
      this.action_view = new CopyView({ model: this.model });
      this.listenTo(this.action_view, 'card_copied', this.removeAction);
      this.action_type = "copy_card";
      this.showAction(e.target);
    } else {
      this.action_type = "";
    }
  },

  moveCard(e) {
    this.prepActionView(e);

    if (this.action_type !== "move_card") {
      this.action_view = new MoveView({ model: this.model });
      this.listenTo(this.action_view, 'card_moved', this.removeAction);
      this.action_type = "move_card"
      this.showAction(e.target);
    } else {
      this.action_type = "";
    }
  },

  changeDueDate(e) {
    this.prepActionView(e);

    if (this.action_type !== "change_due_date") {
      this.action_view = new ChangeDueDateView({ model: this.model });
      this.listenTo(this.action_view, 'due_date_changed', this.removeAction);
      this.action_type = "change_due_date";
      this.showAction(e.target);
    } else {
      this.action_type = "";
    }
  },

  removeCard(e) {
    e.preventDefault();
    this.model.collection.remove(this.model);
    this.removeModal();
  },

  removeModal(e) {
    this.removeAction();
    this.remove();
  },

  hideDescArea() {
    this.$desc_area.hide();
    this.$desc_p.text(this.model.get('description'));
    this.$desc_p.show();
  },

  prepActionView(e) {
    e.preventDefault();
    e.stopPropagation();
    this.hideDescArea();
    this.removeAction();
  },

  removeAction() {
    if (this.action_view) {
      this.action_view.remove();
    }

    this.clearPop();
  },

  clearPop() {
    if (this.$popover.is('.is_shown'))
      this.$popover = $('<div>', { class: "pop_over" }).replaceAll(this.$popover);
  },

  setPopCoords(coords) {
    coords.top = coords.top + 45;
    this.$popover.offset(coords);
  },

  showAction(target) {
    this.setPopCoords($(target).offset());
    this.$popover.html(this.action_view.render().$el)
                 .addClass('is_shown');
  },
});

module.exports = CardModalView;
