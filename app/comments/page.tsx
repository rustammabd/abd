

async function getComments(): Promise<Comment[]> {
    //http запос на api 
    const response = await fetch(`${process.env.API_COMMENT}/comment`, {
        cache: "no-store"
    })


    if (!response.ok) throw new Error(`${response.status}`)

    const data = await response.json()
    return data.comments
}

export default async function Comments() {
    const comments = await getComments()
    return <>

    </>
}
