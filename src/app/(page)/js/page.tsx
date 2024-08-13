import Card1 from "@/components/Card/Card1";
import Card2 from "@/components/Card/Card2";
const page = () => {
  return (
    <div>
      <Card1
        title="Next.js"
        description="Next.js is a React framework for building full-stack web applications."
      />
      <Card2
        title="Next.js"
        description="Next.js is a React framework for building full-stack web applications."
        detail="You use React Components to build user interfaces, and Next.js for additional features and optimizations."
      />
    </div>
  );
};
export default page;
