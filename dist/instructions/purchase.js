"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseInstruction = void 0;
const spl_token_1 = require("@solana/spl-token");
function purchaseInstruction(program, accounts, args) {
    const { purchaseAmount, expectedPayment, slippageTolerance } = args;
    return program.instruction.purchase(purchaseAmount, expectedPayment, slippageTolerance, {
        accounts: Object.assign({ tokenProgram: spl_token_1.TOKEN_PROGRAM_ID }, accounts),
    });
}
exports.purchaseInstruction = purchaseInstruction;
