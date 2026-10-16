export function groupByCategory(items) {
    const groupedItems = Object.create(null);
    if(items.length == 0) {
        return groupedItems
    }
    for(const item of items) {
        if(!Number.isFinite(item.quantity)) {
            throw TypeError(`Quantidade invalida na categoria ${item.category}`);
        }

        if(groupedItems[item.category] === undefined) {
            groupedItems[item.category] = 0;
        }

        groupedItems[item.category] += item.quantity;
    }

    return groupedItems;
}