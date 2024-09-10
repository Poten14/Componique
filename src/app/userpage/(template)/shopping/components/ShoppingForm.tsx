"use client";

import CardPricing from "@components/Card/CardPricing";
import CardReview from "@components/Card/CardReview";
import Pagination from "@components/Pagination/Pagination";
import Navbar from "@components/Navbar/Navbar"; // 새로운 Navbar 컴포넌트로 대체
import { useShoppingStore } from "app/store/useShoppingStore";
import React from "react";

interface Product {
  title: string;
  description: string;
  price: string;
  features: string[];
  buy: string;
}

const ShoppingForm: React.FC = () => {
  const productsPerPage = 6;

  const {
    title,
    subtitle,
    title2,
    currentPage,
    totalPages,
    paginationVariant,
    paginationStyleType,
    paginationColor,
    logoSrc,
    logoName,
    size,
    hoverColor,
    position,
    setShoppingState,
  } = useShoppingStore();

  const products: Product[] = [
    {
      title: "Product 1",
      description: "최고의 상품입니다.",
      price: "$10",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buy: "구매하기",
    },
    {
      title: "Product 2",
      description: "추천하는 상품입니다.",
      price: "$20",
      features: ["Feature A", "Feature B", "Feature C"],
      buy: "구매하기",
    },
    {
      title: "Product 3",
      description: "인기 상품입니다.",
      price: "$30",
      features: ["Benefit 1", "Benefit 2", "Benefit 3"],
      buy: "구매하기",
    },
    {
      title: "Product 4",
      description: "유명한 상품입니다.",
      price: "$40",
      features: ["Feature X", "Feature Y", "Feature Z"],
      buy: "구매하기",
    },
    {
      title: "Product 5",
      description: "할인 중인 상품입니다.",
      price: "$50",
      features: ["Benefit 1", "Benefit 2", "Benefit 3"],
      buy: "구매하기",
    },
    {
      title: "Product 6",
      description: "강력 추천 상품입니다.",
      price: "$60",
      features: ["Feature A", "Feature B", "Feature C"],
      buy: "구매하기",
    },
    {
      title: "Product 7",
      description: "할인 중인 상품입니다.",
      price: "$50",
      features: ["Benefit 1", "Benefit 2", "Benefit 3"],
      buy: "구매하기",
    },
    {
      title: "Product 8",
      description: "강력 추천 상품입니다.",
      price: "$60",
      features: ["Feature A", "Feature B", "Feature C"],
      buy: "구매하기",
    },
    {
      title: "Product 9",
      description: "할인 중인 상품입니다.",
      price: "$50",
      features: ["Benefit 1", "Benefit 2", "Benefit 3"],
      buy: "구매하기",
    },
    {
      title: "Product 10",
      description: "강력 추천 상품입니다.",
      price: "$60",
      features: ["Feature A", "Feature B", "Feature C"],
      buy: "구매하기",
    },
  ];

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  const handlePageChange = (page: number) => {
    setShoppingState("currentPage", page);
  };

  return (
    <div className="container mx-auto mt-20 border border-gray bg-white p-6">
      {/* Navbar 컴포넌트 */}
      <Navbar
        logoSrc={logoSrc}
        logoName={logoName}
        size={size}
        hoverColor={hoverColor}
        position={position}
        links={[
          { name: "Home", href: "/userpage/shopping" },
          { name: "Products", href: "/userpage/shopping" },
          { name: "Contact", href: "/userpage/shopping" },
        ]}
      />

      {/* 헤더 섹션 */}
      <header className="mb-10 text-center">
        <h1 className="m-8 text-4xl font-bold text-Gray">{title}</h1>
        <p className="text-lg text-Gray">{subtitle}</p>
      </header>

      {/* 상품 카드 섹션 */}
      <div className="my-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map((product, index) => (
          <div
            key={index}
            className="w-70 transform transition-transform duration-300 hover:scale-105"
          >
            <CardPricing
              title={product.title}
              description={product.description}
              price={product.price}
              features={product.features}
              buy={product.buy}
            />
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="my-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          variant={paginationVariant}
          styleType={paginationStyleType}
          color={paginationColor}
          onPageChange={handlePageChange}
          showFirstLastButtons={true}
        />
      </div>

      {/* 리뷰 섹션 */}
      <div className="my-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-Gray">
          {title2}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardReview avatar="/avatar1.svg" name="User1" rate={5}>
            이 상품 정말 좋아요!
          </CardReview>
          <CardReview avatar="/avatar2.svg" name="User2" rate={4}>
            가격 대비 훌륭합니다.
          </CardReview>
          <CardReview avatar="/avatar3.svg" name="User3" rate={4}>
            가격 대비 매우 좋습니다.
          </CardReview>
          <CardReview avatar="/avatar4.svg" name="User4" rate={5}>
            최고의 선택이었어요!
          </CardReview>
        </div>
      </div>
    </div>
  );
};

export default ShoppingForm;
