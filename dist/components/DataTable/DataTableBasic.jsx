"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataTableBasic = ({ data, thColor = "White", tdColor = "White", }) => {
    const col = data.length > 0 ? Object.keys(data[0]) : [];
    // Tailwind 색상 매핑 객체 (다크 모드 포함)
    const colorClassMap = {
        White: "bg-white dark:bg-gray-300", // White 색상 추가
        Blue: "bg-Blue dark:bg-blue-900",
        Gray: "bg-Gray dark:bg-gray-700",
        Purple: "bg-Purple dark:bg-purple-800",
        Green: "bg-Green dark:bg-green-800",
        Yellow: "bg-Yellow dark:bg-yellow-700",
        Red: "bg-Red dark:bg-red-800",
        Dark: "bg-Dark dark:bg-gray-900",
        Navy: "bg-Navy dark:bg-blue-800",
        Basic: "bg-Basic dark:bg-gray-800",
        Primary: "bg-Primary dark:bg-blue-700",
        Secondary: "bg-Secondary dark:bg-indigo-800",
        Success: "bg-Success dark:bg-green-700",
        Warning: "bg-Warning dark:bg-yellow-800",
        Danger: "bg-Danger dark:bg-red-700",
    };
    return (<div className="overflow-x-auto dark:text-white">
      <table className="min-w-full border-collapse dark:border-[#3D4250] dark:bg-[#2A2E39]">
        <thead>
          <tr>
            {/* 제목 */}
            {col.map((header) => (<th className={`border px-4 py-2 text-center font-bold dark:text-white ${colorClassMap[thColor] || "bg-white"}`} key={header}>
                {header}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {/* 내용 */}
          {data.map((row, index) => (<tr key={index}>
              {col.map((content) => (<td className={`border px-4 py-2 text-center dark:text-white ${colorClassMap[tdColor] || "bg-white"}`} key={content}>
                  {row[content]}
                </td>))}
            </tr>))}
        </tbody>
      </table>
    </div>);
};
exports.default = DataTableBasic;
