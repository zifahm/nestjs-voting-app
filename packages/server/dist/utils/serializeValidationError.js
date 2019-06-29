"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeValidationError = (err) => {
    const invalid = [];
    err.inner.map(value => {
        invalid.push({
            path: value.path,
            message: value.message,
        });
    });
    return invalid;
};
//# sourceMappingURL=serializeValidationError.js.map