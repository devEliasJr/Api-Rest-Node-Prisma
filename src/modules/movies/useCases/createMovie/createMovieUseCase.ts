import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";

import { Movie} from "@prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
  async execute({ title, duration, release_date  }: CreateMovieDTO): Promise<Movie> {
    //Verificar Movie
    const MovieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title
      },
    });

    if (MovieAlreadyExists) {
      throw new AppError('movie already exists')
    }

    //Criar movie
    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date
      },
    });

    return movie;
  }
}
