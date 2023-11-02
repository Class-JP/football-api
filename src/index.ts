import express, { Request, Response } from "express";
import cors from 'cors';
import gamesRouter from './routes/game.routes';

const app = express();

app.use(cors({
  origin: '*'
}));

const port = process.env.PORT || 3001;

app.use(express.json()); // Enables JSON parsing in the request body
app.use('/games', gamesRouter);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
