
import  mongoose, { ConnectOptions }  from 'mongoose'
// Parâmetro uri = Universal Resource Indicator (indica onde está o MongoDB
// a que iremos nos conectar)
module.exports = function(uri:string) {
   mongoose.connect(uri, { 
      useNewUrlParser: true, 
      keepAlive:true,
      useUnifiedTopology: true,
	} as ConnectOptions);

   mongoose.connection.on('connected', () => 
      console.log(`Mongoose! conectado a ${uri}`)
   )

   mongoose.connection.on('disconnected', () => 
      console.log(`Mongoose! desconectado de ${uri}`)
   )

   mongoose.connection.on('error', (error:string) => 
      console.log(`Mongoose! ERRO na conexão a ${uri}: ${error}`)
   )

   // Capturamos um sinal de encerramento (SIGINT), Ctrl+C
   process.on('SIGINT', () => 
      mongoose.connection.close(() => {
         console.log('* Mongoose! Desconectado pelo término da aplicação');
         // 0 indica que a finalização ocorreu sem erros 
         process.exit(0);
      })
   )

}