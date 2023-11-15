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
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../entities/User");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userFound = yield User_1.User.findOne({ where: { email } });
    if (userFound) {
        return res.status(400).json({
            success: false,
            message: "Ya existe un usuario registrado con ese correo electrónico.",
        });
    }
    const hashedPassword = bcrypt_1.default.hashSync(password, 10);
    User_1.User.create(Object.assign(Object.assign({}, req.body), { password: hashedPassword })).save();
    return res.status(200).json({
        success: true,
        message: "Usuario registrado correctamente.",
    });
});
exports.register = register;
