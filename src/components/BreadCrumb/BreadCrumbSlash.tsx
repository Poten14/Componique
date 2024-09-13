interface BreadCrumbProp {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

interface BreadCrumbProps {
  items: BreadCrumbProp[];
}

const BreadCrumbSlash = ({ items }: BreadCrumbProps) => {
  return (
    <div className="flex">
      <div className="inline-flex items-center space-x-1">
        {items.map((item, index) => (
          <div key={index} className="inline-flex items-center">
            {index !== 0 && <span className="mx-2 text-gray">/</span>}
            {item.href ? (
              <a
                href={item.href}
                className={`text-md font-medium text-gray hover:text-black dark:text-gray dark:hover:text-white ${item.className}`}
              >
                {item.children}
              </a>
            ) : (
              <span
                className={`text-md font-medium text-black hover:text-black dark:text-gray dark:hover:text-white ${item.className}`}
                aria-current="page"
              >
                {item.children}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumbSlash;
