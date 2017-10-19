const mongoose = require('mongoose');

// Family Schema
const familySchema = mongoose.Schema({
	id:{
		type: Number,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	nick_name:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	}
});

const Family = module.exports = mongoose.model('Family', familySchema);

// Get Books
module.exports.getFamilies = (callback, limit) => {
	Family.find(callback).limit(limit);
}

// Get Book
module.exports.getFamiliesById = (id, callback) => {
	Family.findById(id, callback);
}

// Add family
module.exports.addFamily = (family, callback) => {
	Family.create(family, callback);
}

// Update Book
module.exports.updateFamily = (id, family, options, callback) => {
	var query = {_id: id};
	var update = {
		name: family.name,
		nick_name: family.nick_name,
		description: family.description
	}
	Family.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Family.remove(query, callback);
}
