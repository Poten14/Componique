interface CalendarProps {
    onDateSelect?: (startDate: Date, endDate: Date) => void;
}
declare const CalendarRange: ({ onDateSelect }: CalendarProps) => import("react").JSX.Element;
export default CalendarRange;
