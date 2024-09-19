"use client";

import CodeBox from "@components/CodeBox";
import React, { useState } from "react";

const IntroducePage: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});
  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose mx-auto max-w-4xl p-8 text-center">
      <header className="mb-12">
        <h1 className="text-gray-800 dark:text-gray-200 text-4xl font-bold">
          Welcome to <span className="text-Basic">Componique</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-xl">
          Start with Componique, the most popular open-source interactive UI
          component library built with Tailwind CSS utility classes.
        </p>
      </header>

      <section className="my-12">
        <h2 className="text-gray-800 dark:text-gray-200 text-2xl font-semibold">
          Key Features
        </h2>
        <ul className="mt-4 space-y-4 text-left">
          <li className="flex items-center">
            <span className="mr-2 text-xl text-blue-500">✔</span>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="dark:text-white">
                Intuitive Documentation and Code Examples :
              </strong>
              &nbsp; Each component comes with detailed explanations and
              supported props.
            </p>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-xl text-blue-500">✔</span>
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="dark:text-white">
                Reusable and Scalable Components :
              </strong>
              &nbsp; Quickly build basic UI elements and save time with scalable
              and reusable components.
            </p>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-xl text-blue-500">✔</span>
            <p className="text-black dark:text-white">
              <strong className="dark:text-white">
                User-Friendly UI Template Customization :
              </strong>
              &nbsp; Easily modify templates in real-time without complex
              coding.
            </p>
          </li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          Template Codebox and Customization
        </h2>
        <p className="mt-4 text-black dark:text-white">
          <strong className="dark:text-white">Template Codebox : </strong>{" "}
          Automatically generate template code based on user-selected options,
          allowing for easy code copying.
        </p>
        <p className="mt-4 text-black dark:text-white">
          <strong className="dark:text-white">Template Customization : </strong>{" "}
          The template page provides various UI templates, and users can
          customize template elements (color, size, style, etc.) using a Control
          Panel.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          Getting Started
        </h2>
        <p className="mt-4 text-black dark:text-white">
          It's simple to get started with Componique. Just install the package
          via npm or yarn and start building
        </p>
        <div className="mt-6">
          <CodeBox
            code={`npm install componique`}
            copyText={`npm install componique`}
            language="tsx"
            index={0}
            copied={copied}
            handleCopy={handleCopy}
          />
          <CodeBox
            code={`yarn add componique`}
            copyText={`yarn add componique`}
            language="tsx"
            index={0}
            copied={copied}
            handleCopy={handleCopy}
          />
        </div>
      </section>

      <footer className="text-gray-600 dark:text-gray-400 mt-16">
        <p>
          Ready to take your project to the next level? Start using Componique
          today and streamline your development process!
        </p>
      </footer>
    </div>
  );
};

export default IntroducePage;
