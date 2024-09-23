interface DataTableBasicProp {
    data: Array<{
        [key: string]: string | number;
    }>;
    thColor?: "White" | "Blue" | "Gray" | "Purple" | "Green" | "Yellow" | "Red" | "Dark" | "Navy";
    tdColor?: "White" | "Basic" | "Primary" | "Gray" | "Secondary" | "Success" | "Warning" | "Danger";
}
declare const DataTableBasic: ({ data, thColor, tdColor, }: DataTableBasicProp) => import("react").JSX.Element;
export default DataTableBasic;
