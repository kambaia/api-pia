"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classRouter = void 0;
var express_1 = require("express");
var ClassController_1 = __importDefault(require("../controllers/ClassController"));
exports.classRouter = (0, express_1.Router)();
exports.classRouter.get('/api/classes', ClassController_1.default.listAllClasses);
exports.classRouter.post('/api/class', ClassController_1.default.save);
