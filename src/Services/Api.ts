const api = (query: string) => {
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const token = 'bf744400bcef20e73e8dafe67ee208e774805c76';

    const options = {
        method: 'POST',
        mode: 'cors' as RequestMode,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({ query: query })
    }

    return fetch(url, options)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));    
}

export { api };