import React from 'react'
import { children } from '../../util/handleTypes'
import Button from '../Button'
export default function FormRoot({ children }: children) {
    return (
        <div className="w-80 rounded-2xl bg-slate-900">
        <div className="flex flex-col gap-2 p-8">
        {children}
        </div>
    </div>
    )
}