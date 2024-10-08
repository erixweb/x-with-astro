import type { APIRoute } from "astro"
import { getSession } from "auth-astro/server"
import { turso } from "../../turso"

export const GET: APIRoute = async ({ request }) => {
	const session = await getSession(request)
	const postID = new URL(request.url).searchParams.get("id")
	if (!session || !postID)
		return new Response(
			JSON.stringify({
				message: "Not authenticated",
			})
		)
	if (isNaN(postID))
		return new Response(
			JSON.stringify({
				message: "This tweet doesn't exist.",
			})
		)

	const { rows } = await turso.execute(`SELECT user_mail FROM posts WHERE id=${postID}`)
	if (!rows || rows === undefined)
		return new Response(
			JSON.stringify({
				message: "This tweet doesn't exist.",
			})
		)

	/*
	if (rows[0].user_mail === session.user?.email) {
		return new Response(
			JSON.stringify({
				message: "Cannot like yourself",
			}),
			{ status: 500 }
		)
	}
		*/

	const hasLiked = (
		await turso.execute(`SELECT id FROM likes WHERE user_id = "${session.user?.email}" AND post_id = ${postID}`)
	).rows.length

	

	console.log(hasLiked)
	if (hasLiked > 0) {
		turso.execute(`DELETE FROM likes WHERE user_id = "${session.user?.email}"`)
		return new Response(
			JSON.stringify({
				message: "Delete",
			}),
			{ status: 200 }
		)
	} else {
		turso.execute(
			`INSERT INTO likes(post_id, user_id) VALUES ( ${postID}, "${session.user?.email}" )`
		)
	}

	return new Response(
		JSON.stringify({
			message: "Added like",
		}),
		{ status: 200 }
	)
}
