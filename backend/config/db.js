import mongoose from "mongoose";

 export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://nimasha:2002727@cluster0.pyv8f.mongodb.net/Food_del').then(()=>console.log('DB Connected'));
}

//mongodb+srv://nimasha:2002727@cluster0.pyv8f.mongodb.net/?