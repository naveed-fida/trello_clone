var Backbone     = require('backbone')
  , fauxServer   = require('backbone-faux-server');

fauxServer.addRoutes({
    createBook: {
        urlExp: "trello/boards",
        httpMethod: "POST",
        handler: function (context) {
            // Create book using attributes in context.data
            // Save to persistence layer
            // Return attributes of newly created book
        }
    },
    readBooks: {
        urlExp: "trello/boards",
        httpMethod: "GET",
        handler: function (context) {
            // Return array of stored book attributes
        }
    },
    readBook: {
        urlExp: "trello/boards/:id",
        httpMethod: "GET",
        handler: function (context, bookId) {
            // Return attributes of stored book with id 'bookId'
        }
    },
    updateBook: {
        urlExp: "library-app/books/:id",
        httpMethod: "PUT",
        handler: function (context, bookId) {
            // Update stored book with id 'bookId', using attributes in context.data
            // Return updated attributes
        }
    },
    deleteBook: {
        urlExp: "library-app/books/:id",
        httpMethod: "DELETE",
        handler: function (context, bookId) {
            // Delete stored book of id 'bookId'
        }
    }
});