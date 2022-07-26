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
const playerService_1 = __importDefault(require("../services/playerService"));
let router = express_1.default.Router();
router.post("/add", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let newPlayer = yield playerService_1.default.addPlayer(req.body);
    if (newPlayer instanceof Error) {
        res.status(500).json(newPlayer);
    }
    else {
        res.status(200).json(newPlayer);
    }
}));
router.get("/players", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let players = yield playerService_1.default.findPlayers();
    if (players instanceof Error) {
        res.status(500).json(players);
    }
    else {
        res.status(200).json(players);
    }
}));
exports.default = router;
