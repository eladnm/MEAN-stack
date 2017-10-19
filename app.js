const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Family =require('./models/family');
Todo =require('./models/todo');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/todo' ,{
  useMongoClient: true,
  /* other options */
});
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/family or /api/todo');
});

app.get('/api/todo', (req, res) => {
	Todo.getTodos((err, todos) => {
		if(err){
			throw err;
		}
		res.json(todos);
	});
});

app.post('/api/todo', (req, res) => {
	var todo = req.body;
	Todo.addTodo(todo, (err, todo) => {
		if(err){
			throw err;
		}
		res.json(todo);
	});
});

app.put('/api/todo/:_id', (req, res) => {
	var id = req.params._id;
	var todo = req.body;
	Todo.updateTodo(id, todo, {}, (err, todo) => {
		if(err){
			throw err;
		}
		res.json(todo);
	});
});

app.delete('/api/todo/:_id', (req, res) => {
	var id = req.params._id;
	Todo.removeTodo(id, (err, todo) => {
		if(err){
			throw err;
		}
		res.json(todo);
	});
});

app.get('/api/families', (req, res) => {
	Family.getFamilies((err, families) => {
		if(err){
			throw err;
		}
		res.json(families);
	});
});

app.get('/api/families/:_id', (req, res) => {
	Family.getFamiliesById(req.params._id, (err, family) => {
		if(err){
			throw err;
		}
		res.json(family);
	});
});

app.put('/api/families/:_id', (req, res) => {
	var id = req.params._id;
	var family = req.body;
	Family.updateFamily(id, book, {}, (err, family) => {
		if(err){
			throw err;
		}
		res.json(family);
	});
});

app.delete('/api/families/:_id', (req, res) => {
	var id = req.params._id;
	Book.removeFamily(id, (err, family) => {
		if(err){
			throw err;
		}
		res.json(family);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
