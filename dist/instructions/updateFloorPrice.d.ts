import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InstructionAccounts } from "../typeUtils";
import BN from "bn.js";
export declare type UpdateFloorPriceInstructionAccounts = InstructionAccounts<DescendingAuctionProgram, "updateFloorPrice">;
export declare type UpdateFloorPriceInstructionArgs = {
    floorPrice: BN;
};
export declare function updateFloorPriceInstruction(program: Program<DescendingAuctionProgram>, accounts: UpdateFloorPriceInstructionAccounts, args: UpdateFloorPriceInstructionArgs): TransactionInstruction;
