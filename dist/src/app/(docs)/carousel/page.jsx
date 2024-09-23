"use client";
import React, { useState } from "react";
import Carousel from "@components/Carousel/Carousel";
import CodeBox from "@components/CodeBox";
import CarouselAutoplay from "@components/Carousel/CarouselAutoplay";
import CarouselDots from "@components/Carousel/CarouselDots";
const CarouselDocs = () => {
    const [copied, setCopied] = useState({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">1. Carousel</h1>
      <p>
        <code>Carousel</code> 컴포넌트는 여러 이미지를 슬라이드 방식으로
        보여주는 기능을 제공합니다. 사용자는 이전, 다음 버튼을 사용해 이미지를
        전환할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">1.1. Import</h2>
      <CodeBox code={`import Carousel from '@components/Carousel';`} copyText={`import Carousel from '@components/Carousel';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <Carousel images={[
            "images/image1.svg",
            "images/image2.svg",
            "images/image3.svg",
        ]}/>
      </div>
      <CodeBox code={`import Carousel from '@components/Carousel';

function Example() {
  return <Carousel images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} />;
}

export default Example;`} copyText={`import Carousel from '@components/Carousel';

function Example() {
  return <Carousel images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} />;
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.3. Customization</h2>
      <p>
        <code>Carousel</code> 컴포넌트는 다양한 이미지 배열을 제공하며, 필요에
        따라 슬라이드 전환을 위한 추가 설정을 쉽게 변경할 수 있습니다.
      </p>

      <div className="my-7">
        <Carousel images={[
            "images/image1.svg",
            "images/image2.svg",
            "images/image3.svg",
            "images/image4.svg",
        ]}/>
      </div>

      <CodeBox code={`import Carousel from '@components/Carousel';

function Example() {
  return (
    <Carousel 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
    />
  );
}

export default Example;`} copyText={`import Carousel from '@components/Carousel';

function Example() {
  return (
    <Carousel 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
    />
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">1.4. Props</h2>
      <p>
        <code>Carousel</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>images</code>
            </td>
            <td>슬라이드에 표시될 이미지 경로들의 배열을 설정합니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">1.5. Full Example</h2>
      <CodeBox code={`import Carousel from '@components/Carousel';

function Example() {
  return (
    <div>
      <Carousel 
        images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
      />
    </div>
  );
}

export default Example;`} copyText={`import Carousel from '@components/Carousel';

function Example() {
  return (
    <div>
      <Carousel 
        images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]} 
      />
    </div>
  );
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">2. CarouselAutoplay</h1>
      <p>
        <code>CarouselAutoplay</code> 컴포넌트는 여러 이미지를 슬라이드 방식으로
        자동 재생 기능과 함께 보여줍니다. 사용자는 이전, 다음 버튼을 사용해
        이미지를 수동으로 전환할 수 있으며, 자동 재생 기능도 포함되어 있습니다.
      </p>

      <h2 className="text-[#2D3748]">2.1. Import</h2>
      <CodeBox code={`import CarouselAutoplay from '@components/CarouselAutoplay';`} copyText={`import CarouselAutoplay from '@components/CarouselAutoplay';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <CarouselAutoplay images={[
            "images/image1.svg",
            "images/image2.svg",
            "images/image3.svg",
        ]}/>
      </div>
      <CodeBox code={`import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} 
    />
  );
}

export default Example;`} copyText={`import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]} 
    />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.3. Customization</h2>
      <p>
        <code>CarouselAutoplay</code> 컴포넌트는 자동 재생 기능과 슬라이드 전환
        간격을 조정할 수 있습니다. 사용자는 <code>autoplay</code>와{" "}
        <code>interval</code> props를 통해 이 기능을 제어할 수 있습니다.
      </p>

      <div className="my-7">
        <CarouselAutoplay images={[
            "images/image1.svg",
            "images/image2.svg",
            "images/image3.svg",
            "images/image4.svg",
        ]} autoplay={true} interval={3000}/>
      </div>

      <CodeBox code={`import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]}
      autoplay={true}
      interval={3000} 
    />
  );
}

export default Example;`} copyText={`import CarouselAutoplay from '@components/CarouselAutoplay';

function Example() {
  return (
    <CarouselAutoplay 
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg", "images/image4.svg"]}
      autoplay={true}
      interval={3000} 
    />
  );
}

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">2.4. Props</h2>
      <p>
        <code>CarouselAutoplay</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>images</code>
            </td>
            <td>슬라이드에 표시될 이미지 경로들의 배열을 설정합니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>autoplay</code>
            </td>
            <td>자동 재생 기능을 활성화할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>interval</code>
            </td>
            <td>슬라이드 전환 간격(밀리초)을 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>2000</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">2.5. Full Example</h2>
      <CodeBox code={`import CarouselAutoplay from '@components/CarouselAutoplay';

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

export default Example;`} copyText={`import CarouselAutoplay from '@components/CarouselAutoplay';

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

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
      <hr />
      <h1 className="text-[#2D3748]">3. CarouselDots</h1>
      <p>
        <code>CarouselDots</code> 컴포넌트는 이미지 슬라이드 기능을 제공하며,
        하단에 페이지네이션을 위한 점(dot)을 표시할 수 있습니다. 사용자는 이전,
        다음 버튼을 통해 슬라이드를 전환할 수 있으며, 자동 재생 기능도
        제공합니다.
      </p>

      <h2 className="text-[#2D3748]">3.1. Import</h2>
      <CodeBox code={`import CarouselDots from '@components/CarouselDots';`} copyText={`import CarouselDots from '@components/CarouselDots';`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div className="my-7">
        <CarouselDots images={[
            "images/image1.svg",
            "images/image2.svg",
            "images/image3.svg",
        ]}/>
      </div>
      <CodeBox code={`import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <CarouselDots
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]}
    />
  );
}

export default Example;`} copyText={`import CarouselDots from '@components/CarouselDots';

function Example() {
  return (
    <CarouselDots
      images={["images/image1.svg", "images/image2.svg", "images/image3.svg"]}
    />
  );
}

export default Example;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.3. Customization</h2>
      <p>
        <code>CarouselDots</code> 컴포넌트는 자동 재생, 슬라이드 간격 조정 등
        다양한 설정을 지원합니다. 필요에 따라 이러한 옵션들을 커스터마이즈할 수
        있습니다.
      </p>

      <div className="mb-7">
        <CarouselDots images={[
            "images/image1.svg",
            "images/image2.svg",
            "images/image3.svg",
            "images/image4.svg",
        ]} autoplay={true} interval={3000}/>
      </div>

      <CodeBox code={`import CarouselDots from '@components/CarouselDots';

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

export default Example;`} copyText={`import CarouselDots from '@components/CarouselDots';

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

export default Example;`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      <h2 className="text-[#2D3748]">3.4. Props</h2>
      <p>
        <code>CarouselDots</code> 컴포넌트는 아래와 같은 Props를 가집니다:
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
              <code>images</code>
            </td>
            <td>슬라이드에 표시될 이미지 경로들의 배열을 설정합니다.</td>
            <td>
              <code>string[]</code>
            </td>
            <td>
              <code>[]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>showDots</code>
            </td>
            <td>하단에 슬라이드 점(dot)을 표시할지 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>true</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>autoplay</code>
            </td>
            <td>슬라이드의 자동 전환 여부를 설정합니다.</td>
            <td>
              <code>boolean</code>
            </td>
            <td>
              <code>false</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>interval</code>
            </td>
            <td>자동 전환 시 슬라이드 간격을 밀리초 단위로 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>2000</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-[#2D3748]">3.5. Full Example</h2>
      <CodeBox code={`import CarouselDots from '@components/CarouselDots';

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

export default Example;`} copyText={`import CarouselDots from '@components/CarouselDots';

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

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
export default CarouselDocs;
