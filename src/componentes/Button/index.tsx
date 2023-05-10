import { ReactNode } from "react"

type ButtonType = "Button"

interface ButtonProps {
    type?: ButtonType
    children?: ReactNode
    className?: string


}

export const Button = ({ type = "Button", children, className = "" }: ButtonProps) => {
    return (<>
        <button className={`button ${type} ${className}`}>
            {children}
        </button>
    </>)
}