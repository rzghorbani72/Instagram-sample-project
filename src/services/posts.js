
import service from './Api'

export function fetchPostsFromApi() {
    return service.get('/posts')
}

export function createtPostInAPI(payload) {
    return service.post('/posts', payload)
}