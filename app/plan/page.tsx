
const data = [
    {
        id: 1,
        title: "Lite",
        text: "Интеллект для повседневных задач",
        price: "0",
        btntext: "Get Go",
        desc: "Ограниченные сообщения и загрузки"
    },
    {

        id: 2,
        title: "Togrul",
        text: "Интеллект для повседневных задач",
        price: "31",
        btntext: "Get Go",
        desc: "umniy"
    },

    {
        id: 3,
        title: "Murad",
        text: "Интеллект для повседневных задач",
        price: "69",
        btntext: "Get Go",
        desc: "tupoy"
    },

    {
        id: 4,
        title: "Girl",
        text: "Интеллект для повседневных задач",
        price: "3169",
        btntext: "Get Go",
        desc: "Samir lyubit eto"
    }
]


const Plan = () => {
    return (
        <>
            <section className="py-12 px-0">
                <div className="max-w-7xl mx-auto px-4 w-full h-full">
                    <div className="grid grid-cols-4 gap-5 max-[1044px]:grid-cols-3 max-[768px]:grid-cols-2 max-[525]:grid-cols-1">
                        {data.map((d) => (
                            <div key={d.id} className={'!py-6 !px-6 bg-[#111] rounded-2xl flex items-start  gap-[40px] flex-col h-full'}>
                                <h3 className={'text-white text-3xl font-black'}>{d.title}
                                </h3>
                                <p className={'text-wrap text-white text-lg font-semibold text-start'}>{d.text}
                                </p>
                                <h4 className={'text-4xl text-white '}>${d.price}
                                    <span className={'text-sm text-gray-600'}>/mo</span>
                                </h4>
                                <p className={'text-lg text-gray-400 text-wrap !mt-auto  '}>
                                    {d.desc}
                                </p>
                                <button className={' bg-white !mt-auto pt-10 text-black !py-6 !px-6 rounded-xl w-full capitalize hover:bg-white/45 '}>{d.btntext}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Plan