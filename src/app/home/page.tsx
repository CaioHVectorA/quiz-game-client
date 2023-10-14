import React from "react"
import Button from '../../components/Button'
import Link from "next/link"
export default function HomePage() {
    return (
        <main className="flex flex-col w-full h-screen items-center justify-center gap-4 bg-gradient-to-br to-gray-700 via-black from-black">
            <h1 className=" text-4xl mb-6 text-white">DayQuiz</h1>
            <Link href={'/play'}>
                <Button style={{width: '300px'}}>
                    Jogar
                </Button>
            </Link>
            <Link href={'/ranking'}>
                <Button style={{width: '300px', opacity: '0.9'}}>
                    Ver ranking
                </Button>
            </Link>
        </main>
    )
}