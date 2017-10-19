const mongoose = require('mongoose');

// Todo Schema
const todoSchema = mongoose.Schema({
	id:{
		type: Number
	},
	description:{
		type: String
	},
	date:{
		type: Date
	},
	mission:{
		type: Boolean
	},
	customer_name:{
		type: String
	}
});

const Todo = module.exports = mongoose.model('Todo', todoSchema);

// Get Todos
module.exports.getTodos = (callback, limit) => {
	Todo.find(callback).limit(limit);
}

// Add Todo
module.exports.addTodo = (todo, callback) => {
	Todo.create(todo, callback);
}

// Update Genre
module.exports.updateTodo = (id, todo, options, callback) => {
	var query = {_id: id};
	var update = {
		description: todo.description
	}
	Todo.findOneAndUpdate(query, update, options, callback);
}


// Delete Todo
module.exports.removeTodo = (id, callback) => {
	var query = {_id: id};
	Todo.remove(query, callback);
}
