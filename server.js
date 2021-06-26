import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome To The Homepage!");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`App is runnning in ${process.env.NODE_ENV} mode on ${PORT}`)
);
