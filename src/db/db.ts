// eslint-disable-next-line import/no-extraneous-dependencies
//MONGODB_URI 'mongodb://localhost/ti_system'
//'mongodb+srv://kambaia:N2212xiste@pco.elr8dyv.mongodb.net/?retryWrites=true&w=majority'
import mongoose from 'mongoose';
import log from '../util/logger';

const connectDB = async (url:string) => {
  try {
    await mongoose.connect(url, { ssl: true });
    log.info(`Mongoose! Conexão com o banco de dados estabelecida! ${url}`)
  } catch (error) {
    log.info(`Mongoose!Erro ao conectar ao banco de dados! ${error}`)
    process.exit(1); // Encerra o processo com erro
  }
};

export default connectDB;
