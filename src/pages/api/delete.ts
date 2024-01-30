import type { APIRoute } from "astro"
import { getSession } from "auth-astro/server"
import { turso } from "../../turso"

export const GET: APIRoute = async ({ request }) => {
	const session = await getSession(request)
    const postID = new URL(request.url).searchParams.get("id") 
    if (!session || !postID) return new Response(JSON.stringify({
        message: "Not authenticated"
    }))
    if (isNaN(postID)) return new Response(JSON.stringify({
        message: "This tweet doesn't exist."
    }))

    console.log(typeof parseInt(postID), postID)
    
    const { rows } = await turso.execute(`SELECT * FROM posts WHERE id=${postID}`)
    if (!rows || rows === undefined) return new Response(JSON.stringify({
        message: "This tweet doesn't exist."
    }))

    if (rows[0].user_mail === session.user?.email) {
        await turso.execute(`DELETE FROM posts WHERE id=${parseInt(postID)}`)
        return new Response(
            JSON.stringify({
                message: "Succesfully deleted",
            }),
            { status: 200 }
        )
    }
    return new Response(
        JSON.stringify({
            message: "Error",
        }),
        { status: 200 }
    )

}
