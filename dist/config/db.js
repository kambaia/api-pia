"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// Parâmetro uri = Universal Resource Indicator (indica onde está o MongoDB
// a que iremos nos conectar)
module.exports = function (uri) {
    mongoose_1.default.connect(uri, {
        useNewUrlParser: true,
        keepAlive: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    mongoose_1.default.connection.on('connected', function () {
        return console.log("Mongoose! conectado a " + uri);
    });
    mongoose_1.default.connection.on('disconnected', function () {
        return console.log("Mongoose! desconectado de " + uri);
    });
    mongoose_1.default.connection.on('error', function (error) {
        return console.log("Mongoose! ERRO na conex\u00E3o a " + uri + ": " + error);
    });
    // Capturamos um sinal de encerramento (SIGINT), Ctrl+C
    process.on('SIGINT', function () {
        return mongoose_1.default.connection.close(function () {
            console.log('* Mongoose! Desconectado pelo término da aplicação');
            // 0 indica que a finalização ocorreu sem erros 
            process.exit(0);
        });
    });
};
