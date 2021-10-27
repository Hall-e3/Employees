import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import employsRoutes from "./views/Routes/home.js";
import productRoutes from "./views/Routes/product.js";
import branchRoutes from "./views/Routes/branch.js";
dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extented: true }));
app.use(express.urlencoded({ limit: "30mb", extented: true }));
app.use(cors());
app.use("/employees", employsRoutes);
app.use("/products", productRoutes);
app.use("/branches", branchRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 7000;
mongoose
  .connect(CONNECTION_URL, {
    useNewURlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on ${PORT} ....`))
  )
  .catch((error) => console.log(error));
