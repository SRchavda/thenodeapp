"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var customers_routes_1 = __importDefault(require("./api/customers/customers.routes"));
var products_routes_1 = __importDefault(require("./api/products/products.routes"));
var orders_routes_1 = __importDefault(require("./api/orders/orders.routes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/customers', customers_routes_1.default);
app.use('/api/products', products_routes_1.default);
app.use('/api/orders', orders_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map