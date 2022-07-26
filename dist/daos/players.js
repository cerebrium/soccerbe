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
const db_1 = require("../db/db");
const Player_1 = __importDefault(require("../models/Player"));
class PlayersDAO {
    constructor() {
        this.connectToPlayers();
    }
    connectToPlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, db_1.connect)();
            }
            catch (e) {
                console.log("Error in the dao: ", e);
            }
        });
    }
    getPlayers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Player_1.default.find();
            }
            catch (e) {
                return e;
            }
        });
    }
    getPlayerByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Player_1.default.findOne({ email });
            }
            catch (e) {
                return e;
            }
        });
    }
    addPlayer(player) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Player_1.default.create(player);
            }
            catch (e) {
                return e;
            }
        });
    }
}
exports.default = new PlayersDAO();
