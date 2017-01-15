let Backbone      = require('backbone')
  , $             = require('jquery')
  , Handlebars    = require('handlebars')
  , lists           = require('../collections/lists');

require('../../../handlebars/move');
require('../../../handlebars/position');
require('../../../handlebars/helpers');
Backbone.$ = $;

let MoveView = Backbone.View.extend({
  template: Handlebars.templates['move.hbs'],
  pos_template: Handlebars.templates['position.hbs'],
  events: {
    'change .list_select': 'listSelectChange',
    'change .position_select': 'positionSelectChange',
    'click .button.move': 'moveCard'
  },

  render() {
    this.$el.html(this.template({
      lists: this.getListDetails()
    }));
    this.renderPosition(this.model.collection.length);
    return this;
  },

  getListDetails() {
    
    return lists.toJSONAll().map(list => {
      return {
        title: list.title,
        length: list.cards.length,
        id: list.id,
        current: this.model.collection.list.id === list.id ? true : false
      };
    });
  },

  listSelectChange(e) {
    let list_idx = +$(e.target).val();
    let list = lists.get(list_idx);
    if (list === this.model.collection.list) {
      this.renderPosition(list.cards.length);
    } else {
      this.renderPosition(list.cards.length + 1);
    }
  },

  renderPosition(n) {
    this.$('.position_select').html(this.pos_template({
      positions: n
    }));
  },

  moveCard(e) {
    e.preventDefault();
    let model     = this.model.collection.remove(this.model)
      , position  = +this.$('.position_select').val() - 1
      , list      = lists.get(+this.$('.list_select').val());

    list.cards.add(model, {at: position});
    this.trigger('card_moved');
  },
});

module.exports = MoveView;