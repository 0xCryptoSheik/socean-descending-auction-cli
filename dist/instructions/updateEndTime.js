"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEndTimeInstruction = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
function updateEndTimeInstruction(program, accounts, args) {
    const { endTimestamp } = args;
    return program.instruction.updateEndTime(new bn_js_1.default(endTimestamp.unix()), {
        accounts,
    });
}
exports.updateEndTimeInstruction = updateEndTimeInstruction;
