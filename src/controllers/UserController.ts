import { Request, Response } from "express";
import { BaseController } from ".";
import {User} from "../Models/User";
class UserController extends BaseController {
  public async listAllUser(_req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find().populate("roles", "_id role type livel");
      res.status(200).send(users);
    } catch (error) {
      this.sendCreateUpdateErrorResponse(res, error);
    }
  }
  public async listUser(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    try {
      const users = await User.findById(userId).populate(
        "roles",
        "_id role type livel"
      );
      res.status(200).send(users);
    } catch (error) {
      this.sendCreateUpdateErrorResponse(res, error);
    }
  }
  public async saveUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.findOne({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      });
	  console.log(req.body);
      if (!user) {
        const data = await User.create(req.body);
        data.password = undefined;
        res.status(200).json({ message: "Cadastro feito  com sucesso", data });
      } else {
        res.status(400).json({ error: "Usuário já está cadastrado" });
      }
    } catch (error) {
		console.log(error)
      this.sendCreateUpdateErrorResponse(res, error);
    }
  }
  public async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const { userId } = req.params;

      const user = await User.updateOne(
        { _id: userId },
        { $set: data },
        { new: false }
      );
      return res
        .status(200)
        .json({
          message: "As suas informações foram actualizadas com sucesso",
          user,
        });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "Aconteceu um erro ao atualizada", error });
    }
  }
  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;

      const user = await User.findByIdAndDelete(id);
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
