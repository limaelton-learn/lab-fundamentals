import Decimal from "decimal.js";

const Calculation = Decimal.clone({ precision: 40 });

const initial = new Calculation("0.1");
const result = initial.plus("0.2");

console.log(result.toString());  // "0.3"
console.log(initial.toString()); // "0.1"

const third = new Calculation("1").dividedBy("3");
console.log(third.toFixed(4, Calculation.ROUND_HALF_EVEN));
// "0.3333"


function calculateCommission(saleText) {
    const sale = new Calculation(saleText);
    const commission = sale.times("0.075");

    return commission.toFixed(2, Calculation.ROUND_HALF_EVEN);
}

console.log(calculateCommission("19.90")); // "1.49"