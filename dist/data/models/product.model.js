"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var productSchema = new mongoose_1.Schema({
    _id: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, required: true },
    compareAtPrice: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: [String], required: false },
    stock: { type: Number, required: true },
    categories: { type: [String], required: true },
    weight: { type: Number, required: false },
    dimensions: {
        length: { type: Number, required: false },
        width: { type: Number, required: false },
        height: { type: Number, required: false },
    },
    variants: { type: [String], required: false },
    color: { type: [String], required: false },
    tags: { type: [String], required: false },
});
var ProductModel = mongoose_1.default.model('Product', productSchema);
exports.default = ProductModel;
//# sourceMappingURL=product.model.js.map