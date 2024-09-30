import mongoose from "mongoose";

const userSchema  =new mongoose.Schema({
    username: {
        type :String,
        required: true,
        unique:true,
    },
    email: {
        type :String,
        required: true,
        unique:true,
    },
    password: {
        type :String,
        required: true,

        
       
    },
    profilePicture:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fprofile-picture&psig=AOvVaw3dn1kc6iOomK_coZKR-6sq&ust=1726315314920000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCDhOzvv4gDFQAAAAAdAAAAABAJ",
    }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;
