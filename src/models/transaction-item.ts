export type TransactionItem = {
    id: number,
    date: Date,
    value: number,
    isEntry: boolean,
    from: string,
    place: string
}