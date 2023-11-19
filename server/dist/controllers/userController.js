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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getAllUsers = exports.updateUser = exports.getTattooArtists = exports.getUser = void 0;
const User_1 = require("../entities/User");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const userFound = yield User_1.User.findOne({ where: { id } });
        return res.json({
            success: true,
            userFound,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getUser = getUser;
const getTattooArtists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tattooArtists = yield User_1.User.find({
            where: { role: "tattooArtist" },
        });
        return res.json({
            success: true,
            tattooArtists,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getTattooArtists = getTattooArtists;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        User_1.User.update({ id }, req.body);
        return res.json({
            success: true,
            message: "Usuario actualizado.",
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const userToDelete = yield User_1.User.findOne({ where: { id: userId } });
    User_1.User.delete(userToDelete.id);
    return res.json({
        success: true,
        message: "Usuario Eliminado",
    });
});
exports.deleteUser = deleteUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.User.find();
        return res.json({
            success: true,
            users,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllUsers = getAllUsers;
