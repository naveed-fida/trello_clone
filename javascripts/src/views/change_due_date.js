var Backbone      = require('backbone')
  , $             = require('jquery')
  , Handlebars    = require('handlebars')
  , lists         = require('../collections/lists')
  , moment        = require('moment');

Backbone.$ = $;
require('../../../handlebars/change_due_date');
require('jquery-ui');

var ChangeDueDateView = Backbone.View.extend({
  template: Handlebars.templates['change_due_date.hbs'],
  events: {
    'click .save_date': 'updateDate',
    'click .remove_date': 'removeDate'
  },

  render() {
    this.$el.html(this.template());

    var $date_picker = this.$('.date_picker');
    $date_picker.datepicker({
      changeMonth: true,
      changeYear: true,
      defaultDate: '+1d',
      onSelect: (dateText, inst) => {
        this.$('.date_format').val(dateText);
      }
    });
    var date_frmt = moment(+$date_picker.datepicker('getDate')).format('MM/DD/YYYY');
    this.$('.date_format').val(date_frmt);
    return this;
  },

  updateDate(e) {
    e.preventDefault();
    var due_date = this.$('.date_picker').datepicker('getDate');
    console.log(due_date.toString());
    this.model.set('due_date', +due_date);
    $('.overlay').trigger('click');
  },

  removeDate(e) {
    e.preventDefault();
    this.model.set('due_date', undefined);
    $('.overlay').trigger('click');
  }
});

module.exports = ChangeDueDateView;