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
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const db_1 = require("./db/db");
const players_1 = __importDefault(require("./routes/players"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, helmet_1.default)());
app.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello World!");
}));
app.use("/players", players_1.default);
(0, db_1.connect)().then((response) => {
    if (response) {
        console.log("connected to database");
    }
});
app.listen(3000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Server is running on port 3000");
}));
