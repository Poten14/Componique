"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Carousel_1 = __importDefault(require("@components/Carousel/Carousel"));
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const CarouselAutoplay_1 = __importDefault(require("@components/Carousel/CarouselAutoplay"));
const CarouselDots_1 = __importDefault(require("@components/Carousel/CarouselDots"));
const CarouselDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "1. Carousel" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Carousel" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC5EC\uB7EC \uC774\uBBF8\uC9C0\uB97C \uC2AC\uB77C\uC774\uB4DC \uBC29\uC2DD\uC73C\uB85C \uBCF4\uC5EC\uC8FC\uB294 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC774\uC804, \uB2E4\uC74C \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0\uB97C \uC804\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Carousel from '@components/Carousel';`, copyText: `import Carousel from '@components/Carousel';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(Carousel_1.default, { images: [
                        "images/image1.svg",
                        "images/image2.svg",
                        "images/image3.svg",
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Carousel from '@components/Carousel';

function Example() {
  return <Carousel images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} />;
}

export default Example;`, copyText: `import Carousel from '@components/Carousel';

function Example() {
  return <Carousel images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} />;
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.3. Customization" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Carousel" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC591\uD55C \uC774\uBBF8\uC9C0 \uBC30\uC5F4\uC744 \uC81C\uACF5\uD558\uBA70, \uD544\uC694\uC5D0 \uB530\uB77C \uC2AC\uB77C\uC774\uB4DC \uC804\uD658\uC744 \uC704\uD55C \uCD94\uAC00 \uC124\uC815\uC744 \uC27D\uAC8C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(Carousel_1.default, { images: [
                        "images/image1.svg",
                        "images/image2.svg",
                        "images/image3.svg",
                        "images/image4.svg",
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Carousel from '@components/Carousel';

function Example() {
  return (
    <Carousel 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
    />
  );
}

export default Example;`, copyText: `import Carousel from '@components/Carousel';

function Example() {
  return (
    <Carousel 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "Carousel" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "images" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB4DC\uC5D0 \uD45C\uC2DC\uB420 \uC774\uBBF8\uC9C0 \uACBD\uB85C\uB4E4\uC758 \uBC30\uC5F4\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }) })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "1.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import Carousel from '@components/Carousel';

function Example() {
  return (
    <div>
      <Carousel 
        images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
      />
    </div>
  );
}

export default Example;`, copyText: `import Carousel from '@components/Carousel';

function Example() {
  return (
    <div>
      <Carousel 
        images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "2. CarouselAutoplay" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CarouselAutoplay" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC5EC\uB7EC \uC774\uBBF8\uC9C0\uB97C \uC2AC\uB77C\uC774\uB4DC \uBC29\uC2DD\uC73C\uB85C \uC790\uB3D9 \uC7AC\uC0DD \uAE30\uB2A5\uACFC \uD568\uAED8 \uBCF4\uC5EC\uC90D\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC774\uC804, \uB2E4\uC74C \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD574 \uC774\uBBF8\uC9C0\uB97C \uC218\uB3D9\uC73C\uB85C \uC804\uD658\uD560 \uC218 \uC788\uC73C\uBA70, \uC790\uB3D9 \uC7AC\uC0DD \uAE30\uB2A5\uB3C4 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselAutoplay from '@components/CarouselAutoplay';`, copyText: `import CarouselAutoplay from '@components/CarouselAutoplay';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(CarouselAutoplay_1.default, { images: [
                        "images/image1.svg",
                        "images/image2.svg",
                        "images/image3.svg",
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} 
    />
  );
}

export default Example;`, copyText: `import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} 
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.3. Customization" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CarouselAutoplay" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC790\uB3D9 \uC7AC\uC0DD \uAE30\uB2A5\uACFC \uC2AC\uB77C\uC774\uB4DC \uC804\uD658 \uAC04\uACA9\uC744 \uC870\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 ", (0, jsx_runtime_1.jsx)("code", { children: "autoplay" }), "\uC640", " ", (0, jsx_runtime_1.jsx)("code", { children: "interval" }), " props\uB97C \uD1B5\uD574 \uC774 \uAE30\uB2A5\uC744 \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(CarouselAutoplay_1.default, { images: [
                        "images/image1.svg",
                        "images/image2.svg",
                        "images/image3.svg",
                        "images/image4.svg",
                    ], autoplay: true, interval: 3000 }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]}
      autoplay={true}
      interval={3000} 
    />
  );
}

