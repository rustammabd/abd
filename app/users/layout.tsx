import type { Metadata } from "next"
import React from "react"
import Header from "../components/shared/header/Header"


export const metadata: Metadata = {

    title: "Users page",
    description: "users page - the most attractive"

}

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}


