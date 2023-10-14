//@ts-nocheck
export function getLocalStorage(key) {
    if (typeof window === 'undefined') return null
    return JSON.parse(localStorage.getItem(key))
}

export function saveLocalStorage(key, value) {
    if (typeof window === 'undefined') return null
    localStorage.setItem(key, JSON.stringify(value))
}