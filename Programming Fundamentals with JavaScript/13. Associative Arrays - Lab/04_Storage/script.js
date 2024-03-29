function main(data) {
    let result = new Map();

    for (let line of data) {
        let [product, quantity] = line.split(' ');

        if (result.has(product)) {
            let oldQuantity = result.get(product);
            result.set(product, oldQuantity + Number(quantity));
        } else {
            result.set(product, Number(quantity));
        }
    }
    for (let [k, v] of result.entries()) {
        console.log(k, "->", v);
    }
}