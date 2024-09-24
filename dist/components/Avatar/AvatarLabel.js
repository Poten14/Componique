"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AvatarLabel = ({ src, alt, initial, size = 50, label, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex items-center justify-center rounded-full bg-Basic font-bold uppercase text-white`, style: {
            width: `${size}px`,
            height: `${size}px`,
            backgroundImage: src ? `url(${src})` : "",
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontSize: `${size * 0.2}px`,
        }, children: [!src && initial, (0, jsx_runtime_1.jsx)("span", { children: label })] }));
};
exports.default = AvatarLabel;
