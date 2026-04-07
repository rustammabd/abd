import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <header>
                <ul className="flex items-center gap-4">
                    <Link href={"/"}>главная</Link>
                    <Link href={"/about"}>о нас</Link>
                </ul >
            </header>

            <section className=" h-screen bg-black py-[100px] px-0">
                <div className="max-w-307.5 px-[15px] m-auto w-full h-full">
                    <div className="flex items-center justify-center h-full">

                        <form className="p-[35px] max-w-[400px] rounded-3xl" method="post">
                            <input type="Password" placeholder="password" className="outline-none py-3 px-4 border border-gray-500 rounded-2xl w-[400px] " />

                            <input type="Name" placeholder="Name" className="outline-none py-3 px-4 border border-gray-500 rounded-2xl w-[400px] mt-[10px]" />

                            <button className="py-[20px] px-[35px] border border-gray-500 rounded-2xl mt-[10px] text-white text-[17px] w-[400px] outline-none cursor-pointer hover:bg bg-amber-300 hover:text-black capitalize ">Login</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}

