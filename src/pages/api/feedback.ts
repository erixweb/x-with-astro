import type { APIRoute } from "astro"
import { getSession } from "auth-astro/server"
import { turso } from "../../turso"

export const POST: APIRoute = async ({ request }) => {
	const session = await getSession(request)
	const data = await request.formData()
    const user_name = session?.user?.name
    const user_photo = session?.user?.image
	const message = data.get("message")
    if (!session) return new Response(JSON.stringify({
        message: "error"
    }))
    const string = `INSERT INTO posts(user_name, user_photo, message) VALUES ("${user_name}", "${user_photo}", "${message}");`
    


	await turso.execute(string)

	return new Response(
		JSON.stringify({
			message,
		}),
		{ status: 200 }
	)
}
