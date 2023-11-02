import { Router, Request, Response } from "express";
import { Game } from "../models/game";

const router = Router();
let games: Game[] = [];

// CRUD API ~ Games Entity
router.get("/", (req: Request, res: Response) => {
  res.json(games);
});

router.get("/:id", (req: Request, res: Response) => {
  const game = games.find((t) => t.id === parseInt(req.params.id));

  if (!game) {
    res.status(404).send("Game not found");
  } else {
    res.json(game);
  }
});

router.post("/", (req: Request, res: Response) => {
  const params = req.body;

  const game: Game = {
    id: games.length + 1,
    description: params.description,
    location: params.location,
    matchDate: params.matchDate || params.matchdate,
    score: params.score,
    teamLocal: params.teamLocal || params.teamlocal,
    teamVisit: params.teamVisit || params.teamvisit,
  };

  games.push(game);

  res.status(201).json(game);
});

router.put("/:id", (req: Request, res: Response) => {
  const game = games.find((t) => t.id === parseInt(req.params.id));
  const params = req.body;

  if (!game) {
    res.status(404).send("Game not found");
  } else {
    game.description = params.description || game.description;
    game.location = params.location || game.location;
    game.matchDate = params.matchDate || params.matchdate || game.matchDate;
    game.score = params.score || game.score;
    game.teamLocal = params.teamLocal || params.teamlocal || game.teamLocal;
    game.teamVisit = params.teamVisit || params.teamvisit || game.teamVisit;

    res.json(game);
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const index = games.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send("Game not found");
  } else {
    games.splice(index, 1);

    res.status(204).send();
  }
});

export default router;
