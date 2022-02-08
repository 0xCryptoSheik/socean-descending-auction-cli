"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcDt = exports.getPrice = void 0;
/**
 *
 * @param auction
 * @param t
 * @returns price in purchase token atomics per 1.0 sale tokens.
 *          Not rounded, actual on-chain price may differ due to precision-loss
 */
function getPrice(auction, t) {
    const { initPoolBalance, ceilPrice } = auction;
    const initPoolBalanceNumber = initPoolBalance.toNumber();
    if (initPoolBalanceNumber === 0)
        return ceilPrice.toNumber();
    // TODO: switch-case on curveType when anchor fixes enums
    //const { curveType } = auction;
    return getPriceLinearDecay(auction, t);
}
exports.getPrice = getPrice;
function getPriceLinearDecay(auction, t) {
    const { ceilPrice, floorPrice, startTimestamp, endTimestamp } = auction;
    const tPrime = calcTPrime(auction, t);
    const duration = endTimestamp.toNumber() - startTimestamp.toNumber();
    const ceilPriceNumber = ceilPrice.toNumber();
    const floorPriceNumber = floorPrice.toNumber();
    const dPrice = ((ceilPriceNumber - floorPriceNumber) * tPrime) / duration;
    return Math.max(ceilPriceNumber - dPrice, floorPriceNumber);
}
/*
const BASE = 1.00005;

function getPriceExponentialDecay(auction: Auction, t: Dayjs): number {
  // derive t from auction account
  const {
    ceilPrice,
    floorPrice,
    initPoolBalance,
  } = auction;
  const tPrime = calcTPrime(auction, t);
  return Math.max(
    Math.pow(BASE, -tPrime) * ceilPrice.toNumber(),
    floorPrice.toNumber()
  );
}
*/
function calcTPrime(auction, t) {
    const { startTimestamp } = auction;
    const dt = calcDt(auction);
    return Math.max(0, t.unix() - startTimestamp.toNumber() - dt);
}
/**
 * @param auction
 * @returns how much time the curve should be pushed back by due to previous purchases, in seconds
 */
function calcDt(auction) {
    const { startTimestamp, endTimestamp, totalSaleAmount, initPoolBalance } = auction;
    return (((endTimestamp.toNumber() - startTimestamp.toNumber()) *
        totalSaleAmount.toNumber()) /
        initPoolBalance.toNumber());
}
exports.calcDt = calcDt;
