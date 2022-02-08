"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCeilPriceInstruction = void 0;
function updateCeilPriceInstruction(program, accounts, args) {
    const { ceilPrice } = args;
    return program.instruction.updateCeilPrice(ceilPrice, {
        accounts,
    });
}
exports.updateCeilPriceInstruction = updateCeilPriceInstruction;
