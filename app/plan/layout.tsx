import type { Metadata } from "next"
import Header from "../components/shared/header/Header"

export const metadata: Metadata = {
    title: "Togrul",
    description: "Togrulcik"
}

export default function PlanLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
