const Badge = ({ type = 'basic', content, icon, color = 'bg-blue-500', textColor = 'text-white' }) => {
    switch (type) {
        case 'icon':
            return (<span className={`inline-flex dark:border-[#dcdcdc] border-2 items-center px-2 py-1 ${color} ${textColor} dark:bg-[#1C2127] text-xs font-semibold rounded-full`}>
          {icon}
          {content && <span className="ml-1">{content}</span>}
        </span>);
        case 'counter':
            return (<span className={`inline-flex dark:border-[#dcdcdc] border-2 items-center justify-center px-2 py-1 ${color} ${textColor} text-xs font-semibold dark:bg-[#1C2127] rounded-full`}>
          {content}
        </span>);
        case 'dot':
            return (<span className={`inline-flex   ${color} w-2 h-2 rounded-full`}>
        </span>);
        case 'basic':
        default:
            return (<span className={`inline-flex dark:border-[#dcdcdc] border-2 dark:bg-[#1C2127] items-center px-2 py-1 ${color} ${textColor} text-xs font-semibold rounded-full`}>
          {content}
        </span>);
    }
};
export default Badge;
