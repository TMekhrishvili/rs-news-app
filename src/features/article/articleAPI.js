import axios from 'axios';

export const fetchArticles = title => {
    const url = `/v2/everything?qInTitle='${title}'`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(value => resolve(value))
            .catch(error => reject(error))
    })
}