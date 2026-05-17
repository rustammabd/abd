"use client"

import { useRouter } from "next/navigation"


const content = {
    title: "The internet that belongs to you",
    description: "Ethereum is the global network where you control your assets, your data, and your identity",
    btn: "Start here >",
}

export default function Banner() {
    const router = useRouter()
    return <>
        <section className="h-screen mb-[100px] bg-transperent">
            <div className="max-w-7xl mx-auto px-4 w-full h-full">
                <div className=" flex items-center flex-col gap-10 justify-center">
                    <h1 className="text-7xl font-bold max-w-[650px] text-center max-[650px]:text-4xl">{content.title}
                    </h1>
                    <p className="text-gray-400 text-lg font-bold font-mono max-w-[700px] max-[650px]:text-sm text-center text-wrap">{content.description}
                    </p>
                    <button onClick={() => router.push('/capital')} className="bg-violet-600 px-8 text-xl font-bold py-3 rounded-2xl
                    cursor-pointer hover:bg-violet-400 hover:text-black border-none outline-none max-[375px]:w-full">{content.btn}

                    </button>
                </div>
            </div>

        </section>
    </>
}