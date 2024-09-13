interface BreadCrumbProp {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

interface BreadCrumbProps {
  items: BreadCrumbProp[];
}

const BreadCrumb = ({ items }: BreadCrumbProps) => {
  return (
    <div className="flex">
      <div className="inline-flex items-center space-x-1">
        {items.map((item, index) => (
          <div key={index} className="inline-flex items-center">
            {index !== 0 && (
              <svg
                className="h-5 w-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
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

export default BreadCrumb;
