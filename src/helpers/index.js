
const normalizeData = (content) => {
    const normalizedObject = {};
    if(content && content.constructor.toString().indexOf('Array') !== -1) {
        content.forEach(product => {
            const { id, ...content } = product;
            id && content && (normalizedObject[id] = content);
        });
    }
    return normalizedObject;
};

const getTotal = (products, productIdToCountMapping) => {
        let total = 0;
        Object.keys(productIdToCountMapping).forEach(productId => {
            total += products[productId].price*productIdToCountMapping[productId]
        });
        return total;
};

export { normalizeData, getTotal };