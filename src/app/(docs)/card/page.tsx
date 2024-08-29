"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CodeBox from "@components/CodeBox";
import CardBasic from "@components/Card/CardBasic";
import CardInteractive from "@components/Card/CardInteractive";
import CardImage from "@components/Card/CardImage";
import CardPricing from "@components/Card/CardPricing";
import CardReview from "@components/Card/CardReview";

const CardExample: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      {/* Card1 */}
      <div>
        <h1 className="text-[#2D3748]">1. CardBasic</h1>
        <p>
          <code>CardBasic</code> 컴포넌트는 기본 카드 레이아웃을 제공하며,
          제목과 본문 내용을 포함할 수 있습니다. 이 컴포넌트는 간단한 텍스트
          또는 기타 React 컴포넌트를 카드 형태로 감싸서 표시할 때 유용합니다.
        </p>
        <h2 className="text-[#2D3748]">1.1. Import</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardBasic from '@components/Card/CardBasic';`}
          copyText={`import CardBasic from '@components/Card/CardBasic';`}
          language="tsx"
          index={1}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}
        <h2 className="text-[#2D3748]">1.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <CardBasic title="Example Card">
            <p>This is an example of a basic card component in React.</p>
          </CardBasic>
        </div>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardBasic from '@components/Card/CardBasic';

function Example() {
  return (
    <CardBasic title="Example Card">
      <p>This is an example of a basic card component in React.</p>
    </CardBasic>
  );
}

export default Example;`}
          copyText={`import CardBasic from '@components/Card/CardBasic';

function Example() {
  return (
    <CardBasic title="Example Card">
      <p>This is an example of a basic card component in React.</p>
    </CardBasic>
  );
}

export default Example;`}
          language="tsx"
          index={2}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}
        <h2 className="text-[#2D3748]">1.3. Props</h2>
        <p>
          <code>CardBasic</code> 컴포넌트는 아래와 같은 Props를 가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>카드의 제목을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>카드 내부에 표시될 내용입니다.</td>
              <td>
                <code>React.ReactNode</code>
              </td>
              <td>
                <code>null</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">1.4. Full Example</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardBasic from '@components/Card/CardBasic';

function FullExample() {
  return (
    <div>
      <CardBasic title="Card 1">
        <p>This is the first card with some example content.</p>
      </CardBasic>
      <CardBasic title="Card 2">
        <p>This is the second card with different content.</p>
      </CardBasic>
      <CardBasic title="Card 3">
        <p>This is the third card with even more content.</p>
      </CardBasic>
    </div>
  );
}

export default FullExample;`}
          copyText={`import CardBasic from '@components/Card/CardBasic';

function FullExample() {
  return (
    <div>
      <CardBasic title="Card 1">
        <p>This is the first card with some example content.</p>
      </CardBasic>
      <CardBasic title="Card 2">
        <p>This is the second card with different content.</p>
      </CardBasic>
      <CardBasic title="Card 3">
        <p>This is the third card with even more content.</p>
      </CardBasic>
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={3}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}
      </div>

      {/* Card2 */}
      <br />
      <br />
      <div>
        <h1 className="text-[#2D3748]">2. CardInteractive</h1>
        <p>
          <code>CardInteractive</code> 컴포넌트는 사용자가 클릭하여 추가적인
          내용을 확장하거나 축소할 수 있는 인터랙티브한 카드 레이아웃을
          제공합니다. 이 컴포넌트는 제목과 본문 내용을 포함할 수 있으며, 본문
          내용은 클릭 시 확장됩니다.
        </p>
        <h2 className="text-[#2D3748]">2.1. Import</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardInteractive from '@components/Card/CardInteractive';`}
          copyText={`import CardInteractive from '@components/Card/CardInteractive';`}
          language="tsx"
          index={4}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">2.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <CardInteractive title="Interactive Card">
            <p>This content is hidden until the card is clicked.</p>
          </CardInteractive>
        </div>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardInteractive from '@components/Card/CardInteractive';

function Example() {
  return (
    <CardInteractive title="Interactive Card">
      <p>This content is hidden until the card is clicked.</p>
    </CardInteractive>
  );
}

export default Example;`}
          copyText={`import CardInteractive from '@components/Card/CardInteractive';

function Example() {
  return (
    <CardInteractive title="Interactive Card">
      <p>This content is hidden until the card is clicked.</p>
    </CardInteractive>
  );
}

export default Example;`}
          language="tsx"
          index={5}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">2.3. Props</h2>
        <p>
          <code>CardInteractive</code> 컴포넌트는 아래와 같은 Props를 가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>카드의 제목을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>카드 내부에 표시될 내용입니다. 클릭 시 확장됩니다.</td>
              <td>
                <code>React.ReactNode</code>
              </td>
              <td>
                <code>null</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">2.4. Full Example</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardInteractive from '@components/Card/CardInteractive';

