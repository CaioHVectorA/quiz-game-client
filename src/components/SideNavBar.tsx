"use client"
import React, { ReactNode, useContext } from "react"
import { FaPeopleArrows } from 'react-icons/fa'
import { BiMath } from 'react-icons/bi'
import { MdScience } from 'react-icons/md'
import { AiOutlineQuestion } from 'react-icons/ai'
import Link from "next/link"
import { IconType } from "react-icons"
import { AppContext } from "./Context/AppContext"
export default function SideBar() {
    const { navBarActive } = useContext(AppContext)
    const materias: { href: string, text: string, Icon: IconType }[] = [
        { href: 'social', text: 'Sociais', Icon: FaPeopleArrows },
        { href: 'math', text: 'Matemática', Icon: BiMath },
        { href: 'nature', text: 'Ciências', Icon: MdScience },
        { href: 'others', text: 'Gerais', Icon: AiOutlineQuestion }
    ]
    return (
        <aside className={" fixed right-0 z-10 border-1 border-gray border-solid shadow-md rounded-l-md" + (navBarActive ? ' z-10' : ' opacity-20 -z-10')} style={{top: '50%',transform: 'translateY(-50%)'}}>
            <nav>
                <ul className=" flex flex-col">
                    {materias.map(({href,Icon,text}) => (
                        <li className=" text-white">
                            <Link href={'/play/'+href} className={" flex flex-col py-8 justify-center px-6 items-center border-b border-b-gray border-solid"+` bg-${href.toLowerCase()} bg-opacity-80 hover:bg-opacity-100 transition-all`}>
                                <Icon />
                                <p>{text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}