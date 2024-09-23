interface CalendarProps {
    onDateSelect?: (date: Date) => void;
    defaultValue?: Date;
}
declare const Calendar: ({ onDateSelect, defaultValue }: CalendarProps) => import("react").JSX.Element;
export default Calendar;
