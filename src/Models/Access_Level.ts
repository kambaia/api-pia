import { prismaClient } from '../database/prismaClient';
import { ISearch } from '../interfaces/app/search';

class UserModel {
  async findAll({ page = 0, limit = 1, search }: ISearch) {
    const [users, total] = await prismaClient.$transaction([
      prismaClient.user.findMany({
        select: {
          id: true,
          email: true,
          profileName: true,
          userName: true,
          firstName: true,
          surname: true,
          fullName: true,
          password: true,
          phoneNumber: true,
          active: true,
          status: true,
          banned: true,
          createdAt: true,
          updatedAt: true,
          urlProfile: true,
          role: true,
        },
        take: limit,
        skip: page,

        where: {
          email: {
            contains: String(search),
          },
        },
      }),
      prismaClient.user.count(),
    ]);

    const tolatPage = Math.ceil(total / limit);

    return { tolatPage, total, users };
  }
  async findOne(name: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        fullName: name,
      },
    });

    return user;
  }

  async findById(id: number) {}

  findByEmail(email: string) {}

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
