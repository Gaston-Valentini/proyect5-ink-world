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
exports.getOneStyle = exports.getStyles = void 0;
const Style_1 = require("../entities/Style");
const getStyles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const styles = yield Style_1.Style.find();
        return res.status(200).json({
            styles,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getStyles = getStyles;
const getOneStyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    try {
        const style = yield Style_1.Style.findOne({ where: { name } });
        return res.status(200).json({
            style,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getOneStyle = getOneStyle;
