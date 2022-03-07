import { Request, Response } from 'express'
import { User } from '../Models/User'
class UserController {
  public async listAllUser(_req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find().populate('roles', '_id role type livel')
      res.status(200).send(users)
    } catch (error) {
		res.status(404).send(error);
    }
  }
  public async listUser(req: Request, res: Response): Promise<void> {
    const { userId } = req.params
    try {
      const users = await User.findById(userId).populate(
        'roles',
        '_id role type livel',
      )
	  if(users){
		res.status(200).send(users)
	  }
	  res.status(404).send({message: "Usuário não encontrado"});
     
    } catch (error) {
		res.status(404).send(error)
    }
  }
  public async saveUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await User.find({
        $or: [{ email: req.body.email }, { phoneNumber: req.body.phoneNumber }],
      })
      if (user.length > 0) {
        res
          .status(409)
          .json({ error: 'Esse nome de usuário já existe. Experimente outro' })
      } else {
        const data = await User.create(req.body)
        data.password = undefined
        res.status(201).json({ success: 'Cadastro feito  com sucesso', data })
      }
    } catch (e) {
      res.status(500).send({ message: e })
    }
  }
  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body
	     console.log(data);
        const { userId } = req.params
        const user = await User.findByIdAndUpdate(
          { _id: userId },
          { $set: data },
          { new: false },
        )
        res.status(204).json({
          message: 'As suas informações foram actualizadas com sucesso',
          user,
        })
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Aconteceu um erro ao atualizada', error })
    }
  }
  public async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
		const { userId } = req.params;
	  console.log(userId);
      const user = await User.findByIdAndDelete(userId);
      if (user) {
        return res.status(204).send('Deletado com sucesso')
      }
      return res.status(404).send(user)
    } catch (error) {
      return res.status(404).send(error)
    }
  }
}

export default new UserController()
