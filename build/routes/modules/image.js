"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var ImageControllers_1 = require("../../api/ImageControllers");
router.get('/hello', ImageControllers_1.helloWorld);
router.get('/', ImageControllers_1.resizeImage);
exports.default = router;
