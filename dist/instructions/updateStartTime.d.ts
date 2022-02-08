import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { InstructionAccounts } from "../typeUtils";
import { Dayjs } from "dayjs";
export declare type UpdateStartTimeInstructionAccounts = InstructionAccounts<DescendingAuctionProgram, "updateStartTime">;
export declare type UpdateStartTimeInstructionArgs = {
    startTimestamp: Dayjs;
};
export declare function updateStartTimeInstruction(program: Program<DescendingAuctionProgram>, accounts: UpdateStartTimeInstructionAccounts, args: UpdateStartTimeInstructionArgs): TransactionInstruction;
