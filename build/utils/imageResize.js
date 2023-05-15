"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFilename = exports.imageResize = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var inputPath = 'assets/full';
var outputPath = 'assets/thumb';
function imageResize(filename, width, height) {
    var fileName = imageFilename(filename);
    var fileinput = path_1.default.join(inputPath, fileName);
    var fileout = path_1.default.join(outputPath, fileName);
    return (0, sharp_1.default)(fileinput)
        .resize(width, height)
        .toFile(fileout);
}
exports.imageResize = imageResize;
function imageFilename(filename) {
    if (!filename.endsWith('.jpg')) {
        filename = filename + '.jpg';
    }
    return filename;
}
exports.imageFilename = imageFilename;
