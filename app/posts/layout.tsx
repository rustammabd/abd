
import type { Metadata } from "next";
import Header from "../components/shared/header/Header";
import Banner from "../components/shared/header/Banner";


export const metadata: Metadata = {
    title: "API posts",
    description: "explore my posts",
}

export default function PostsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <Banner />
            {children}
        </>
    )
}



