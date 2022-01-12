import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/UserInterface';
import User from '../Models/User';
class authUsersController {
   public async authinticationShools(req: Request, res: Response): Promise<Response> {
      try {
         const { email, password } = req.body;
         console.log(typeof (req.body));
         const user = await User.findOne({ email }).select('+password').populate('autenticado', 'nivel usuario') as IUser;
         if (!user)
            return res.json({ message: "E-mail ou  palavra pass incorreta" });
         if (!await bcrypt.compare(password, user.password!))
            return res.json({ message: "E-mail ou  palavra pass incorreta" });
         user.password = undefined;
         return res.json(user);
      } catch (error) {
         return res.status(400).json({ error: "Usuário inválido" });
      }
   }

   public async authinticationParents(req: Request, res: Response): Promise<Response> {
      try {
         const { phoneNumber, password } = req.body;
         const user = await User.findOne({ phoneNumber: phoneNumber}).select('+password').populate('roles', '_id level role type ') as IUser;
         if (!user)
            return res.json({ message: "E-mail ou  palavra pass incorreta" });
         if (!await bcrypt.compare(password, user.password!))
            return res.json({ message: "E-mail ou  palavra pass incorreta" });
         user.password = undefined;
         return res.json(user);
      } catch (error) {
         return res.status(400).json({ error: "Usuário inválido" });
      }
   }

   
   public async authinticationStudent(req: Request, res: Response): Promise<Response> {
      try {
         const { studyNumber, password } = req.body;
         const user = await User.findOne({ studyNumber: studyNumber}).select('+password').populate('roles', '_id level role type ') as IUser;
         if (!user)
            return res.json({ message: "E-mail ou  palavra pass incorreta" });
         if (!await bcrypt.compare(password, user.password!))
            return res.json({ message: "E-mail ou  palavra pass incorreta" });
         user.password = undefined;
         return res.json(user);
      } catch (error) {
         return res.status(400).json({ error: "Usuário inválido" });
      }
   }

}


export default new authUsersController();