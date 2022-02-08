import { Program } from "@project-serum/anchor";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InitializeAuctionInstructionAccounts, InitializeAuctionInstructionArgs } from "../instructions";
export declare type InitializeAuctionAccounts = Omit<InitializeAuctionInstructionAccounts, "auctionAuthority" | "auctionPool">;
export declare type InitializeAuctionArgs = Omit<InitializeAuctionInstructionArgs, "auctionAuthorityBump" | "auctionPoolBump">;
export declare type InitializeAuctionResult = {
    instruction: TransactionInstruction;
    auctionAuthority: PublicKey;
    auctionPool: PublicKey;
    auctionAuthorityBump: number;
    auctionPoolBump: number;
};
export declare function initializeAuction(program: Program<DescendingAuctionProgram>, accounts: InitializeAuctionAccounts, args: InitializeAuctionArgs): Promise<InitializeAuctionResult>;
