function e1() {
    console.log("=== EXERCICIO 1 ====");
    const input = "  Backend Developer  ";
    const normalizedInput = input.trim();
    const inputLowerCase = normalizedInput.toLocaleLowerCase();
    const inputUpperCase = normalizedInput.toUpperCase();

    console.log(input);
    console.log(normalizedInput);
    console.log(inputLowerCase);
    console.log(inputUpperCase);
}

function e2() {
    console.log("=== EXERCICIO 2 ====");
    const input = "node,javascript,backend";
    const inputSplitted = input.split(",");
    const joinedElements = inputSplitted.join(" | ");

    console.log(input);
    console.log(inputSplitted);
    console.log(joinedElements);
    console.log(input.includes("java")); //true
    console.log(inputSplitted.includes("java")); //false
    console.log(input.includes("backend")); // true
    console.log(inputSplitted.includes("backend")); // true
    console.log(inputSplitted.includes("BACKEND")); // false

}

function e3() {
    console.log("=== EXERCICIO 3 ====");
    const input = [3, 6, 9];
    const mappedInput = input.map((e) => {
        return e * 2;
    });

    console.log(input);
    console.log(mappedInput);
}

function e4() {
    console.log("=== EXERCICIO 4 ====");
    const input = [8, 15, 3, 22];

    const isOverTen = (value) => value > 10 ? true : false;
    const filteredInput = input.filter(isOverTen);
    const firstOverTen = input.find(isOverTen);
    const firstOverHundred = input.find((e) => e > 100);

    console.log(input);
    console.log(filteredInput);
    console.log(firstOverTen);
    console.log(firstOverHundred);
}

function e5() {
    console.log("=== EXERCICIO 5 ====");
    const input = [10, 20, 5];
    const initialValue = 0;
    const sumWithInput = input.reduce((accumulator, currentValue) =>  accumulator + currentValue, initialValue);

    console.log(sumWithInput);
}

function e6() {
    console.log("=== EXERCICIO 6 ====");
    const input = { 
        name: "Mouse", 
        price: 50 
    };
    const objKeys = Object.keys(input);
    const objValues = Object.values(input);
    const objEntries = Object.entries(input);

    console.log(input);

    console.log(objKeys);
    console.log(objValues);
    console.log(objEntries);

    console.log(Array.isArray(input));
    console.log(Array.isArray(objKeys));
    console.log(Array.isArray(objValues));
    console.log(Array.isArray(objEntries));
}

function e7() {
    console.log("=== EXERCICIO 7 ====");
    const input = { 
        name: "Mouse", 
        stock: 3 
    };
    const newObj = Object.assign({}, input);
    newObj.stock = 8;

    console.log(input);
    console.log(newObj);
    console.log(input === newObj); //false
}

function e8() {
    console.log("=== EXERCICIO 8 ====");
    const inputNums = [12, 12.5, 9007199254740992];
    for(let key in inputNums) {
        console.log("-------");
        console.log(`${inputNums[key]}`);
        console.log(`integer:`,Number.isInteger(inputNums[key]));
        console.log(`safe:`,Number.isSafeInteger(inputNums[key]));
    }
}

function e9() {
    console.log("=== EXERCICIO 9 ====");
    let input = "9007199254740993";
    console.log("initial value: ", input, " type: ", typeof(input));

    if(!Number.isSafeInteger(Number(input))) {
        console.log("is not safe, converting to big int");
        input = BigInt(input);
        console.log("converted value: ", input, " type: ", typeof(input));

        input += 2n;
        console.log("summed value: ", input, " type: ", typeof(input));

        input = input.toString();
    }

    //here input should be string ever
    console.log("string value: ", input, " type: ", typeof(input));

}

function e10() {
    console.log("=== EXERCICIO 10 ====");
    const firstSymbol = Symbol("id");
    const secSymbol = Symbol("id");

    const record = {
        id: "public-1",
        [firstSymbol]: "internal-1",
        [secSymbol]: "internal-2",
    }

    //tests
    console.log(Object.getOwnPropertyDescriptor(record, 'id'));
    console.log(Object.getOwnPropertyNames(record));
    console.log(Object.getOwnPropertySymbols(record));

    console.log(record.id);
    console.log(record[firstSymbol]);
    console.log(record[secSymbol]);

    console.log("symbols equal? R:", firstSymbol === secSymbol);
}

function e11() {
    console.log("=== EXERCICIO 11 ====");
    const stockByCode = new Map();
    stockByCode.set("keyboard", 3);
    stockByCode.set("mouse", 5);
    console.log(stockByCode);

    stockByCode.set("keyboard", 4);

    console.log(stockByCode);
    console.log("getKeyboard: ", stockByCode.get("keyboard"));

    console.log(stockByCode.has("monitor"));
    
    console.log("size: ", stockByCode.size);
    console.log(stockByCode.delete("mouse"));
    console.log(stockByCode.has("mouse"));
    console.log("size: ", stockByCode.size);

}

function e12() {
    console.log("=== EXERCICIO 12 ====");
    const input = ["js", "node", "js", "sql", "node"];
    const inputSet = new Set()
    for(const element of input) {
        console.log(inputSet);
        inputSet.add(element);
    }
    console.log("---------")
    inputSet.add("git");
    inputSet.add("git");
    console.log(inputSet);

    console.log(inputSet.has("sql")); //true
    inputSet.delete("node");

    console.log(Array.from(inputSet));
}

const execute = () => {
    // e1();
    // e2();
    // e3();
    // e4();
    // e5();
    // e6();
    // e7();
    // e8();
    // e9();
    // e10();
    e11();
    // e12();
}

export default execute;
