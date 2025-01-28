import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDb from "./db/index.db.js";
import userRouter from "./routes/user.routes.js";
// import testRouter from "./routes/test.routes.js";

dotenv.config({
  path: "./.env",
});

const PORT = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1/user", userRouter);

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server is running on: http://localhost:${PORT}`);
});
