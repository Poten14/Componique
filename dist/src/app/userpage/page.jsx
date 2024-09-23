"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserPage;
const navigation_1 = require("next/navigation");
function UserPage() {
    (0, navigation_1.redirect)("/userpage/sns");
    return null;
}
