import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectDb = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`MONGO DB connected successfully 🚀 DB HOST : ${connectionInstance.connection.host}` )
    } catch (error) {
        console.log("MONGO DB CONNECTION ERROR: ", error )
        process.exit(1)
    }
}

export default connectDb