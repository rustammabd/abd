import type { Metadata } from "next"
import React from "react"



export const metadata: Metadata = {
    title: "comments page",
    description: "comments x.com"
}

export default function CommentLayout({ children }: { children: React.ReactNode }) {
    return <>

        {children}

    </>
}


