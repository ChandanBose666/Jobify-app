
import mongoose from 'mongoose';



const connectDB = (db) => {
    return mongoose.connect(db, {
      useUnifiedTopology: true,
    })
  }

export default connectDB;