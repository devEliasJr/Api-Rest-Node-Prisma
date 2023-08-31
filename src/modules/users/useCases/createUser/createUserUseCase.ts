import { AppError } from "../../../../errors/AppErros";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "@prisma/client";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    //Verificar User
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError('User already exists')
    }

    //Criar User
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });

    return user;
  }
}
