import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

import { Request, Response } from "express";

export class DeleteMovieController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    
    const deleteMovieUseCase = new DeleteMovieUseCase();

    try {
      await deleteMovieUseCase.execute({ id });

      return res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while deleting the movie" });
    }
  }
}
