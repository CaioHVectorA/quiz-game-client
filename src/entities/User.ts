export type User = {
    id: string,
    username: string,
    playeds: string[],
    pontuation: {
        id: number,
        type: string,
        quantity: number,
        userId: string,
    }[]
}