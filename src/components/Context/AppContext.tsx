"use client"
import { createContext, useEffect, useState } from "react";
import { setState, children } from '../../util/handleTypes'
import { User } from "../../entities/User";
import { getLocalStorage, saveLocalStorage } from "@/util/handleLocalStorage";
import { API_URL, LOCAL_STORAGE } from "@/util/consts";
import { useRouter } from 'next/navigation'
import axios from "axios";


type AppContextProps = {
    userData: User | null
    setUserData: setState<User | null>
    navBarActive: boolean,
    setNavBarActive: setState<boolean>
    playeds: string[]
    setPlayeds: setState<string[]>
}
export const AppContext = createContext<AppContextProps>({
    userData: null,
    setUserData: () => {},
    navBarActive: true,
    setNavBarActive: () => {},
    playeds: [],
    setPlayeds: () => {} 
})


export function AppContextProvider({ children }: children) {
    const [userData, setUserData] = useState<User | null>(getLocalStorage(LOCAL_STORAGE.USER_CACHE) || null)
    const [navBarActive, setNavBarActive] = useState<boolean>(true)    
    const [playeds, setPlayeds] = useState<string[]>([])    
    const nav = useRouter()
    useEffect(() => {
    if (!userData) {return nav.push("/")}
    setPlayeds(userData.playeds)
    }, [userData])
    useEffect(() => {
        if (!userData) return
        axios.get(API_URL+'user/'+userData.id).then(({data}) => {
            console.log(data)
            setUserData(data)
            saveLocalStorage(LOCAL_STORAGE.USER_CACHE,data)
            setPlayeds(data.players)
            
        })
    }, [])
    return (
        <AppContext.Provider value={{setUserData,userData, navBarActive, setNavBarActive, playeds, setPlayeds}}>
            {children}
        </AppContext.Provider>
    )
}