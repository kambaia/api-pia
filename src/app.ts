import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

let db = require('./config/db');
class App {
  public express: express.Application
  public constructor () {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(express.json());
    this.express.use(cors());

	this.express.use('/files', express.static(path.resolve(__dirname, 'tmp', 'uploads')));
    this.express.use(express.urlencoded({ extended: false }));
	
  }
  private database (): void {
	db(process.env.MONGO_SERVER_KEY);
  }

  private routes (): void {
     console.log("Minha Rotas")
  }
}

export default new App().express