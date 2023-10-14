import Button from "@/components/Button"
import Link from "next/link"
import React from "react"
export default function Play() {
    return (
        <main className=" h-screen flex px-32 pt-16 flex-col items-center bg-gradient-to-br from-gray-700 via-black to-black text-white">
            <h1 className=" text-3xl text-center">Clique em uma das matérias e tente acertar a pergunta para <b>ganhar pontos e subir no ranking</b>!</h1>
            <h2 className=" text-2xl mt-8">Atenção: Assim que entrar, <b>você não poderá sair!</b></h2>
            <p className=" w-6/12 mt-8 text-center text-xl">Você tem <b>60 segundos</b> para responder. Quanto mais rápido responder, mais pontos você ganha, podendo os multiplicar em até 6x! Caso não consiga responder a tempo, você perde.</p>
            <p className=" w-6/12 mt-8 text-center text-xl">As perguntas são diárias, ou seja, elas mudam diariamente. Portanto, você só pode responder uma pergunta de cada matéria.</p>
            <Link href={'/home'} className=" mt-16">
                <Button>Voltar para o menu inicial</Button>
            </Link>
        </main> 
    )
}