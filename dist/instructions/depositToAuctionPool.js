"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.depositToAuctionPoolInstruction = void 0;
const spl_token_1 = require("@solana/spl-token");
function depositToAuctionPoolInstruction(program, accounts, args) {
    const { depositAmount } = args;
    return program.instruction.depositToAuctionPool(depositAmount, {
        accounts: Object.assign({ tokenProgram: spl_token_1.TOKEN_PROGRAM_ID }, accounts),
    });
}
exports.depositToAuctionPoolInstruction = depositToAuctionPoolInstruction;
