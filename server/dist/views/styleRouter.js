"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const styleController_1 = require("../controllers/styleController");
const router = (0, express_1.Router)();
router.get("/", styleController_1.getStyles);
exports.default = router;
