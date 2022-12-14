"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var Validate = function (req, res, next) {
    var auth_Header = req.headers.authorization;
    if (!auth_Header) {
        res.status(401);
        res.json("Not authenticated, Invalid token!");
        return false;
    }
    var tk = auth_Header.split(' ')[1];
    try {
        jsonwebtoken_1.default.verify(tk, config_1.default.token);
        next();
    }
    catch (error) {
        res.status(401);
        res.json("Invalid token !");
    }
};
exports.default = Validate;
