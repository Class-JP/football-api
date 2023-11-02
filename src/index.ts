import express, { Request, Response } from "express";
import gamesRouter from './routes/game.routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // Enables JSON parsing in the request body
app.use('/games', gamesRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
