const saleProductOkMock = {
    id: 1,
    sale_id: 1,
    product_id: 5,
    quantity: 10,
};

const saleProductNotOkMock = {
    id: 5,
    sale_id: 5,
    product_id: 5,
    quantity: 5,
};

const salesProductsMock = [
    {
        id: 1,
        sale_id: 1,
        product_id: 5,
        quantity: 10,
    },
    {
        id: 2,
        sale_id: 1,
        product_id: 3,
        quantity: 7,
    },
    {
        id: 3,
        sale_id: 2,
        product_id: 8,
        quantity: 2,
    },
];

const salesProductsEmptyMock = [];

module.exports = {
    saleProductOkMock,
    saleProductNotOkMock,
    salesProductsMock,
    salesProductsEmptyMock
}
