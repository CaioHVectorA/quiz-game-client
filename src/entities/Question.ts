export type Answer = {
    char: 'A' | 'B' | 'C' | 'D' | 'E',
    body: string,
    isCorrect: boolean
}

export type IQuestion = {
    id?: number
    type: 'SOCIAL' | 'MATH' | 'NATURE' | 'OTHERS',
    body: string,
    answers: Answer[],
    date: Date
}