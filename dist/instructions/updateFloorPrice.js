"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFloorPriceInstruction = void 0;
function updateFloorPriceInstruction(program, accounts, args) {
    const { floorPrice } = args;
    return program.instruction.updateFloorPrice(floorPrice, {
        accounts,
    });
}
exports.updateFloorPriceInstruction = updateFloorPriceInstruction;
