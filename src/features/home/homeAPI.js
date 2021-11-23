import axios from 'axios';

export const fetchArticles = searchText => {
    const url = `/v2/everything?q=${searchText}`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(value => resolve(value))
            .catch(error => reject(error))
    })
}