import { MessageCircle, User } from "lucide-react"
import Link from "next/link"

const links = [
    { label: "Posts", href: "/posts" },
    { label: "Users", href: "/users", icon: User },
    { label: "Comments", href: "/comments", icon: MessageCircle },
]

const Header = () => {
    return <>
        <header className="bg-black py-12 px-5">
            <div className="max-w-[1230px] mx-auto py-4 md:px-6 w-full">
                <div className="flex items-center justify-center">
                    <ul className="flex items-center gap-5 py-5 px-4 bg-[#111] rounded-4xl">
                        {links.map((link) => {
                            const Icon = link.icon;

                            return (
                                <li key={link.href}>
                                    <Link href={link.href} className="flex items-center gap-1">
                                        {Icon && <Icon />}
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </header>
    </>
}


export default Header
