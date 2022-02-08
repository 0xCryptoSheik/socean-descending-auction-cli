import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { DepositToAuctionPoolInstructionAccounts, DepositToAuctionPoolInstructionArgs } from "../instructions";
import { AuctionAccount } from "..";
export declare type DepositToAuctionPoolAccounts = Omit<DepositToAuctionPoolInstructionAccounts, "auction" | "auctionAuthority" | "auctionPool">;
export declare function depositToAuctionPool(auction: AuctionAccount, program: Program<DescendingAuctionProgram>, accounts: DepositToAuctionPoolAccounts, args: DepositToAuctionPoolInstructionArgs): Promise<TransactionInstruction>;
