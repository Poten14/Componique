"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CardPricing_1 = __importDefault(require("@components/Card/CardPricing"));
const CardReview_1 = __importDefault(require("@components/Card/CardReview"));
const Pagination_1 = __importDefault(require("@components/Pagination/Pagination"));
const Navbar_1 = __importDefault(require("@components/Navbar/Navbar"));
const useShoppingStore_1 = require("app/store/useShoppingStore");
const react_1 = require("react");
const SelectValueAdd_1 = __importDefault(require("@components/Select/SelectValueAdd"));
const ShoppingForm = () => {
    const productsPerPage = 6;
    const { title, subtitle, title2, currentPage, totalPages, paginationVariant, paginationStyleType, paginationColor, logoSrc, logoName, size, hoverColor, position, setShoppingState, } = (0, useShoppingStore_1.useShoppingStore)();
    const [selectedOption, setSelectedOption] = (0, react_1.useState)("");
    const products = [
        {
            title: "Product 1",
            description: "This is the best product.",
            price: "$10",
            features: ["Feature 1", "Feature 2", "Feature 3"],
            buy: "Buy Now",
            category: "Option 1",
        },
        {
            title: "Product 2",
            description: "This is a highly recommended product.",
            price: "$20",
            features: ["Feature A", "Feature B", "Feature C"],
            buy: "Buy Now",
            category: "Option 2",
        },
        {
            title: "Product 3",
            description: "This is a popular product.",
            price: "$30",
            features: ["Benefit 1", "Benefit 2", "Benefit 3"],
            buy: "Buy Now",
            category: "Option 1",
        },
        {
            title: "Product 4",
            description: "This is a famous product.",
            price: "$40",
            features: ["Feature X", "Feature Y", "Feature Z"],
            buy: "Buy Now",
            category: "Option 3",
        },
        {
            title: "Product 5",
            description: "This product is on sale.",
            price: "$50",
            features: ["Benefit 1", "Benefit 2", "Benefit 3"],
            buy: "Buy Now",
            category: "Option 2",
        },
        {
            title: "Product 6",
            description: "This product is highly recommended.",
            price: "$60",
            features: ["Feature A", "Feature B", "Feature C"],
            buy: "Buy Now",
            category: "Option 4",
        },
        {
            title: "Product 7",
            description: "This product is on sale.",
            price: "$50",
            features: ["Benefit 1", "Benefit 2", "Benefit 3"],
            buy: "Buy Now",
            category: "Option 3",
        },
        {
            title: "Product 8",
            description: "This product is highly recommended.",
            price: "$60",
            features: ["Feature A", "Feature B", "Feature C"],
            buy: "Buy Now",
            category: "Option 1",
        },
        {
            title: "Product 9",
            description: "This product is on sale.",
            price: "$50",
            features: ["Benefit 1", "Benefit 2", "Benefit 3"],
            buy: "Buy Now",
            category: "Option 4",
        },
        {
            title: "Product 10",
            description: "This product is highly recommended.",
            price: "$60",
            features: ["Feature A", "Feature B", "Feature C"],
            buy: "Buy Now",
            category: "Option 2",
        },
    ];
    const filteredProducts = selectedOption
        ? products.filter((product) => product.category === selectedOption)
        : products;
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    const handlePageChange = (page) => {
        setShoppingState("currentPage", page);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto mt-20 rounded-lg bg-white p-6 shadow-lg dark:bg-[#333742]", children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, { logoSrc: logoSrc, logoName: logoName, size: size, hoverColor: hoverColor, position: position, links: [
                    { name: "Home", href: "/userpage/shopping" },
                    { name: "Products", href: "/userpage/shopping" },
                    { name: "Contact", href: "/userpage/shopping" },
                ] }), (0, jsx_runtime_1.jsxs)("header", { className: "mb-10 text-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "m-8 text-4xl font-bold text-Gray", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg text-Gray", children: subtitle })] }), (0, jsx_runtime_1.jsx)(SelectValueAdd_1.default, { option: ["Option 1", "Option 2", "Option 3", "Option 4"], placeholder: "Select an option", onChange: (selectedValues) => setSelectedOption(selectedValues[0]) }), (0, jsx_runtime_1.jsx)("div", { className: "my-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3", children: currentProducts.map((product, index) => ((0, jsx_runtime_1.jsx)("div", { className: "w-70 transform transition-transform duration-300 hover:scale-105", children: (0, jsx_runtime_1.jsx)(CardPricing_1.default, { title: product.title, description: product.description, price: product.price, features: product.features, buy: product.buy }) }, index))) }), (0, jsx_runtime_1.jsx)("div", { className: "my-10 flex justify-center", children: (0, jsx_runtime_1.jsx)(Pagination_1.default, { currentPage: currentPage, totalPages: Math.ceil(filteredProducts.length / productsPerPage), variant: paginationVariant, styleType: paginationStyleType, color: paginationColor, onPageChange: handlePageChange, showFirstLastButtons: true }) }), (0, jsx_runtime_1.jsxs)("div", { className: "my-16", children: [(0, jsx_runtime_1.jsx)("h2", { className: "mb-8 text-center text-3xl font-bold dark:text-gray", children: title2 }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [(0, jsx_runtime_1.jsx)(CardReview_1.default, { avatar: "/avatar1.svg", name: "User1", rate: 5, children: "This product is amazing!" }), (0, jsx_runtime_1.jsx)(CardReview_1.default, { avatar: "/avatar2.svg", name: "User2", rate: 4, children: "Great value for the price." }), (0, jsx_runtime_1.jsx)(CardReview_1.default, { avatar: "/avatar3.svg", name: "User3", rate: 4, children: "Very good for the price." }), (0, jsx_runtime_1.jsx)(CardReview_1.default, { avatar: "/avatar4.svg", name: "User4", rate: 5, children: "Best choice I've made!" })] })] })] }));
};
exports.default = ShoppingForm;
