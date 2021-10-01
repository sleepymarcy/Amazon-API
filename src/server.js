import express from "express";
import usersRouter from "./services/users/index.js";
import cartRouter from "./services/cart/index.js";
import { connectDB } from "./db/index.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

app.use("/users", usersRouter);
app.use("/cart", cartRouter);

app.listen(port, async () => {
  console.log("🚀 Server is running on port ", port);
  await connectDB();
});

app.on("error", (error) => console.log("🚀 Server is crashed due to ", error));