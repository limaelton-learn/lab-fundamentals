const sumMoney = (values) => {
    if (values.length === 0) return 0n;
    
    const normalizedValues = values.map(value => {
        let [integerPart, decimalPart = ""] = value.split(".");
        decimalPart = decimalPart.padEnd(3, "0");
        return BigInt(integerPart + decimalPart);
    });

    const totalMilessimos = normalizedValues.reduce((accumulator, current) => accumulator + current, 0n);
    const quocient = totalMilessimos / 10n;
    const remainder = totalMilessimos % 10n;

    if(remainder >= 5n) {
        return quocient +1n;
    }

    return quocient
}

export default sumMoney;