import { Program } from "@project-serum/anchor";
import { TransactionInstruction } from "@solana/web3.js";
import { DescendingAuctionProgram } from "../idl/idl";
import { CloseAuctionInstructionAccounts } from "../instructions";
import { AuctionAccount } from "..";
export declare type CloseAuctionAccounts = Omit<CloseAuctionInstructionAccounts, "auction" | "authority" | "auctionAuthority" | "auctionPool">;
export declare function closeAuction(auction: AuctionAccount, program: Program<DescendingAuctionProgram>, accounts: CloseAuctionAccounts): Promise<TransactionInstruction>;
