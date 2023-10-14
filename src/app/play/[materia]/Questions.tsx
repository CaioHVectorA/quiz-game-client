"use client"
import { API_URL } from '../../../util/consts'
import { AppContext } from '../../../components/Context/AppContext'
import React, { useContext, useEffect, useState } from "react";
import { Answer, IQuestion } from "../../../entities/Question";
import Button from '../../../components/Button'
import axios from 'axios';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
export default function Questions({ data }: {data: IQuestion}) {
    const { setNavBarActive, userData, setPlayeds,playeds } = useContext(AppContext)
    const [time, setTime] = useState(60)
    const [submited, setSubmited] = useState(false)
    useEffect(() => {
        setNavBarActive(false)
        const interval = setInterval(() => {
            setTime(prevState => prevState - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    useEffect(() => {
        if (time < 0) setSubmited(true)
    }, [time])
        useEffect(() => {
        if (!playeds) return
        if (playeds.includes(data.type)) {setSubmited(true) ; setNavBarActive(true)}
        }, [playeds])
    return (
        <main className=" h-screen flex flex-col w-screen relative items-center p-8 justify-center">
            {submited && <Link onClick={() => setNavBarActive(true)} href={'/play/'} className=" absolute cursor-pointer text-2xl top-4 left-12 bg-zinc-400 p-3 rounded-full">
                <BiArrowBack />
            </Link>}
            {!submited && <p className=" absolute text-2xl top-4 right-12 bg-zinc-400 p-3 rounded-full">{time}</p>}
            <small className=" opacity-40">{data.type}</small>
            <h1 className=" text-4xl w-10/12 text-center">{data.body}</h1>
            <ul className=" flex flex-col gap-4 mt-4">
            {/* @ts-ignore */}
            {JSON.parse(data.answers).map((answer: Answer) => (
                <li className=" flex">
                    <Button onClick={() => {
                        console.log(userData, submited)
                        if (submited || !userData) return
                        setSubmited(true)
                        if (!playeds) setPlayeds([])
                        setPlayeds(prevState => [...prevState, data.type])
                        setNavBarActive(true)
                        if (answer.isCorrect) {
                            const pontuation = 5 * (time / 10)
                            console.log(pontuation)
                            axios.put(API_URL+'user/pontuation/'+userData.id,{
                                type: data.type,
                                quantity: pontuation
                            }).then(res => console.log(res.data)).catch(err => console.log(err))
                        }
                    }} style={{width: '600px', background: submited ? answer.isCorrect ? 'green' : 'red' : ''}}>
                        {answer.body}
                    </Button>
                </li>
                ))}
            </ul>
        </main>
    )
}