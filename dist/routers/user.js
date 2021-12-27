"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var UserController_1 = __importDefault(require("../controllers/UserController"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/api/users', UserController_1.default.listAllUser);
exports.userRouter.get('/api/user/:userId', UserController_1.default.listUser);
exports.userRouter.post('/api/user', UserController_1.default.saveUser);
exports.userRouter.put('/api/user/:userId', UserController_1.default.updateUser);
exports.userRouter.delete('/api/user/:userId', UserController_1.default.deleteUser);
