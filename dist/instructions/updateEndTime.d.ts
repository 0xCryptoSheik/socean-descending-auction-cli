import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InstructionAccounts } from "../typeUtils";
import { Dayjs } from "dayjs";
export declare type UpdateEndTimeInstructionAccounts = InstructionAccounts<DescendingAuctionProgram, "updateEndTime">;
export declare type UpdateEndTimeInstructionArgs = {
    endTimestamp: Dayjs;
};
export declare function updateEndTimeInstruction(program: Program<DescendingAuctionProgram>, accounts: UpdateEndTimeInstructionAccounts, args: UpdateEndTimeInstructionArgs): TransactionInstruction;
