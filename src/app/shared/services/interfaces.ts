export interface User {
    login: string
    password: string
}


export interface Post {
    namePost:string,
    user?: string,
    idPost?: string
}


export interface Office {
    namePost:string,
    idPost?: string
}