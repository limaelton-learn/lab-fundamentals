function deduplicateEntries(arrEntries) {
    const lookedIds = new Set();

    const uniques = arrEntries.filter(item => {
        if(lookedIds.has(item.id)) {
            return false;
        } 
        lookedIds.add(item.id);
        return true;
    });

    return uniques;
}

const entries = [
    { id: "L1", accountId: "A", amountCents: 100 },
    { id: "L2", accountId: "A", amountCents: 100 },
    { id: "L1", accountId: "A", amountCents: 999 },
];

console.log(deduplicateEntries(entries));