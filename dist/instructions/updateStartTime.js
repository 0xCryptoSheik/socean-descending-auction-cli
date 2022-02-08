"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStartTimeInstruction = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
function updateStartTimeInstruction(program, accounts, args) {
    const { startTimestamp } = args;
    return program.instruction.updateStartTime(new bn_js_1.default(startTimestamp.unix()), {
        accounts,
    });
}
exports.updateStartTimeInstruction = updateStartTimeInstruction;
