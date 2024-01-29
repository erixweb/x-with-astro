import type { APIRoute } from "astro"

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData()
    const message = data.get("message")

	return new Response(
		JSON.stringify({
			message,
		}),
		{ status: 200 }
	)
}
