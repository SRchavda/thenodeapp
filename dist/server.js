"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var mongoose_1 = __importDefault(require("mongoose"));
var port = 3000;
// MongoDB connection URL (replace with your actual connection string)
var dbUrl = 'mongodb+srv://shivrajchavda1008:whyRCB18@cluster0.e1dtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Connect to MongoDB
mongoose_1.default.connect(dbUrl)
    .then(function () {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    app_1.default.listen(port, function () {
        console.log("Server is listening on port ".concat(port));
    });
})
    .catch(function (err) {
    console.error('Error connecting to MongoDB:', err);
});
//# sourceMappingURL=server.js.map