import cors from "cors";
import express, { type Request, type Response } from "express";
import "express-async-errors";
import { userRouter } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.use((error: Error, _request: Request, response: Response) => {
  if (error instanceof Error) {
    response.status(400).json({
      error: error.message,
    });
  }

  response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

export default app;
