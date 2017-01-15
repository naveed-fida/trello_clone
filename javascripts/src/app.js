let Backbone    = require('backbone')
  , $           = require('jquery')
  , IndexView   = require('./views/index');

global.App = {
  lists: require('./collections/lists'),

  init() {
    let lists = this.retrieveFromBrowser();
    this.lists.reset(lists, { parse: true});
    this.createIndex();
    $(window).on('unload', this.saveToBrowser.bind(this));
  },

  retrieveFromBrowser() {
    if(window.localStorage.getItem('trello_clone'))
      return JSON.parse(window.localStorage.getItem("trello_clone"));
    else return [];
  },

  createIndex() {
    (new IndexView()).render();
  },

  saveToBrowser() {
    let lists = this.lists.toJSONAll();
    window.localStorage.setItem("trello_clone", JSON.stringify(lists));
  }
};
App.init();
