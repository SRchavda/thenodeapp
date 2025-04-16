"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./data/database"));
const port = 3000;
// Connect to MongoDB
database_1.default.connect()
    .then(() => {
    app_1.default.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});
