export class User {
  login!: string
  password!: string
  constructor() {
  }
}

export class Post {
  name!: string
  user?: string
  id: number
  isFav: boolean
  constructor() {
    this.isFav = false;
    this.id = 0;
  }
}

export class Posts {
  posts: Post[] | undefined
  allAmount: number

  constructor() {
    this.allAmount = 0
  }
}
