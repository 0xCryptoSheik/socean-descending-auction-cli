import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InstructionAccounts } from "../typeUtils";
import BN from "bn.js";
export declare type PurchaseInstructionAccounts = Omit<InstructionAccounts<DescendingAuctionProgram, "purchase">, "tokenProgram">;
export declare type PurchaseInstructionArgs = {
    purchaseAmount: BN;
    expectedPayment: BN;
    slippageTolerance: BN;
};
export declare function purchaseInstruction(program: Program<DescendingAuctionProgram>, accounts: PurchaseInstructionAccounts, args: PurchaseInstructionArgs): TransactionInstruction;
