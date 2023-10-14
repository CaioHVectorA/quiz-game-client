import React from 'react'
import { setState } from '../../util/handleTypes'

export default function FormInput({ value, setValue, placeholder }: { value: string, setValue: setState<string>, placeholder: string }) {
    return (
        <input
        type={placeholder === 'Senha' ? 'password' : 'text'}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className="bg-slate-900 text-white w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" 
        placeholder={placeholder} />
    )
}