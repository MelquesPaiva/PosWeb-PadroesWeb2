import axios from 'axios'

const favoriteApi = axios.create({baseURL: 'http://localhost:8000/favoritos'})

async function getFavorites() {
    const response = await favoriteApi.get('/')
    return response.data
}

async function postFavorite(id) {
    let message = ''
    await favoriteApi.post(`/${id}`)
        .then (data => message = data) // sucesso
        .catch (err => message = err.message) // error
    return message
}

async function deleteFavorite(id) {
    const response = await favoriteApi.delete(`/${id}`)
    return response.data
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite,
}
