import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id:{type : String, required : true},
    name : {type : String, required : ture},
    email : {type : String, required : true, unique : true},
    imageUrl : {typr : String, required : true},
    cartItems : {type : Object, default : {}}
},{minimize : false})

const User = mongoose.models.user || mongoose.model('User', UserSchema)

export default User

