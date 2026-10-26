import Decimal from "decimal.js";

// total: string não negativa, com até 20 algarismos antes do ponto e exatamente duas casas.
// quantity: Number inteiro entre 1 e 1000.
// return: string com exatamente duas casas, usando ROUND_HALF_EVEN
const averageUnitCost = (total, quantity) => {
    const Calculation = Decimal.clone({ precision: 40 });

    const initial = new Calculation(total);
    const result = initial.dividedBy(quantity);
    return result.toFixed(2, Calculation.ROUND_HALF_EVEN);
}

export default averageUnitCost;