export default Example;`, copyText: `import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]}
      autoplay={true}
      interval={3000} 
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CarouselAutoplay" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "images" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB4DC\uC5D0 \uD45C\uC2DC\uB420 \uC774\uBBF8\uC9C0 \uACBD\uB85C\uB4E4\uC758 \uBC30\uC5F4\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "autoplay" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC790\uB3D9 \uC7AC\uC0DD \uAE30\uB2A5\uC744 \uD65C\uC131\uD654\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "interval" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB4DC \uC804\uD658 \uAC04\uACA9(\uBC00\uB9AC\uCD08)\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "2000" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "2.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <div>
      <CarouselAutoplay 
        images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
        autoplay={true}
        interval={3000} 
      />
    </div>
  );
}

export default Example;`, copyText: `import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <div>
      <CarouselAutoplay 
        images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
        autoplay={true}
        interval={3000} 
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748]", children: "3. CarouselDots" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CarouselDots" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC774\uBBF8\uC9C0 \uC2AC\uB77C\uC774\uB4DC \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uBA70, \uD558\uB2E8\uC5D0 \uD398\uC774\uC9C0\uB124\uC774\uC158\uC744 \uC704\uD55C \uC810(dot)\uC744 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uC774\uC804, \uB2E4\uC74C \uBC84\uD2BC\uC744 \uD1B5\uD574 \uC2AC\uB77C\uC774\uB4DC\uB97C \uC804\uD658\uD560 \uC218 \uC788\uC73C\uBA70, \uC790\uB3D9 \uC7AC\uC0DD \uAE30\uB2A5\uB3C4 \uC81C\uACF5\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselDots from '@components/CarouselDots';`, copyText: `import CarouselDots from '@components/CarouselDots';`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { className: "my-7", children: (0, jsx_runtime_1.jsx)(CarouselDots_1.default, { images: [
                        "images/image1.svg",
                        "images/image2.svg",
                        "images/image3.svg",
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <CarouselDots
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]}
    />
  );
}

export default Example;`, copyText: `import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <CarouselDots
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]}
    />
  );
}

export default Example;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.3. Customization" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CarouselDots" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC790\uB3D9 \uC7AC\uC0DD, \uC2AC\uB77C\uC774\uB4DC \uAC04\uACA9 \uC870\uC815 \uB4F1 \uB2E4\uC591\uD55C \uC124\uC815\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. \uD544\uC694\uC5D0 \uB530\uB77C \uC774\uB7EC\uD55C \uC635\uC158\uB4E4\uC744 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("div", { className: "mb-7", children: (0, jsx_runtime_1.jsx)(CarouselDots_1.default, { images: [
                        "images/image1.svg",
                        "images/image2.svg",
                        "images/image3.svg",
                        "images/image4.svg",
                    ], autoplay: true, interval: 3000 }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <CarouselDots
      images={[
        "images/image1.svg",
        "images/image2.svg",
        "images/image3.svg",
        "images/image4.svg",
      ]}
      autoplay={true}
      interval={3000}
    />
  );
}

export default Example;`, copyText: `import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <CarouselDots
      images={[
        "images/image1.svg",
        "images/image2.svg",
        "images/image3.svg",
        "images/image4.svg",
      ]}
      autoplay={true}
      interval={3000}
    />
  );
}

export default Example;`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.4. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "CarouselDots" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "images" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB4DC\uC5D0 \uD45C\uC2DC\uB420 \uC774\uBBF8\uC9C0 \uACBD\uB85C\uB4E4\uC758 \uBC30\uC5F4\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "string[]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "showDots" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uD558\uB2E8\uC5D0 \uC2AC\uB77C\uC774\uB4DC \uC810(dot)\uC744 \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "true" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "autoplay" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC2AC\uB77C\uC774\uB4DC\uC758 \uC790\uB3D9 \uC804\uD658 \uC5EC\uBD80\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "boolean" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "false" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "interval" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC790\uB3D9 \uC804\uD658 \uC2DC \uC2AC\uB77C\uC774\uB4DC \uAC04\uACA9\uC744 \uBC00\uB9AC\uCD08 \uB2E8\uC704\uB85C \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "2000" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748]", children: "3.5. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <div>
      <CarouselDots
        images={[
          "images/image1.svg",
          "images/image2.svg",
          "images/image3.svg",
          "images/image4.svg",
        ]}
        autoplay={true}
        interval={3000}
      />
    </div>
  );
}

export default Example;`, copyText: `import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <div>
      <CarouselDots
        images={[
          "images/image1.svg",
          "images/image2.svg",
          "images/image3.svg",
          "images/image4.svg",
        ]}
        autoplay={true}
        interval={3000}
      />
    </div>
  );
}

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = CarouselDocs;
