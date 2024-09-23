const hoverColorClasses = {
    black: "hover:text-black dark:hover:text-white",
    Basic: "hover:text-[#9AC5E5] dark:hover:text-[#9AC5E5]",
    Primary: "hover:text-[#7AA7FF] dark:hover:text-[#7AA7FF]",
    Danegr: "hover:text-[#FF7676] dark:hover:text-[#FF7676]",
};
const activeColorClasses = {
    black: "text-black dark:text-white",
    Basic: "text-[#9AC5E5] dark:text-[#9AC5E5]",
    Primary: "text-[#7AA7FF] dark:text-[#7AA7FF]",
    Danegr: "text-[#FF7676] dark:text-[#FF7676]",
};
const BreadCrumbSlash = ({ items, hoverColor = "black", activeColor = "black", }) => {
    return (<div className="flex">
      <div className="inline-flex items-center space-x-1">
        {items.map((item, index) => (<div key={index} className="inline-flex items-center">
            {index !== 0 && <span className="mx-2 text-[#808080]">/</span>}
            {item.href ? (<a href={item.href} className={`text-md font-medium text-gray dark:text-gray ${hoverColorClasses[hoverColor]} ${item.className}`}>
                {item.children}
              </a>) : (<span className={`text-md font-medium dark:text-gray ${activeColorClasses[activeColor]} ${item.className}`} aria-current="page">
                {item.children}
              </span>)}
          </div>))}
      </div>
    </div>);
};
export default BreadCrumbSlash;
