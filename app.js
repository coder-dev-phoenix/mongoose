// getting-started mongoose/js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/testDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const testSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "What is your name?"]
	},
	age: {
		type: Number,
		min: 1,
		max: 100
	},
	education: String
});

const testModel = mongoose.model("testStore", testSchema);

const testValue = new testModel({
	name: "hassan",
	age: 121,
	education: "BSCS"
});


testModel.deleteOne({ _id: "5e54f06e21d0f71e64aa6780" },function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Successfully deleted");
    }
});


// testModel.updateOne({ _id: "5e54f1a42ab4fd1e6c843353" },{name:"uzair"},function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully updated change")
//     }
// });

// testValue.save();

// const personSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number
// });

// const personModel = mongoose.model("personstore", personSchema);

// const personValue = new personModel({
// 	name: "John",
// 	age: 37
// });

// personValue.save();

// const testValue01 = new testModel({
// 	name: "ammad",
// 	age: 24,
// 	education: "ACCA"
// });
// const testValue02 = new testModel({
// 	name: "bilal",
// 	age: 27,
// 	education: "DAE"
// });
// const testValue03 = new testModel({
// 	name: "maaz",
// 	age: 17,
// 	education: "INT"
// });

// testModel.insertMany([testValue01, testValue02, testValue03], function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Succesfully save your data");
// 	}
// });

// testModel.find(function(err, personstores) {
// 	if (err) {
// 		console.log(err);
// 	} else {
//         // console.log(personstores);
// 		personstores.forEach(function(value) {
// 			console.log(value.name);
//         });
//         mongoose.connection.close()
//     }
// });
