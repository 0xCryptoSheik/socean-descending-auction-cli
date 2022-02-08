"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAuctionPool = exports.findAuctionAuthority = void 0;
const web3_js_1 = require("@solana/web3.js");
function findAuctionAuthority(descAuctionProg, auction) {
  return web3_js_1.PublicKey.findProgramAddress(
    [Buffer.from("auction"), auction.toBuffer()],
    descAuctionProg
  );
}
exports.findAuctionAuthority = findAuctionAuthority;
function findAuctionPool(descAuctionProg, auction, saleMint) {
  return web3_js_1.PublicKey.findProgramAddress(
    [Buffer.from("auction"), auction.toBuffer(), saleMint.toBuffer()],
    descAuctionProg
  );
}
exports.findAuctionPool = findAuctionPool;
