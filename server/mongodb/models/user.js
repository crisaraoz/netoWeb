import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    dni: Number,
    lastName: String,
    firstName: String,
    number: Number,
    email: String,
    sede: String,
    active: {
        type: String,
        enum: ['X', 'Y', 'Z'], 
        default: 'X'
    },
    ultimaFechaDePago: Date,
    proximoVencimiento: Date,
    username: String,
    password: String
});

const User = mongoose.model("User", UserSchema);

export default User;