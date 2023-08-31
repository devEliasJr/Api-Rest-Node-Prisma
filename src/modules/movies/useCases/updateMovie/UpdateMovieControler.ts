import { Request, Response } from "express";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

export class UpdateMovieControler {
  async handle(req: Request, res: Response) {
    const { title, duration, release_date } = req.body;
    const { id } = req.params;

    const updateMovieUseCase = new UpdateMovieUseCase();

    const result = await updateMovieUseCase.execute({
      id,
      title,
      duration,
      release_date,
    });

    return res.status(200).json(result);
  }
}
