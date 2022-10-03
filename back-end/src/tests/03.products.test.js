const { expect } = require("chai");
const sinon = require("sinon");

// const ProductRoutes = require("../routes/product.routes");
const ProductController = require('../../src/controllers/product.controller');
// const ProductService = require('../../src/services/product.service');
// const ProductRepository = require('../../src/repositories/product.repository');
const Product = require('../../src/database/models/products');

const {
    productOkMock,
    // productNotOkMock,
    productsMock,
    productsEmptyMock
  } = require('../mocks/product.mock');

describe('====== PRODUCTS ======', () => {
    describe('Check /products routes', () => {
        describe('GET', () => {
            before(() => {
                sinon.stub(Product, 'findAll').resolves(productsMock);
            })
            after(() => {
                Product.findAll.restore();
            });
            it('should return all products', async () => {
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    json: (data) => {
                        expect(data).to.be.an('array');
                        expect(data).to.have.lengthOf(11);
                        expect(data[0]).to.have.property('id');
                        expect(data[0]).to.have.property('name');
                        expect(data[0]).to.have.property('price');
                        expect(data[0]).to.have.property('url_image');
                    }
                };
                await ProductController.getProduct(request, response);
            });
            it("should return an empty array if there is no product registered", async () => {
                Product.findAll.resolves(productsEmptyMock);
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    send: (data) => {
                        expect(data).to.be.an('array');
                        expect(data).to.have.lengthOf(0);
                        expect(data.error).to.be.deep.eq(productsEmptyMock);
                    }
                };
                await ProductController.getProduct(request, response);
            });
            it("should return an error if something went wrong", async () => {
                Product.findAll.rejects(new Error('Not Found'));
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
                await ProductController.getProduct(request, response);
            });
        });
        describe('GET /:id', () => {
            before(() => {
                sinon.stub(Product, 'findByPk').resolves(productOkMock);
            })
            after(() => {
                Product.findByPk.restore();
            });
            it('should return the product corresponding to the id in req.params', async () => {
                const request = {};
                const response = {
                    status: (code) => {
                        expect(code).to.equal(200);
                        return response;
                    },
                    json: (data) => {
                        expect(data).to.be.an('object');
                        expect(data[0]).to.have.property('id');
                        expect(data[0]).to.have.property('name');
                        expect(data[0]).to.have.property('price');
                        expect(data[0]).to.have.property('url_image');
                    }
                };
                await ProductController.getProduct(request, response);
            });
            it("should return an error if something went wrong", async () => {
                Product.findByPk.rejects(new Error('Not Found'));
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
                await ProductController.getProduct(request, response);
            });
        });
    });
});
