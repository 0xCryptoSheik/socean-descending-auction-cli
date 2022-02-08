import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InstructionAccounts } from "../typeUtils";
import { Dayjs } from "dayjs";
import BN from "bn.js";
export declare type InitializeAuctionInstructionAccounts = Omit<InstructionAccounts<DescendingAuctionProgram, "initializeAuction">, "tokenProgram" | "systemProgram" | "rent">;
export declare type InitializeAuctionInstructionArgs = {
    startTimestamp: Dayjs;
    endTimestamp: Dayjs;
    ceilPrice: BN;
    floorPrice: BN;
    auctionAuthorityBump: number;
    auctionPoolBump: number;
};
export declare function initializeAuctionInstruction(program: Program<DescendingAuctionProgram>, accounts: InitializeAuctionInstructionAccounts, args: InitializeAuctionInstructionArgs): TransactionInstruction;
