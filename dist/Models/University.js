"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schoolShema = new mongoose_1.Schema({
    universityPhoto: { type: String, required: true },
    universityCover: { type: String, required: true },
    universityName: { type: String, required: true },
    universityIdentity: { type: String, required: true },
    birthDateFundation: { type: String, required: true },
    adress: { type: Number, required: true },
    shoolRepresentative: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('University', schoolShema);
