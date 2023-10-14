import { ReactNode } from "react"

export type setState<T> = React.Dispatch<React.SetStateAction<T>>
export type children = { children: ReactNode }