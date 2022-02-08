import { IdlAccounts, ProgramAccount } from "@project-serum/anchor";
import { DescendingAuctionProgram } from "./idl/idl";
export declare type Auction = IdlAccounts<DescendingAuctionProgram>["auction"];
export declare type AuctionAccount = ProgramAccount<Auction>;
export declare type AuctionState = "Pending" | "InProgress" | "Ended";
export declare type CurveType = "LinearDecay";
