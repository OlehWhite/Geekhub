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
exports.userController = exports.UserController = void 0;
const express_1 = __importDefault(require("express"));
class UserController {
    constructor() {
        this.router = express_1.default.Router();
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send("Hello Oleh!");
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () { });
        this.password = (req, res, next) => __awaiter(this, void 0, void 0, function* () { });
        this.router.post("/register", this.register);
        this.router.post("/login", this.login);
        this.router.post("/password", this.password);
    }
}
exports.UserController = UserController;
exports.userController = new UserController();
