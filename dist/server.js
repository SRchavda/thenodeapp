"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUrl = process.env.MONGO_CONN_URL || "mongodb://localhost:27017/oms";
const port = 3000;
// MongoDB connection URL (replace with your actual connection string)
const dbUrl = mongoUrl;
// Connect to MongoDB
mongoose_1.default
    .connect(dbUrl)
    .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful database connection
    app_1.default.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})
    .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
