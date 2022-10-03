const saleOkMock = {
  id: 2,
  user_id: 3,
  seller_id: 2,
  total_price: 9.70,
  delivery_address: "Av. Osborn, 666",
  delivery_number: "13",
  sale_date: 2008 - 10 - 29,
  status: "delivered",
};

const saleNotOkMock = {
  id: 24,
  user_id: 3,
  seller_id: 7,
  total_price: 120.30,
  delivery_address: "Kiss Street, 51",
  delivery_number: "18",
  sale_date: 2022 - 09 - 10,
  status: "delivered",
};

const salesMock = [
  {
    id: 2,
    user_id: 3,
    seller_id: 2,
    total_price: 9.70,
    delivery_address: "Av. Osborn, 666",
    delivery_number: "13",
    sale_date: 2008 - 10 - 29,
    status: "delivered",
  },
  {
    id: 2,
    user_id: 3,
    seller_id: 2,
    total_price: 9.70,
    delivery_address: "Av. Osborn, 666",
    delivery_number: "13",
    sale_date: 2008 - 10 - 29,
    status: "delivered",
  },
  {
    id: 2,
    user_id: 3,
    seller_id: 2,
    total_price: 9.70,
    delivery_address: "Av. Osborn, 666",
    delivery_number: "13",
    sale_date: 2008 - 10 - 29,
    status: "delivered",
  }
];

const salesEmptyMock = [];

module.exports = {
  saleOkMock,
  saleNotOkMock,
  salesMock,
  salesEmptyMock
}
