import { Auction } from "..";
import { Dayjs } from "dayjs";
/**
 *
 * @param auction
 * @param t
 * @returns price in purchase token atomics per 1.0 sale tokens.
 *          Not rounded, actual on-chain price may differ due to precision-loss
 */
export declare function getPrice(auction: Auction, t: Dayjs): number;
/**
 * @param auction
 * @returns how much time the curve should be pushed back by due to previous purchases, in seconds
 */
export declare function calcDt(auction: Auction): number;
