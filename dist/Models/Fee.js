"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var feeShema = new mongoose_1.Schema({
    fee: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAT: {
        type: Date,
        default: Date.now
    }
});
exports.default = (0, mongoose_1.model)('propina', feeShema);