function FullExample() {
  return (
    <div>
      <CardInteractive title="Card 1">
        <p>This is the first card with interactive content.</p>
      </CardInteractive>
      <CardInteractive title="Card 2">
        <p>This is the second card, click to expand.</p>
      </CardInteractive>
      <CardInteractive title="Card 3">
        <p>The third card also has expandable content.</p>
      </CardInteractive>
    </div>
  );
}

export default FullExample;`}
          copyText={`import CardInteractive from '@components/Card/CardInteractive';

function FullExample() {
  return (
    <div>
      <CardInteractive title="Card 1">
        <p>This is the first card with interactive content.</p>
      </CardInteractive>
      <CardInteractive title="Card 2">
        <p>This is the second card, click to expand.</p>
      </CardInteractive>
      <CardInteractive title="Card 3">
        <p>The third card also has expandable content.</p>
      </CardInteractive>
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={6}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}
      </div>

      {/* Card3 */}
      <br />
      <br />
      <div>
        <h1 className="text-[#2D3748]">3. CardImage</h1>
        <p>
          <code>CardImage</code> 컴포넌트는 이미지 또는 아바타와 함께 텍스트를
          표시하는 카드 레이아웃을 제공합니다. 이 컴포넌트는 제목과 본문 내용을
          포함할 수 있으며, 이미지를 카드 왼쪽에 배치할 수 있습니다.
        </p>
        <h2 className="text-[#2D3748]">3.1. Import</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardImage from '@components/Card/CardImage';`}
          copyText={`import CardImage from '@components/Card/CardImage';`}
          language="tsx"
          index={7}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">3.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <CardImage title="Image Card">
            <p>This card includes an image alongside the text.</p>
          </CardImage>
        </div>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardImage from '@components/Card/CardImage';

function Example() {
  return (
    <CardImage title="Image Card">
      <p>This card includes an image alongside the text.</p>
    </CardImage>
  );
}

export default Example;`}
          copyText={`import CardImage from '@components/Card/CardImage';

function Example() {
  return (
    <CardImage title="Image Card">
      <p>This card includes an image alongside the text.</p>
    </CardImage>
  );
}

export default Example;`}
          language="tsx"
          index={8}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">3.3. Props</h2>
        <p>
          <code>CardImage</code> 컴포넌트는 아래와 같은 Props를 가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>카드의 제목을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>카드 내부에 표시될 내용입니다.</td>
              <td>
                <code>React.ReactNode</code>
              </td>
              <td>
                <code>null</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">3.4. Full Example</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardImage from '@components/Card/CardImage';

function FullExample() {
  return (
    <div>
      <CardImage title="Image Card 1">
        <p>This is the first card with an image.</p>
      </CardImage>
      <CardImage title="Image Card 2">
        <p>This is the second card with another image.</p>
      </CardImage>
      <CardImage title="Image Card 3">
        <p>The third card with yet another image.</p>
      </CardImage>
    </div>
  );
}

export default FullExample;`}
          copyText={`import CardImage from '@components/Card/CardImage';

