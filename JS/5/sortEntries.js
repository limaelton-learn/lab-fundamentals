function sortEntries(entries) {
    return [...entries].sort((a, b) => b.amountCents - a.amountCents);
}

const data = [
  { id: "L1", amountCents: 20 },
  { id: "L2", amountCents: 100 },
  { id: "L3", amountCents: -5 },
  { id: "L4", amountCents: 100 },
  { id: "L5", amountCents: 0 },
]

console.log(sortEntries(data));
console.log(sortEntries([]));