type queryType = {
    value: string;
    unrestricted_value: string;
    data: Record<string, string | null>
}

export type SearchResulType = {
    suggestions: queryType[] | [];
}
