import express from "express";
import dotenv from "dotenv";
import 'express-async-errors';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

//DB and authenticate User
import connectDB from "./db/connect.js";

//Routers
import authRouter from './routes/authRouter.js';
import jobRoutes from './routes/jobRoutes.js';

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/jobs', authenticateUser, jobRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;


const start = async () => {
  try {
    connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    
  } catch (error) {
    console.log(error);
  }
}


start();