export interface User {
    login: string
    password: string
}


export interface Post {
    name:string,
    user?: string,
    id?: string
}
