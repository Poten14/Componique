import React from "react";
import { Size } from "types/type";
type NavbarSearchProps = {
    name: string;
    id: string;
    maxLength: number;
    size?: Size;
    placeholder: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const NavbarSearch: ({ name, id, maxLength, size, placeholder, type, value, onChange, ...props }: NavbarSearchProps) => React.JSX.Element;
export default NavbarSearch;
