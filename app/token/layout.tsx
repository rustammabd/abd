import type { Metadata } from "next";
import Header from "../components/shared/header/Header";

export const metadata: Metadata = {
    title: "TOKEN",
    description: "Tallin",
}

export default function PostsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="bg-black min-h-screen ">
                {children}

            </main>

        </>
    )
}