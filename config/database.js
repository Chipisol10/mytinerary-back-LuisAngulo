import mongoose from "mongoose";


let url = process.env.URI_MONGO


 async function connectionToDatabase() {
    try {
       await mongoose.connect(process.env.URI_MONGO)
        console.log("Connect to Data Base");
    } catch (error) {
        console.log(error);
    }
}

connectionToDatabase()