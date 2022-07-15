import mongoose from "mongoose";
const connectDB=()=>{
    return new Promise((res:(value:unknown)=>void)=>{
        if(mongoose.connections[0].readyState){
            res(null)
            console.log("Already connected");
            return;
        }
        mongoose.connect(process.env.MONGODB_URI,{},err=>{
            if(err) throw err;
            res(null)
            console.log("mongo connected");
        })
    })
    
}
export default connectDB;