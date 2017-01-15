let Backbone = require('backbone')
  , List     = require('../models/list')
  , _        = require('underscore');

let Lists = Backbone.Collection.extend({
  model: List,

  initialize() {
    this.on('reset', this.setLastId);
  },

  toJSONAll() {
    let lists = [];
    this.models.forEach(model => {
      lists.push(model.toJSONWithCards());
    });

    return lists;
  },

  setLastId() {
    if (this.isEmpty()) {
      this.last_id = 1;
      return;
    }
    this.last_id = _.max(this.pluck('id')) + 1;
  },

  changePosition(list, new_pos) {
    this.remove(list, {silent: true});
    this.add(list, {at: new_pos, silent: true});
  }
});

module.exports = new Lists();