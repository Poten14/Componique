"use client";
import CardPricing from "@components/Card/CardPricing";
import CardReview from "@components/Card/CardReview";
import Pagination from "@components/Pagination/Pagination";
import Navbar from "@components/Navbar/Navbar";
import { useShoppingStore } from "app/store/useShoppingStore";
import React, { useState } from "react";
import SelectValueAdd from "@components/Select/SelectValueAdd";
const ShoppingForm = () => {
    const productsPerPage = 6;
    const { title, subtitle, title2, currentPage, totalPages, paginationVariant, paginationStyleType, paginationColor, logoSrc, logoName, size, hoverColor, position, setShoppingState, } = useShoppingStore();
    const [selectedOption, setSelectedOption] = useState("");
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
    return (<div className="container mx-auto mt-20 rounded-lg bg-white p-6 shadow-lg dark:bg-[#333742]">
      {/* Navbar Component */}
      <Navbar logoSrc={logoSrc} logoName={logoName} size={size} hoverColor={hoverColor} position={position} links={[
            { name: "Home", href: "/userpage/shopping" },
            { name: "Products", href: "/userpage/shopping" },
            { name: "Contact", href: "/userpage/shopping" },
        ]}/>

      {/* Header Section */}
      <header className="mb-10 text-center">
        <h1 className="m-8 text-4xl font-bold text-Gray">{title}</h1>
        <p className="text-lg text-Gray">{subtitle}</p>
      </header>

      {/* Select Section */}
      <SelectValueAdd option={["Option 1", "Option 2", "Option 3", "Option 4"]} placeholder="Select an option" onChange={(selectedValues) => setSelectedOption(selectedValues[0])}/>

      {/* Product Cards Section */}
      <div className="my-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map((product, index) => (<div key={index} className="w-70 transform transition-transform duration-300 hover:scale-105">
            <CardPricing title={product.title} description={product.description} price={product.price} features={product.features} buy={product.buy}/>
          </div>))}
      </div>

      {/* Pagination */}
      <div className="my-10 flex justify-center">
        <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredProducts.length / productsPerPage)} variant={paginationVariant} styleType={paginationStyleType} color={paginationColor} onPageChange={handlePageChange} showFirstLastButtons={true}/>
      </div>

      {/* Review Section */}
      <div className="my-16">
        <h2 className="mb-8 text-center text-3xl font-bold dark:text-gray">
          {title2}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardReview avatar="/avatar1.svg" name="User1" rate={5}>
            This product is amazing!
          </CardReview>
          <CardReview avatar="/avatar2.svg" name="User2" rate={4}>
            Great value for the price.
          </CardReview>
          <CardReview avatar="/avatar3.svg" name="User3" rate={4}>
            Very good for the price.
          </CardReview>
          <CardReview avatar="/avatar4.svg" name="User4" rate={5}>
            Best choice I've made!
          </CardReview>
        </div>
      </div>
    </div>);
};
export default ShoppingForm;
