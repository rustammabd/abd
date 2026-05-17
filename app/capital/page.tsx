import img from "@/app/assets/qr.png"
import photo from "@/app/assets/telefon.webp"
import Image from "next/image"

const content = {
    title: "An app built by traders, for traders",
    description: "Go long or short on 5,500+ CFD markets on an award-winning platform with 13ms average execution speed.*",
    pt: "*Internal server data, 2025",
}

export default function Capital() {
    return <>
        <section className="h-screen ">
            <div className="max-w-7xl mx-auto px-4 w-full h-full">
                <div className="flex items-start justify-between">
                    <div className="flex items-start flex-col gap-10 max-w-[600px]">
                        <h1 className="mt-[50px] text-5xl text-wrap font-bold ">
                            {content.title}
                        </h1>
                        <h3 className="text-wrap font-mono">
                            {content.description}
                        </h3>
                        <p className="text-wtap font-mono">
                            {content.pt}
                        </p>

                        <div className="flex  flex-col items-start border border-gray-800 rounded-2xl py-6 px-6 ">
                            <Image src={img} alt="" width={120} height={120} />
                            <span className="text-gray-800 mt-2 text-sm ">
                                Click to enlarge
                            </span>
                        </div>

                    </div>

                    <Image src={photo} alt="" width={680} height={814} />
                </div>
            </div>

        </section>

    </>

}