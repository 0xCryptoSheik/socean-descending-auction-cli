import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InstructionAccounts } from "../typeUtils";
export declare type CloseAuctionInstructionAccounts = Omit<InstructionAccounts<DescendingAuctionProgram, "closeAuction">, "tokenProgram">;
export declare function closeAuctionInstruction(program: Program<DescendingAuctionProgram>, accounts: CloseAuctionInstructionAccounts): TransactionInstruction;
