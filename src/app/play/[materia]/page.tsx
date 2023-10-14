import React from "react"

import { API_URL } from '../../../util/consts'
import axios from "axios"
import Questions from "./Questions"

export default async function QuestionPage({params}: { params: { materia: string } }) {
    const data = await (await axios.get(API_URL+'questions/'+params.materia.toUpperCase())).data
    return (
        <Questions data={data}/>
    )
}