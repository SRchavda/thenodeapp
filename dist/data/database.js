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
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUrl = "mongodb+srv://shivrajchavda1008:whyRCB18@cluster0.e1dtm.mongodb.net/OMS-P?retryWrites=true&w=majority";
class Database {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(mongoUrl, {
                    // Add connection options
                    serverSelectionTimeoutMS: 5000, // Timeout after 5s
                    connectTimeoutMS: 10000, // Timeout after 10s
                });
                console.log("MongoDB connected successfully");
            }
            catch (error) {
                console.error("MongoDB connection error:", error);
                throw error;
            }
        });
    }
}
exports.default = new Database();
