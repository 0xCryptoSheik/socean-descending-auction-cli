"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAuctionInstruction = void 0;
const spl_token_1 = require("@solana/spl-token");
function closeAuctionInstruction(program, accounts) {
    return program.instruction.closeAuction({
        accounts: Object.assign({ tokenProgram: spl_token_1.TOKEN_PROGRAM_ID }, accounts),
    });
}
exports.closeAuctionInstruction = closeAuctionInstruction;
