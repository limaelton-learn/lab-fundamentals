//orders = {value: number}
export function resumeOrder(orders) {//return: { totals: number , bigOrdersQuantity: number}
    const resume = {
        totals: 0,
        bigOrdersQuantity: 0,
    };

    if(orders.length == 0) {
        return resume;
    }


    for(const order of orders) {
        if(!Number.isFinite(order.value)) {
            throw TypeError("Quantidade inválida para uma order");
        }

        resume.totals += order.value;
        if(order.value >= 100) {
            resume.bigOrdersQuantity++;
        }
    }

    return resume;
}