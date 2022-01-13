"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var studentSchema = new mongoose_1.Schema({
    studentPhoto: {
        type: String,
        required: true
    },
    studentCover: {
        type: String,
        required: true // Atributo obrigatório
    },
    studentName: {
        type: String,
        required: true // Atributo obrigatório
    },
    studentIdentity: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
    },
    studetNumber: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    univercityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'university'
    }
});
exports.default = (0, mongoose_1.model)('Student', studentSchema);
