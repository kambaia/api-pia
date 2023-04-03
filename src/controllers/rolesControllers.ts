import { Request, Response } from 'express';
class RolesController {
  public async listAllUser(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).send({ message: 'test' });
    } catch (error) {
      res.status(404).send(error);
    }
  }
}
export default new RolesController();
