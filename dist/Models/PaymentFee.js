"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var paymentSchema = new mongoose_1.Schema({
    fee: {
        type: String,
        required: true // Atributo obrigatório
    },
    feeValor: {
        type: String,
    },
    monthQuantity: {
        type: String,
        required: true
    },
    fine: {
        type: String,
    },
    total: {
        type: String,
    },
    change: {
        type: String,
    },
    serielTransition: {
        type: String,
        require: true
    },
    serielDestinectionTranstion: {
        type: String,
        required: true
    },
    paymentDate: {
        type: String,
    },
    codeTransition: {
        type: String,
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    registrationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registration'
    },
    SchoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
    status: {
        type: Boolean
    },
});
exports.default = (0, mongoose_1.model)('payment', paymentSchema);
