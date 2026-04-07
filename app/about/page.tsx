import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <ul className="flex items-center gap-4">
                <Link href={"/"}>главная</Link>
                <Link href={"/login"}>логин</Link>
            </ul>
        </>
    );
}