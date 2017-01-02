var Backbone    = require('backbone')
  , $           = require('jquery')
  , Boards      = require('./collections/boards')
  , IndexView   = require('./views/index');

var App = {
  init() {
    this.boards.reset([
      { title: "Board 1", lists: [ list1, list2 ] },
      { title: "Board 2", lists: [ list3, list4 ] }
    ], { parse: true });

    this.createIndex();
  },

  createIndex() {
    new IndexView();
  }
};














App.boards = new Boards();

list1 = {
  title: "List 1",
  cards: [
    { title: "List 1, Card 1", description: ""},
    { title: "List 1, Card 2", description: ""}
  ]
};

list2 = {
  title: "List 2",
  cards: [
    { title: "List 2, Card 1", description: ""},
    { title: "List 2, Card 2", description: ""}
  ]
};

list3 = {
  title: "List 3",
  cards: [
    { title: "List 3, Card 1", description: "" },
    { title: "List 3, Card 2", description: "" }
  ]
};

list4 = {
  title: "List 4",
  cards: [
    { title: "List 4, Card 1", description: "" },
    { title: "List 4, Card 2", description: "" }
  ]
};

App.init();