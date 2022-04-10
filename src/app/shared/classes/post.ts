export class User {
  login!: string
  password!: string
  constructor() {
  }
}

export class Post {
  name!: string
  user?: string
  id?: number

  constructor() {

  }
}

export class Posts {
  posts: Post[] | undefined
  allAmount: number

  constructor() {
    this.allAmount = 0
  }
}
