"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const router_1 = require("./router");
const error_handler_1 = require("./middlewares/error-handler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/api", router_1.router);
app.use(error_handler_1.errorHandlerMiddleware);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/`));
