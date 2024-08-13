
import Card1 from "@components/Card/Card1";
import Card2 from "@components/Card/Card2";
import Card3 from "@components/Card/Card3";
import Card4 from "@components/Card/Card4";
const page = () => {
  return (
    <div>
      <Card1
        title="Next.js"
        description="Next.js is a React framework for building full-stack web applications."
      />
      <Card2

        title="Next.js_expand Card"
        description="Next.js is a React framework for building full-stack web applications."
        detail="You use React Components to build user interfaces, and Next.js for additional features and optimizations."
      />
      <Card3
        title="Image Card_Vertical"
        description="You can add image or icon to this card component😊"
        image="/componique_logo.svg"
      />

      <Card4
        title="📝Pro Plan"
        description="You can access more features."
        price="$20/month"
        features={[
          "Level up your Claude usage with 5x more usage versus Free plan",
          "Access to Claude 3 Haiku, our fastest model, and Claude 3 Opus",
          "Create Projects to work with Claude around a set of docs, code, or files",
          "Priority access during high-traffic periods",
          "Early access to new features",
        ]}
        buy="Subscribe to Pro"
      />

    </div>
  );
};
export default page;
