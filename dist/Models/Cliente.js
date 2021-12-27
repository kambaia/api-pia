"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
var clientUserSchema = new mongoose_1.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    data_v: {
        type: Date
    },
});
module.exports = mongoose.model('Client', clientUserSchema);
