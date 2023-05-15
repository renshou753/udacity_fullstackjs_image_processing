"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.helloWorld = void 0;
var path_1 = __importDefault(require("path"));
var imageResize_1 = require("../utils/imageResize");
var outputPath = 'assets/thumb';
var helloWorld = function (req, res) {
    res.send('Hello, world!');
};
exports.helloWorld = helloWorld;
var resizeImage = function (req, res) {
    var filename = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    var fileName = (0, imageResize_1.imageFilename)(filename);
    var fileout = path_1.default.join(outputPath, fileName);
    (0, imageResize_1.imageResize)(filename, width, height)
        .then(function () {
        res.sendFile(path_1.default.resolve(fileout));
    })
        .catch(function () {
        res.status(404).send('Error occurred while resizing the image');
    });
};
exports.resizeImage = resizeImage;
