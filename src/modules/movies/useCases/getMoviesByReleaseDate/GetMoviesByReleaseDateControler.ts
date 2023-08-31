import { Request, Response } from "express";
import { GetMoviesByReleaseDateUserCase } from "./GetMoviesByReleaseDateUseCase";

export class GetMoviesByReleaseDateController {
  async handle(req: Request, res: Response) {
    const getMoviesByReleaseDateUserCase = new GetMoviesByReleaseDateUserCase();

    const result = await getMoviesByReleaseDateUserCase.execute();

    return res.status(201).json(result);
  }
}
