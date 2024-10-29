export type Post = {
    id: number,
    author: {
        id: number,
        name: string,
        profilePic: string
    }
    images: string[]
    likes: {
        images: string[],
        first: string
    }
    description: string;
}