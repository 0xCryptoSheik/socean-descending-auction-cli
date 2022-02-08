import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { PurchaseInstructionAccounts, PurchaseInstructionArgs } from "../instructions";
import { AuctionAccount } from "..";
export declare type PurchaseAccounts = Omit<PurchaseInstructionAccounts, "auction" | "auctionAuthority" | "auctionPool" | "saleMint" | "paymentDestination">;
export declare function purchase(auction: AuctionAccount, program: Program<DescendingAuctionProgram>, accounts: PurchaseAccounts, args: PurchaseInstructionArgs): Promise<TransactionInstruction>;
