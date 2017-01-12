var Backbone      = require('backbone')
  , $             = require('jquery')
  , Handlebars    = require('handlebars')
  , lists           = require('../collections/lists');

require('../../../handlebars/copy');
require('../../../handlebars/position');
require('../../../handlebars/helpers');
Backbone.$ = $;

var CopyView = Backbone.View.extend({
  template: Handlebars.templates['copy.hbs'],
  pos_template: Handlebars.templates['position.hbs'],
  events: {
    'change .list_select': 'listSelectChange',
    'change .position_select': 'positionSelectChange',
    'click .button.copy': 'copyCard'
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
    var list_idx = +$(e.target).val();
    var list = lists.get(list_idx);
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

  copyCard(e) {
    e.preventDefault();
      var position  = +this.$('.position_select').val() - 1
      , list      = lists.get(+this.$('.list_select').val());

    list.cards.add(this.model.clone(), { at: position });

    $('.overlay').trigger('click').trigger('click');
    console.log(lists.toJSONAll());
  },
});

module.exports = CopyView;