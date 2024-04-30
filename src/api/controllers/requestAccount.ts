import { Request, Response } from 'express';
import RequestAccount from '../Models/RaquestAccount';
class authUsersController {
   public async requestAccountStudent(req: Request, res: Response): Promise<Response> {
      try {
         const { idSchools } = req.params;
         const student = await RequestAccount.find({ idSchools: idSchools }).populate('idStudent', '_id studentPhoto studentName');
         return res.status(200).send(student);
      } catch (error) {
         return res.status(404).json("Nenhuma requisição foi feita");
      }
   }
}


export default new authUsersController();