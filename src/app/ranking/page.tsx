import { User } from "@/entities/User"
import { API_URL } from "@/util/consts"
import axios from "axios"
import React from "react"
export default async function RankingPage() {
    const data = await (await fetch(API_URL+'user',{cache: "no-cache", next: {revalidate: 5}})).json() as User[]
    return (
    <main className=" p-8 flex flex-col w-screen items-center min-h-screen animate-[rotateGradient_55s_ease_infinite_alternate_forwards]">
        <ul className=" flex flex-col px-8 py-6 gap-6 w-8/12 border border-black bg-gradient-to-r from-gray-700 via-black to-black rounded-3xl">
            {data.map((User, index) => (<li className=" flex w-full">
                <div className=" flex w-4/12 gap-8 items-center">
                    <p className=" text-xl">{index + 1}</p>
                    <hr className="w-0.5 h-full bg-white border-t-0 bg-opacity-40 rounded-full"/>
                    <p className="text-2xl">{User.username.length > 8 ? User.username.split('').slice(0,8).join("") + '...' : User.username}</p>
                </div>
                <div className=" flex w-8/12 gap-6">
                    {User.pontuation.sort((a, b) => a.type.localeCompare(b.type, 'en', { sensitivity: 'base' })).map(pont => (
                        <div className={`bg-${pont.type.toLowerCase()} p-1 rounded-full h-12 w-12 flex items-center justify-center text-white`}>
                            <p>{pont.quantity}</p>
                        </div>
                    ))}
                    <div className=" flex flex-1 justify-end">
                        <p className=" p-2 flex text-white text-xl bg-black">Total | {User.pontuation[0].quantity + User.pontuation[1].quantity + User.pontuation[2].quantity + User.pontuation[3].quantity}</p>
                    </div>
                </div>
            </li>))}
        </ul>
    </main>
    )
}