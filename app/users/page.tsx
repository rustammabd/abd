



async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users", {
        cache: 'no-cache'
    })

    const data = await res.json()
    return data.users


    console.log(data);
}


export default async function User() {
    const users = await getUsers()
    return <>
        <main className="py-12 px-0 min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-4 w-full h-full">
                <div className="grid grid-cols-3 gap-5 max-[1044px]:grid-cols-3 max-[768px]:grid-cols-2 max-[525]:grid-cols-1">
                    {Array.isArray(users) && users.map((user) => (
                        <div key={user.id} className="rounded-2xl bg-[#111] py-6 px-6 flex items-center flex-col gap-6 bg-linear-to-br from-[#111] to-gray-600">
                            <p className="">{user.country}</p>
                            <p className="">{user.age}</p>

                        </div>
                    ))}
                </div>
            </div>
        </main>

    </>
}





































// import { User } from "../types/User";



// async function getUsers(): Promise<User[]> {
//     const res = await fetch(`${process.env.API_USERS}/users`, {
//         next: { revalidate: 60 },
//         cache: 'no-store'
//     })

//     if (!res.ok) throw new Error(`fetch failed ${res.status}`)

//     // return res.json()

//     const data = await res.json()
//     return data.users

// }




// export default async function UserPage() {
//     const users = await getUsers()


//     return (
//         <>
//             <section className="bg-black py-12 px-0">
//                 <div className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full">
//                     <div className="grid grid-cols-4 gap-10">

//                         {users.map((user) => (
//                             <div key={user.id} className=" flex items-start flex-col gap-4 shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)] py-4 px-4 shadow-lg shadow-gray-400 hover:shadow-cyan-500 transform transition hover:-translate-y-3">
//                                 <h2 className="text-xl font-mono">{user.firstName}</h2>
//                                 <h3 className="text-lg font-mono">{user.lastName}</h3>
//                                 <p className="text-sm font-mono">user.email</p>
//                                 <p className="text-sm">{user.phone}</p>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </section>
//         </>
//     )

// }