var Backbone    = require('backbone')
  , $           = require('jquery')
  , IndexView   = require('./views/index');

global.App = {
  lists: require('./collections/lists'),

  init() {
    this.lists.reset([list1, list2, list3, list4], { parse: true });
    this.createIndex();
  },

  createIndex() {
    (new IndexView({lists: this.lists})).render();
  }
};
















list1 = {
  title: "List 1",
  cards: [
    { title: "List 1, Card 1",},
    { title: "List 1, Card 2",}
  ]
};

list2 = {
  title: "List 2",
  cards: [
    { title: "List 2, Card 1"},
    { title: "List 2, Card 2"}
  ]
};

list3 = {
  title: "List 3",
  cards: [
    { title: "List 3, Card 1"},
    { title: "List 3, Card 2"}
  ]
};

list4 = {
  title: "List 4",
  cards: [
    { title: "List 4, Card 1"},
    { title: "List 4, Card 2"}
  ]
};

App.init();