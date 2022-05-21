import { Request, Response } from "express";
import { School } from "../Models/Schoole";
import { User } from "../Models/User";
class UserController {
  public async listAllUser(_req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find({}).populate(
        "permission",
        "_id role type"
      ).populate('schoolId',  '_id');
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  public async accessUser(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const users = await User.findById(userId).populate(
        "permission",
        "_id role type livel"
      ).populate('schoolId',  '_id schoolLogo schoolName schoolCode');
   

      if (users) {
       const newUser = {
        profile: users.profile,
        id:users._id ,
        userName:users.userName,
        fullName: users.fullName,
        email: users.email, 
        active:users.active,
        permissions:users.permission,
        school:  users.schoolId
       }
        res.status(200).send(newUser);
      } else {
        res.status(404).send({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(404).send(error);
    }
  }
  
	public async listOneAcesss(req: Request, res: Response): Promise<void> {
		try {
			const { userId } = req.params
			const school = await School.findOne({shoolRepresentative: userId}).populate('shoolRepresentative', "userName email firstName lastName phoneNumber gender active")
			if (school) {
				res.status(200).send(school)
			}else{
				res.status(404).send({ message: "Não foi encontrada nenhuma instituição." });
			}
		} catch (error) {
			res.status(404).send(error)
		}
	}

  public async saveUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.find({
        $or: [{ email: req.body.email }, { phoneNumber: req.body.phoneNumber }],
      });
      if (user.length > 0) {
        res
          .status(409)
          .json({ error: "Esse nome de usuário já existe. Experimente outro" });
      } else {
        const data = await User.create(req.body);
        data.password = undefined;
		const userdata
        res.status(201).json({ success: "Cadastro feito  com sucesso",  });
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const { userId } = req.params;
      const user = await User.findByIdAndUpdate(
        { _id: userId },
        { $set: data },
        { new: false }
      );
      res.status(204).json({
        message: "As suas informações foram actualizadas com sucesso",
        user,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.params;
      const user = await User.findByIdAndDelete(userId);
      if (user) {
        return res.status(204).send("Deletado com sucesso");
      }
      return res.status(404).send(user);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}

export default new UserController();
