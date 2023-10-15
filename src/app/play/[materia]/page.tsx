import React from "react"

import { API_URL } from '../../../util/consts'
import axios from "axios"
import Questions from "./Questions"

export default async function QuestionPage({params}: { params: { materia: string } }) {
    console.log(API_URL+'questions/'+params.materia.toLowerCase())
    const data = await (await axios.get(API_URL+'questions/'+params.materia.toLowerCase()))?.data
    if (!data) return <div className=" h-screen w-screen flex items-center justify-center"><h1 className="text-4xl">Ocorreu um erro.</h1></div>
    return (
        <Questions data={data}/>
    )
}