const express=require("express")
const mongoose = require("mongoose");
const app=express();
const ejs=require("ejs");

app.set('view engine','ejs');


mongoose.connect('mongodb+srv://gloria:05291984@cluster0.9h1n9.mongodb.net/users?retryWrites=true&w=majority');

const addressSchema={
	name:String,
	address:String
}
var address=mongoose.model('Address', addressSchema);

app.get('/',(req,res)=>{
/*	address.find({},function(err,addresses){
		res.render('index',{
			addressList:addresses
		})  */
	address.find()
	.then((result)=>{
		res.send(result);
	})
	.catch((err)=>{
		console.log(err);
	});
})


//	res.send("working")


app.get('/add',(req,res)=>{
	var address1=new address({
		name: "Tom",
		address: "New York"
	});
	address1.save()
	.then((result)=>{
		res.send(result)
	})
	.catch((err)=>{
		console.log(err);
	});
})


app.listen(3000,function(){
	console.log('server is running');
})