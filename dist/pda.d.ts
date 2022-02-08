import { PublicKey } from "@solana/web3.js";
export declare function findAuctionAuthority(descAuctionProg: PublicKey, auction: PublicKey): Promise<[PublicKey, number]>;
export declare function findAuctionPool(descAuctionProg: PublicKey, auction: PublicKey, saleMint: PublicKey): Promise<[PublicKey, number]>;
