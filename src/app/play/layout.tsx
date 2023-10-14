import React, { useContext } from 'react'
import { children } from '../../util/handleTypes'
import SideBar from '../../components/SideNavBar'
import { AppContext } from '@/components/Context/AppContext'
export default function PlayLayout({ children }: children) {
    return (
        <>
        <SideBar />
        <div className=' pr-36'>
            {children}
        </div>
        </>
    )
}