function FullExample() {
  return (
    <div>
      <CardImage title="Image Card 1">
        <p>This is the first card with an image.</p>
      </CardImage>
      <CardImage title="Image Card 2">
        <p>This is the second card with another image.</p>
      </CardImage>
      <CardImage title="Image Card 3">
        <p>The third card with yet another image.</p>
      </CardImage>
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={9}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}
      </div>

      {/* Card4 */}
      <br />
      <br />
      <div>
        <h1 className="text-[#2D3748]">4. CardPricing</h1>
        <p>
          <code>CardPricing</code> 컴포넌트는 상품 또는 서비스의 가격, 설명,
          주요 특징을 표시하는 카드 레이아웃을 제공합니다. 구매 버튼도 포함되어
          있어, 사용자가 바로 상품을 구매할 수 있습니다.
        </p>
        <h2 className="text-[#2D3748]">4.1. Import</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardPricing from '@components/Card/CardPricing';`}
          copyText={`import CardPricing from '@components/Card/CardPricing';`}
          language="tsx"
          index={10}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">4.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <CardPricing
            title="Pro Plan"
            description="Access more features with the Pro plan."
            price="$20/month"
            features={[
              "5x more usage",
              "Access to Claude 3 Haiku",
              "Priority access during high-traffic periods",
            ]}
            buy="Subscribe Now"
          />
        </div>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardPricing from '@components/Card/CardPricing';

function Example() {
  return (
    <CardPricing
      title="Pro Plan"
      description="Access more features with the Pro plan."
      price="$20/month"
      features={[
        "5x more usage",
        "Access to Claude 3 Haiku",
        "Priority access during high-traffic periods",
      ]}
      buy="Subscribe Now"
    />
  );
}

export default Example;`}
          copyText={`import CardPricing from '@components/Card/CardPricing';

function Example() {
  return (
    <CardPricing
      title="Pro Plan"
      description="Access more features with the Pro plan."
      price="$20/month"
      features={[
        "5x more usage",
        "Access to Claude 3 Haiku",
        "Priority access during high-traffic periods",
      ]}
      buy="Subscribe Now"
    />
  );
}

export default Example;`}
          language="tsx"
          index={11}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">4.3. Props</h2>
        <p>
          <code>CardPricing</code> 컴포넌트는 아래와 같은 Props를 가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>카드의 제목을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>description</code>
              </td>
              <td>상품 또는 서비스에 대한 설명을 제공합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>price</code>
              </td>
              <td>상품 또는 서비스의 가격을 표시합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>features</code>
              </td>
              <td>상품 또는 서비스의 주요 특징을 리스트 형태로 표시합니다.</td>
              <td>
                <code>string[]</code>
              </td>
              <td>
                <code>[]</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>buy</code>
              </td>
              <td>구매 버튼에 표시될 텍스트를 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">4.4. Full Example</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardPricing from '@components/Card/CardPricing';

function FullExample() {
  return (
    <div>
      <CardPricing
        title="Basic Plan"
        description="Get started with the basic plan."
        price="$10/month"
        features={[
          "2x more usage",
          "Standard access to features",
        ]}
        buy="Get Started"
      />
      <CardPricing
        title="Pro Plan"
        description="Access more features with the Pro plan."
        price="$20/month"
        features={[
          "5x more usage",
          "Access to Claude 3 Haiku",
          "Priority access during high-traffic periods",
        ]}
        buy="Subscribe Now"
      />
      <CardPricing
        title="Enterprise Plan"
        description="Enterprise-grade features for your business."
        price="Contact us"
        features={[
          "Unlimited usage",
          "Dedicated support",
          "Custom integrations",
        ]}
        buy="Contact Sales"
      />
    </div>
  );
}

export default FullExample;`}
          copyText={`import CardPricing from '@components/Card/CardPricing';

