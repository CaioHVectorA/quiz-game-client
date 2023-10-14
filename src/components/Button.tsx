import React, { ButtonHTMLAttributes, ComponentPropsWithoutRef, DetailedHTMLProps, FC, ForwardedRef, HTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}
const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return <button {...rest} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">{children}</button>
}

export default Button