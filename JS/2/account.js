const FREE_TRANSACTION_LIMIT = 5;
const COST_TRANSACTION_CENTS = 100;
const BASE_TRANSACTIONS_COST = 500;

function calculateCostTransaction(tx) {
    return tx * COST_TRANSACTION_CENTS;
}

function getDelta(transactionsQty) {
    if(transactionsQty <= FREE_TRANSACTION_LIMIT) return 0;
    return transactionsQty - FREE_TRANSACTION_LIMIT;
}

const calculateAccountFee = (balanceCents, monthlyTransactions) => {
    let fee = 0;

    if(balanceCents < 100000) {
        fee = BASE_TRANSACTIONS_COST;
        const delta = getDelta(monthlyTransactions);
        if(!delta) return fee;
        fee = BASE_TRANSACTIONS_COST + calculateCostTransaction(delta);
    }

    return fee;
}

export default calculateAccountFee;