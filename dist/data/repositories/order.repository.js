"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __importDefault(require("../models/order.model"));
class OrderRepository {
    create(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const newOrder = new order_model_1.default(order);
            const savedOrder = yield newOrder.save();
            return Object.assign({ id: savedOrder.id }, savedOrder.toObject());
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.default.findOne({ id });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.default.find({});
        });
    }
}
exports.default = new OrderRepository();
