"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var registrationSchema = new mongoose_1.Schema({
    studentType: {
        type: String,
    },
    anrolNumber: {
        require: true,
        default: 0,
        type: Number
    },
    studentShift: {
        type: String,
        required: true
    },
    yearStart: {
        type: Number
    },
    yearEnd: {
        type: Number
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    },
    feeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fee'
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
});
exports.default = (0, mongoose_1.model)('Registration', registrationSchema);
