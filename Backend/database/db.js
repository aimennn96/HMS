// singleton
import mongoose from "mongoose";

export const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"HMS"

    }).then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
console.log(`error while connecting${err}`);
    })
}