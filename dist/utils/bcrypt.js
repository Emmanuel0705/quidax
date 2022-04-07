"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.encrypt = void 0;
const app_1 = require("../constants/app");
const bcryptjs_1 = require("bcryptjs");
const encrypt = async (pin) => {
    return await (0, bcryptjs_1.hash)(pin, app_1.BCRYPT_SALT);
};
exports.encrypt = encrypt;
const verify = async (pin, encrypted) => {
    return await (0, bcryptjs_1.compare)(pin, encrypted);
};
exports.verify = verify;
//# sourceMappingURL=bcrypt.js.map