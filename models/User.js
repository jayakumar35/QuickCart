import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id:{type : String, required : true},
    name : {type : String, required : ture},
    email : {type : String, required : true, unique : true},
    imageUrl : {typr : String, required : true},
    cartItem : {type : Object, default : {}}
},{minimize : false})

const User = mongoose.models.user || mongoose.model('User', UserSchema);

export default User;

