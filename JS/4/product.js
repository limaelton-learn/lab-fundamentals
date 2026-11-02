const updateProducts = (product, newPriceCents, newQuantity) => {
    const rawProd = {...product}

    return {
        id: rawProd.id,
        name: rawProd.name,
        priceCents: newPriceCents,
        stock: {
            quantity: newQuantity,
            warehouse: rawProd.stock.warehouse,
        },
        tags: rawProd.tags
    }
}


const product = {
    id: 1,
    name: "Caderno",
    priceCents: 2000,
    stock: { quantity: 10, warehouse: "A" },
    tags: ["papelaria"]
};

console.log("origin: ", product);

const updatedProduct = updateProducts(product, 2500, 7);

console.log("current Origin: ", product);
console.log("updated: ", updatedProduct);

console.log(product.stock === updatedProduct.stock); //false

// ------ SHALLOW ------
console.log("===================SHALLOW==================")

const updateProductsS = (product, newPriceCents, newQuantity) => {
    const rawProd = {...product}

    rawProd.priceCents = newPriceCents;
    rawProd.stock.quantity = newQuantity;

    return  rawProd;
}

const productS = {
    id: 1,
    name: "Caderno",
    priceCents: 2000,
    stock: { quantity: 10, warehouse: "A" },
    tags: ["papelaria"]
};



console.log("origin: ", productS);

const updatedProductS = updateProductsS(productS, 2500, 7);

console.log("current Origin: ", productS);
console.log("updated: ", updatedProductS);

console.log(productS.stock === updatedProductS.stock); //true


// ========================
console.log(productS === updatedProductS);
console.log(productS.tags === updatedProductS.tags);

const { priceCents, stock } = updatedProductS;
console.log("price cents: ", priceCents); //recebe primitivo e não aponta para o original
console.log("stock: ", stock); // continua apontando para um objeto compartilhado
