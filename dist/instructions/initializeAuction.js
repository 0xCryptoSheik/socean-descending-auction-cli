"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeAuctionInstruction = void 0;
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const bn_js_1 = __importDefault(require("bn.js"));
function initializeAuctionInstruction(program, accounts, args) {
    const { startTimestamp, endTimestamp, ceilPrice, floorPrice, auctionAuthorityBump, auctionPoolBump, } = args;
    return program.instruction.initializeAuction(new bn_js_1.default(startTimestamp.unix()), new bn_js_1.default(endTimestamp.unix()), ceilPrice, floorPrice, auctionAuthorityBump, auctionPoolBump, {
        accounts: Object.assign({ tokenProgram: spl_token_1.TOKEN_PROGRAM_ID, systemProgram: web3_js_1.SystemProgram.programId, rent: web3_js_1.SYSVAR_RENT_PUBKEY }, accounts),
    });
}
exports.initializeAuctionInstruction = initializeAuctionInstruction;
