import { prismaClient } from '../database/prismaClient';
import { IUserRegister } from '../interfaces/UserInterface';
import { ISearch } from '../interfaces/app/search';
import { userInputToList } from '../util/userInputs';

class UserModel {
  async findAll({ page = 0, limit = 1, search }: ISearch) {
    const [users, total] = await prismaClient.$transaction([
      prismaClient.user.findMany({
        select: userInputToList,
        take: Number(limit),
        skip: Number(page),

        where: {
          fullName: {
            contains: String(search),
          },
        },
      }),
      prismaClient.user.count(),
    ]);

    const tolatPage = Math.ceil(total / Number(limit));
    return { tolatPage, total, users };
  }

  async findById(id: number) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }

  async add(userData: IUserRegister) {
    const user = await prismaClient.user
      .create({
        data: {
          ...userData,
        },
      })
      .catch((err: Error) => console.log(err));

    return user;
  }

  update(id: Number, values: any) {}

  delete(id: number) {}
}
export default new UserModel();