function FullExample() {
  return (
    <div>
      <CardPricing
        title="Basic Plan"
        description="Get started with the basic plan."
        price="$10/month"
        features={[
          "2x more usage",
          "Standard access to features",
        ]}
        buy="Get Started"
      />
      <CardPricing
        title="Pro Plan"
        description="Access more features with the Pro plan."
        price="$20/month"
        features={[
          "5x more usage",
          "Access to Claude 3 Haiku",
          "Priority access during high-traffic periods",
        ]}
        buy="Subscribe Now"
      />
      <CardPricing
        title="Enterprise Plan"
        description="Enterprise-grade features for your business."
        price="Contact us"
        features={[
          "Unlimited usage",
          "Dedicated support",
          "Custom integrations",
        ]}
        buy="Contact Sales"
      />
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={12}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}
      </div>

      {/* Card5 */}
      <br />
      <br />
      <div>
        <h1 className="text-[#2D3748]">5. CardReview</h1>
        <p>
          <code>CardReview</code> 컴포넌트는 사용자 리뷰와 함께 사용자 아바타,
          이름, 별점을 표시하는 카드 레이아웃을 제공합니다. 사용자가 남긴 텍스트
          리뷰와 별점을 함께 표시할 수 있습니다.
        </p>
        <h2 className="text-[#2D3748]">5.1. Import</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardReview from '@components/Card/CardReview';`}
          copyText={`import CardReview from '@components/Card/CardReview';`}
          language="tsx"
          index={13}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">5.2. Usage</h2>
        <p>기본 사용 예제는 아래와 같습니다:</p>
        <div style={{ marginBottom: "20px" }}>
          <CardReview avatar="/avatar1.svg" name="John Doe" rate={4}>
            <p>This is an excellent product! Highly recommended.</p>
          </CardReview>
        </div>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardReview from '@components/Card/CardReview';

function Example() {
  return (
    <CardReview avatar="/avatar1.svg" name="John Doe" rate={4}>
      <p>This is an excellent product! Highly recommended.</p>
    </CardReview>
  );
}

export default Example;`}
          copyText={`import CardReview from '@components/Card/CardReview';

function Example() {
  return (
    <CardReview avatar="/avatar1.svg" name="John Doe" rate={4}>
      <p>This is an excellent product! Highly recommended.</p>
    </CardReview>
  );
}

export default Example;`}
          language="tsx"
          index={14}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}

        <h2 className="text-[#2D3748]">5.3. Props</h2>
        <p>
          <code>CardReview</code> 컴포넌트는 아래와 같은 Props를 가집니다:
        </p>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>avatar</code>
              </td>
              <td>리뷰를 작성한 사용자의 아바타 이미지 경로를 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>리뷰를 작성한 사용자의 이름을 지정합니다.</td>
              <td>
                <code>string</code>
              </td>
              <td>
                <code>""</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>rate</code>
              </td>
              <td>사용자가 부여한 별점 (0-5)입니다.</td>
              <td>
                <code>number</code>
              </td>
              <td>
                <code>0</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>children</code>
              </td>
              <td>리뷰 텍스트를 포함할 수 있습니다.</td>
              <td>
                <code>React.ReactNode</code>
              </td>
              <td>
                <code>null</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-[#2D3748]">5.4. Full Example</h2>
        {/* 카피버튼 시작 */}
        <CodeBox
          code={`import CardReview from '@components/Card/CardReview';

function FullExample() {
  return (
    <div>
      <CardReview avatar="/avatar1.svg" name="John Doe" rate={5}>
        <p>Perfect! Exceeded my expectations.</p>
      </CardReview>
      <CardReview avatar="/avatar2.svg" name="Jane Smith" rate={4}>
        <p>Very good, but there's room for improvement.</p>
      </CardReview>
      <CardReview avatar="/avatar3.svg" name="Bob Brown" rate={3}>
        <p>It's okay, not the best I've used.</p>
      </CardReview>
    </div>
  );
}

export default FullExample;`}
          copyText={`import CardReview from '@components/Card/CardReview';

function FullExample() {
  return (
    <div>
      <CardReview avatar="/avatar1.svg" name="John Doe" rate={5}>
        <p>Perfect! Exceeded my expectations.</p>
      </CardReview>
      <CardReview avatar="/avatar2.svg" name="Jane Smith" rate={4}>
        <p>Very good, but there's room for improvement.</p>
      </CardReview>
      <CardReview avatar="/avatar3.svg" name="Bob Brown" rate={3}>
        <p>It's okay, not the best I've used.</p>
      </CardReview>
    </div>
  );
}

export default FullExample;`}
          language="tsx"
          index={15}
          copied={copied}
          handleCopy={handleCopy}
        />
        {/* 카피버튼 끝 */}
      </div>
    </div>
  );
};

export default CardExample;
