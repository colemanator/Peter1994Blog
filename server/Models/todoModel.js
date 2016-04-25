/**
 * Created by Peter on 25/04/2016.
 */

var mongoose = require('mongoose');

// define model =================
var Todo = mongoose.model('Todo', {
    text : String
});

exports.Todo = Todo;