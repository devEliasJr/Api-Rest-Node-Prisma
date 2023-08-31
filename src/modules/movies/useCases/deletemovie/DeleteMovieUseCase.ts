import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { deleteMovieDTO } from "../../dtos/deleteMovieDTO";

export class DeleteMovieUseCase {
  async execute({ id }: deleteMovieDTO): Promise<void> {

    //Verificar se o filme existe
    const MovieAlreadyExists = await prisma.movie.findUnique({
      where: {
        id,
      },
    });

    //Caso não exista retorna um Error
    if (!MovieAlreadyExists) {
      throw new AppError("Movie not found");
    }

    //Pós Validações faz a deleção
    await prisma.movie.delete({
      where: { id },
    });
  }
}
