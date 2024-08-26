import "../globals.css";
import "../markdown.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed z-10 h-[90px] w-full bg-red-200">상단바</header>
      <section className="fixed z-0 mt-[90px] h-[calc(100%-90px)] w-[300px] bg-blue-200">
        menu
      </section>
      <div className="ml-[300px] flex justify-center pt-[90px]">
        <div className="w-[1000px] bg-yellow-200">{children}</div>
      </div>
    </>
  );
}
