import { performance } from "node:perf_hooks";

function unionValues(arr) {
    const newArr = [];
    for(let element of arr) {
        let indexFinded;
        let { accountId, amountCents } = element;

        indexFinded = newArr.findIndex(newE => newE.accountId === accountId)
        if(indexFinded != -1) {
            newArr[indexFinded].totalCents += amountCents;
            continue;
        }

        let newElement = {
            accountId: accountId,
            totalCents: amountCents
        }

        newArr.push(newElement)

    }
    return newArr;
}

const unionValuesWithMap = (arr) => {
    const mapped = new Map();
    for(let element of arr) {
        let { accountId, amountCents } = element;
        let totalCents = amountCents;
        if(mapped.has(accountId)) {
            let existingGroup = mapped.get(accountId);
            totalCents += existingGroup.totalCents;
        }

        let newElement = {
            accountId: accountId,
            totalCents: totalCents,
        }

        mapped.set(accountId, newElement);
    }
    return Array.from(mapped.values());
}

function generateEntries(totalEntries, totalAccounts) {
    return Array.from({ length: totalEntries }, (_, i) => ({
        accountId: `Account_${i % totalAccounts}`,
        amountCents: 100
    }));
}

function executeBenchmark(fn, arr, times = 5) {
    let arrMs = [];
    for(let i = 0; i < times; i++) {
        let start = performance.now();
        fn(arr);
        let duration = performance.now() - start;
        arrMs.push(duration);
    }

    return arrMs
}

function calculateMedian(times) {
    const sorted = [...times].sort((a, b) => a - b);
    return sorted[2];
}

const datasets = [
    { lancamentos: 1000, contas: 100 },
    { lancamentos: 2000, contas: 200 },
    { lancamentos: 4000, contas: 400 },
    { lancamentos: 40000, contas: 5000 },
];

for (let data of datasets) {
    const arr = generateEntries(data.lancamentos, data.contas);

    //warmup
    for(let i = 0; i < 10; i++) {
        unionValues(arr);
        unionValuesWithMap(arr);
    }

    const timesWithoutMap = executeBenchmark(unionValues, arr, 5);
    const medianWithoutMap = calculateMedian(timesWithoutMap);

    const timesWithMap = executeBenchmark(unionValuesWithMap, arr, 5);
    const medianWithMap = calculateMedian(timesWithMap);

    console.log(`${data.lancamentos}\t\t${data.contas}\t\t${medianWithoutMap.toFixed(4)}\t\t\t${medianWithMap.toFixed(4)}`);
}
