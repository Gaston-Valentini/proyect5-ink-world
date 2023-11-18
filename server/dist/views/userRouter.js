"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get("/getUser/:id", userController_1.getUser);
router.get("/getTattooArtists", userController_1.getTattooArtists);
router.post("/updateProfile/:id", userController_1.updateUser);
exports.default = router;
