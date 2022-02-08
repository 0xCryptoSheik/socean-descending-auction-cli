import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InstructionAccounts } from "../typeUtils";
import BN from "bn.js";
export declare type UpdateCeilPriceInstructionAccounts = InstructionAccounts<DescendingAuctionProgram, "updateCeilPrice">;
export declare type UpdateCeilPriceInstructionArgs = {
    ceilPrice: BN;
};
export declare function updateCeilPriceInstruction(program: Program<DescendingAuctionProgram>, accounts: UpdateCeilPriceInstructionAccounts, args: UpdateCeilPriceInstructionArgs): TransactionInstruction;
