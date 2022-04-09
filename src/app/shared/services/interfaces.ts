export interface User {
    login: string
    password: string
}


export interface Posts {
  posts: Post[]
  allAmount: number
}

export interface Post {
    name:string,
    user?: string,
    id?: string
}
