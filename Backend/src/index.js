import { app } from "./app.js";
import connectToDatabase from "./db/index.js";

import dotenv from 'dotenv'

//configure dotenv
dotenv.config({
    path: './.env'
})
const port = process.env.PORT
connectToDatabase()
.then(() => {
    app.listen(port || 3000, () => {
        console.log(`MongoDB connected successfully on ${port}`);
        
    })
})
.catch((error) => {
    console.log("MongoDB Connection Error", error);
    
})