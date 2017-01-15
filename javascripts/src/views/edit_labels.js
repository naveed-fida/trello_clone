let Backbone      = require('backbone')
  , $             = require('jquery')
  , Handlebars    = require('handlebars');

Backbone.$ = $;

require('../../../handlebars/helpers');
require('../../../handlebars/edit_labels');

let EditLabelsView = Backbone.View.extend({
  template: Handlebars.templates['edit_labels.hbs'],
  'className': 'edit_labels',
  events: {
    'click li': 'toggleLabel'
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  toggleLabel(e) {
    e.preventDefault();
    let $li = $(e.target);
    let color = $li.attr('class');

    if(!this.model.get('labels').includes(color)) {
      // this.model.set('labels', [...this.model.get('labels'), color]);
      this.model.addLabel(color);
      $li.find('span').attr('class', 'fa fa-check');
    } else {
      this.model.removeLabel(color);
      $li.find('span').attr('class', '');
    }
  },
});

module.exports = EditLabelsView;