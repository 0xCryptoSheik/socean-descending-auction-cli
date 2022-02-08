"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAuction = void 0;
const web3_js_1 = require("@solana/web3.js");
const pda_1 = require("../pda");
const instructions_1 = require("../instructions");
function closeAuction(auction, program, accounts) {
    return __awaiter(this, void 0, void 0, function* () {
        const [auctionAuthority] = yield (0, pda_1.findAuctionAuthority)(program.programId, new web3_js_1.PublicKey(auction.publicKey));
        const { authority, auctionPool } = auction.account;
        return (0, instructions_1.closeAuctionInstruction)(program, Object.assign({ authority, auction: auction.publicKey, auctionAuthority,
            auctionPool }, accounts));
    });
}
exports.closeAuction = closeAuction;
