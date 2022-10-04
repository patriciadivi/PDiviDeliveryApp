const { expect } = require("chai");
const sinon = require("sinon");

// const SaleRoutes = require("../routes/sale.routes");
const SaleController = require('../../src/controllers/sale.controller');
// const SaleService = require('../../src/services/sale.service');
// const SaleRepository = require('../../src/repositories/sale.repository');
const Sale = require('../database/models/sales');

const {
    saleOkMock,
    // saleNotOkMock,
    salesMock,
    salesEmptyMock
  } = require('../mocks/sale.mock');

// const {
//     saleProductOkMock,
//     saleProductNotOkMock,
//     salesProductsMock,
//     salesProductsEmptyMock
// } = require('../mocks/saleProduct.mock');

describe('====== SALES ======', () => {
    describe('Check /sales routes', () => {
        describe('GET', () => {
            before(() => {
                sinon.stub(Sale, 'findAll').resolves(salesMock);
            })
            after(() => {
                Sale.findAll.restore();
            });
            it('should return all sales', async () => {
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    json: (data) => {
                        expect(data).to.be.an('array');
                        expect(data[0]).to.have.property('user_id');
                        expect(data[0]).to.have.property('seller_id');
                        expect(data[0]).to.have.property('total_price');
                        expect(data[0]).to.have.property('delivery_address');
                        expect(data[0]).to.have.property('delivery_number');
                        expect(data[0]).to.have.property('sale_date');
                        expect(data[0]).to.have.property('status');                        
                    }
                };
                await SaleController.getSaleById(request, response);
            });
            it("should return an empty array if there is no sale registered", async () => {
                Sale.findAll.resolves(salesEmptyMock);
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    send: (data) => {
                        expect(data).to.be.an('array');
                        expect(data).to.have.lengthOf(0);
                        expect(data.error).to.be.deep.eq(salesEmptyMock);
                    }
                };
                await SaleController.getSaleById(request, response);
            });
            it("should return an error if something went wrong", async () => {
                Sale.findAll.rejects(new Error('Not Found'));
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(500);
                        return response;
                    },
                    send: (data) => {
                        expect(data).to.be.an('object');
                        expect(data).to.have.property('error');
                        expect(data.error).to.equal('Not Found');
                    }
                };
                await SaleController.getSaleById(request, response);
            });
        });
        describe('GET /:id', () => {
            before(() => {
                sinon.stub(Sale, 'findByPk').resolves(saleOkMock);
            })
            after(() => {
                Sale.findByPk.restore();
            });
            it('should return the sale (a general one) corresponding to the id in req.params', async () => {
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    json: (data) => {
                        expect(data).to.be.an('object');
                        expect(data[0]).to.have.property('id');
                        expect(data[0]).to.have.property('user_id');
                        expect(data[0]).to.have.property('seller_id');
                        expect(data[0]).to.have.property('total_price');
                        expect(data[0]).to.have.property('delivery_address');
                        expect(data[0]).to.have.property('delivery_number');
                        expect(data[0]).to.have.property('sale_date');
                        expect(data[0]).to.have.property('status');
                    }
                };
                await SaleController.getSaleById(request, response);
            });
            it("should return an error if something went wrong getting a general sale", async () => {
                Sale.findByPk.rejects(new Error('Not Found'));
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(500);
                        return response;
                    },
                    send: (data) => {
                        expect(data).to.be.an('object');
                        expect(data).to.have.property('error');
                        expect(data.error).to.equal('Not Found');
                    }
                };
                await SaleController.getSaleById(request, response);
            });
            it('should return the sale (a general one) corresponding to the id in req.params', async () => {
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    json: (data) => {
                        expect(data).to.be.an('object');
                        expect(data[0]).to.have.property('id');
                        expect(data[0]).to.have.property('user_id');
                        expect(data[0]).to.have.property('seller_id');
                        expect(data[0]).to.have.property('total_price');
                        expect(data[0]).to.have.property('delivery_address');
                        expect(data[0]).to.have.property('delivery_number');
                        expect(data[0]).to.have.property('sale_date');
                        expect(data[0]).to.have.property('status');
                    }
                };
                await SaleController.getSalesBySellerId(request, response);
            });
            it("should return an error if something went wrong getting a sale made by a seller", async () => {
                Sale.findByPk.rejects(new Error('Not Found'));
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(500);
                        return response;
                    },
                    send: (data) => {
                        expect(data).to.be.an('object');
                        expect(data).to.have.property('error');
                        expect(data.error).to.equal('Not Found');
                    }
                };
                await SaleController.getSalesBySellerId(request, response);
            });
            it('should return the sale (sale by Seller) corresponding to the id in req.params', async () => {
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    json: (data) => {
                        expect(data).to.be.an('object');
                        expect(data[0]).to.have.property('id');
                        expect(data[0]).to.have.property('user_id');
                        expect(data[0]).to.have.property('seller_id');
                        expect(data[0]).to.have.property('total_price');
                        expect(data[0]).to.have.property('delivery_address');
                        expect(data[0]).to.have.property('delivery_number');
                        expect(data[0]).to.have.property('sale_date');
                        expect(data[0]).to.have.property('status');
                    }
                };
                await SaleController.getOrdersByClientId(request, response);
            });
            it("should return an error if something went wrong getting an order by client", async () => {
                Sale.findByPk.rejects(new Error('Not Found'));
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(500);
                        return response;
                    },
                    send: (data) => {
                        expect(data).to.be.an('object');
                        expect(data).to.have.property('error');
                        expect(data.error).to.equal('Not Found');
                    }
                };
                await SaleController.getOrdersByClientId(request, response);
            });
        });
    });
});
