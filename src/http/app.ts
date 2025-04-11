import cors from "cors";
import express, { type Request, type Response } from "express";
import "express-async-errors";
import { CustomError } from "../error/CustomError";
import { userRouter } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.use((error: Error, _request: Request, response: Response) => {
  if (error instanceof CustomError) {
    response.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

export default app;
