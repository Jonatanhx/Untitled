import type { NextFunction, Request, Response } from "express";
import express from "express";

const app = express();
const port = 4000;

const logger = function (req: Request, res: Response, next: NextFunction) {
  console.log(res.statusCode);
  next();
};

app.use(logger);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
