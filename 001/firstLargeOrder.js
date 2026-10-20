export function firstLargeOrder(orders) {
    let index = 0;

    if(orders[index] === undefined) {
        return null;
    }

    while(orders[index].value < 100) {
        index++;

        if(!orders[index]) {
            return null;
        }
    }

    return orders[index].id;
}