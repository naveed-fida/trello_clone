var Backbone    = require('backbone')
  , $           = require('jquery')
  , Handlebars  = require('handlebars')
  , _           = require('underscore');

require('../../../handlebars/card_modal');

CardModalView = Backbone.View.extend({
  template: Handlebars.templates['card_modal.hbs'],
  events: {
    'click a.cmnt_send': 'addComment',
    'click a.edit_description': 'editDescription',
    'click .modal_description textarea': 'stopProp',
    'click': 'hideDescription',
    'click .save_description': 'saveDescription'
  },

  initialize() {
    this.listenTo(this.model, 'comment_added', this.render);
  },

  render() {
    this.$el.html(this.template(_.extend(this.model.toJSON(),
                                { list: this.model.collection.list.toJSON() })));
    return this;
  },

  addComment(e) {
    e.preventDefault();
    var comment = this.$('.modal_comments textarea').val().trim();
    if (!comment) return;
    this.model.addComment(comment);
  },

  saveDescription(e) {
    e.preventDefault();
    e.stopPropagation();
    var description = $('.description_area textarea').val().trim()
    this.model.set('description', description);
  },

  stopProp(e) {
    e.sopPropagation();
  },

  hideDescription() {
    this.$('.description_area').hide();
  },

  editDescription(e) {
    e.preventDefault();
    e.stopPropagation();
    this.$('.description_area').show();
  }
});

module.exports = CardModalView;
