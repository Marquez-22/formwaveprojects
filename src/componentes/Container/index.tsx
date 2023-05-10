import { type } from "os"
import { ReactNode } from "react"

type ContainerType ="Container"


interface ContainerProps {
    type?:ContainerType
    children:ReactNode

} 

export const Container=({children, type="Container"}:ContainerProps)=>{
    return(<>
    <div className={`Container ${type} `}>
        {children}

    </div>


    </>)
}