import { Post } from "../types/Post";

async function getPosts(): Promise<Post[]> {
    const res = await fetch(`${process.env.API_POSTS}/posts`, {
        cache: 'no-store',
        next: { revalidate: 60 }
    })

    if (!res.ok) throw new Error(`fetch failed ${res.status}`)

    const data = await res.json()
    return data.posts;

}



export default async function Posts() {

    const posts = await getPosts()
    console.log(posts);

    return (
        <>
            <main className="min-h-screen bg-black py-10 px-0">
                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                    <div className="grid grid-cols-3 gap-6 max-[768px]:grid-cols-2 max-[490px]:grid-cols-1">
                        {posts.map((post) => (
                            <div key={post.id} className="relative bg-[#111] rounded-2xl flex items-center flex-col gap-4 py-6 px-6 shadow-2xl hover:shadow-orange-500">
                                <h2 className="text-3xl text-white text-wrap font-mono">
                                    {post.title}
                                </h2>
                                <p className="text-lg text-white text-wrap text-justify">
                                    {post.body}
                                </p>
                                <span className="text-sm text-cyan-400 text-wrap absolute top-[-5px] right-0 transition transfrom rotate-10">
                                    {post.reactions.likes}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}


