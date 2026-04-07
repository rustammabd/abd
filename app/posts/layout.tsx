
import type { Metadata } from "next";
import Header from "../components/shared/header/Header";

export const metadata: Metadata = {
    title: "API posts",
    description: "explore my posts",
}

export default function PostsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}



