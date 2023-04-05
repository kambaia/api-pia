import { Request, Response } from 'express';
import User from '../Models/User';
import { ISearch } from '../interfaces/app/search';
class UserController {
  public async findAllUser(req: Request, res: Response): Promise<void> {
    try {
      const { limit, page, search } = req.query as unknown as ISearch;
      const users = await User.findAll({ limit, page, search });
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  public async findWithOneUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await User.findById(parseInt(req.params.id));
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  public async findWithEmailUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await User.findByEmail(req.body.email);
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  }
  public async addUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await User.add(req.body);
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}
export default new UserController();
