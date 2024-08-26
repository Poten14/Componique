"use client";
import ToastGroup from "@components/Toast/ToastGroup";
import { useState } from "react";
const page = () => {
  // 초기값은 true로 설정해서 ToastGroup이 렌더링되도록 함
  const [showToastGroup, setShowToastGroup] = useState(true);

  // 모든 Toast가 닫혔을 때 호출되는 함수
  const allToastsCloseHandler = () => {
    // 모든 Toast가 닫힌 후 ToastGroup을 제거하기 위해 상태를 false로 변경
    setShowToastGroup(false);
  };
  return (
    <>
      <div className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nisl
        tincidunt arcu volutpat interdum. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Donec at nulla vitae libero lobortis maximus
        id a magna. Phasellus consequat in tortor nec viverra. In lacinia magna
        sed viverra gravida. Aenean convallis odio sed mauris sodales suscipit.
        Cras tempor nisi a dapibus fringilla. Proin at convallis odio. Proin non
        felis metus. Suspendisse ac augue efficitur, ultrices massa quis,
        scelerisque purus. Ut aliquet nisi imperdiet neque blandit, ac commodo
        tellus egestas. Vivamus suscipit, purus ac convallis tincidunt, nulla
        est pharetra arcu, id iaculis orci felis non ligula. Nulla eros ligula,
        molestie at arcu eget, eleifend pulvinar arcu. Nulla elementum dignissim
        ante, et vehicula massa malesuada et. Fusce tristique, lacus vitae
        ultrices ullamcorper, tellus ex bibendum lectus, ut rutrum metus libero
        eget orci. Nullam auctor consectetur ex sit amet volutpat. Nullam
        maximus dapibus tellus. Maecenas at justo in massa ultrices eleifend vel
        ut erat. Quisque vestibulum erat sed accumsan auctor. Aenean vitae nisi
        eleifend, ultricies tellus non, mattis turpis. In viverra at nisl in
        molestie. Donec interdum tellus sit amet sapien tempus, vel rhoncus elit
        dignissim. In hac habitasse platea dictumst. Vivamus quis mauris risus.
        Cras vitae lorem vel mauris feugiat placerat eu id arcu. Nulla finibus
        tellus id mauris fermentum convallis. Donec vel convallis nulla. Nullam
        feugiat tincidunt imperdiet. Phasellus convallis lacinia sapien vel
        bibendum. Nullam fringilla ante ac risus bibendum facilisis. Proin quis
        tincidunt quam, quis venenatis orci. Phasellus at justo nunc. Praesent
        accumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec
        leoccumsan non nulla laoreet dictum. In ut nunc consequat, bibendum enim
        ac, vehicula nunc. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Integer vitae odio arcu. Maecenas
        lobortis nisl in leo dictum rutrum. Curabitur convallis felis sit amet
        pulvinar maximus. Sed hendrerit laoreet leo. Pellentesque tempus nec leo
        id vehicula. Curabitur fermentum tellus a augue commodo, sed imperdiet
        urna suscipit. Sed tortor purus, ornare eu viverra sed, placerat vitae
        risus. Fusce sem ipsum, malesuada quis metus sit amet, consectetur
        lobortis enim. Ut eleifend vulputate lorem eget ullamcorper. Cras sit
        amet urna ultricies, gravida libero non, maximus arcu. Curabitur eu sem
        eget velit aliquet sagittis. Morbi cursus sodales vehicula. Phasellus
        faucibus arcu nisl, vitae dapibus lectus gravida ut. Integer vestibulum
        mollis orci, vel feugiat mauris eleifend eget. Duis lacinia neque in
        feugiat laoreet. Aliquam eu leo ac arcu pulvinar placerat at ut mi.
        Praesent vulputate turpis gravida nisi condimentum, ac gravida orci
        semper. Aliquam sodales eros et faucibus efficitur. Cras eget posuere
        turpis. Proin elementum gravida enim vitae cursus. Aliquam erat
        volutpat. Vestibulum nunc nibh, interdum vitae pellentesque ut, cursus
        id nulla. Nulla malesuada arcu eget sollicitudin consequat. Ut sagittis
        pharetra lectus quis auctor. Quisque porttitor eros placerat velit
        placerat, in hendrerit purus blandit.
      </div>
      <ToastGroup
        position="rightTop"
        //모든 Toast가 닫혔을 때 호출되는 함수 전달
        onAllClosed={allToastsCloseHandler}
        toasts={[
          {
            children: "가입이 완료되었습니다.",
            time: "5",
            color: "yellow",
            variant: "border",
          },
          {
            children: "로그인으로 이동합니다.",
            time: "6",
            color: "success",
            size: "large",
            variant: "border",
            path: "/login",
          },
          {
            children: "로그아웃 되었습니다.",
            time: "7",
            color: "blue",
            size: "medium",
            variant: "solid",
            isProgress: false,
          },
          {
            children: "종료 되었습니다.",
            time: "8",
            color: "red",
            size: "small",
            variant: "border",
          },
        ]}
      />
    </>
  );
};
export default page;
