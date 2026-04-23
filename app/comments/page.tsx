import { Comment } from "../types/Comment"
import Link from "next/link"

async function getComments(): Promise<Comment[]> {
    //http запос на api 
    const response = await fetch(`${process.env.API_COMMENT}/comments`, {
        cache: "no-store"
    })


    if (!response.ok) throw new Error(`${response.status}`)

    const data = await response.json()
    return data.comments
}

export default async function Comments() {
    const comments = await getComments()

    return <>
        <section className="h-screen bg-black py-10 px-0">
            <div className="w-full h-full px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-4 gap-5 max-[775px]:grid-cols-2 max-[410px]:grid-cols-1 ">
                    {comments.map((comment) => (
                        <a key={comment.id} className="
                        hover:bg-white/65
                        relative
                        py-5 px-5 bg-white rounded-2xl">
                            <h4 className="text-black text-2xl">
                                <Link href="/" className={'hover:text-white'}> {comment.body}</Link>
                            </h4>

                            <span className="text-lg top-0 right-0 absolute text-white bg-linear-to-br from-[#ee0000] to-[#654ee7] rounded-2xl px-1 py-0.5  top-[-10px]">👍{comment.likes}</span>
                            <div className="mt-12">
                                <h2 className="text-black text-sm capitalize bottom-2 absolute">{comment.user.fullName}</h2>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    </>
}
