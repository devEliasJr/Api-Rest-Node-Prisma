import { Movie } from "@prisma/client";
import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";

import { UpdateMovieDTO } from "../../dtos/UpdateMovieDTO";

export class UpdateMovieUseCase {
  async execute({
    id,
    title,
    duration,
    release_date,
  }: UpdateMovieDTO): Promise<Movie> {
    //Verificar se o filme existe
    const MovieAlreadyExists = await prisma.movie.findUnique({
      where: {
        id,
      },
    });

    if (!MovieAlreadyExists) {
      throw new AppError("Movie not found");
    }

    //Atualizar movie
    const updatedMovie = await prisma.movie.update({
      where: {
        id,
      },
      data: {
        title,
        duration,
        release_date,
      },
    });

    return updatedMovie
  }
}
