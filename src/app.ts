import express, { Request, Response } from "express";
import { analyzeUsers } from "./controller";

const app = express();

const router = express.Router();

app.use(express.json());

router.post("/analyze", analyzeUsers);

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("<html><body><h1>Analyzer Portal</h1></body></html>");
});

app.listen(4000, () => {
  console.log("Server Listening at 4000");
});
