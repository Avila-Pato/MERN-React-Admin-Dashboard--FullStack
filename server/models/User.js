// aqui se creara ele squema para el usuario que reprensetnra el el modelo de los datos

import mongoose from "mongoose";


// este es el esquema de los datos que se van a guardar en la base de datos de moongoose
const UserSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transactions: Array,
        role: {
            type: String,
            enum: ["user", "admin", "superadmin"],
            default: "admin",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;