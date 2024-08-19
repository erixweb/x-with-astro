<script lang="ts">
	import { posts } from "../store"
	import Bookmark from "./icons/bookmark.svelte"
	import Like from "./icons/like.svelte"
	import Retweet from "./icons/retweet.svelte"

	export let id: string
	export let likes: number
	export let sessionEmail

	let liked = false
	let retweeted = false
	let bookmarked = false
	let existingPosts: Array<Post> = []

	posts.subscribe((value) => {
		existingPosts = value
	})

	console.log(existingPosts)

	const currentPost: Post | null = existingPosts.find((post: Post) => post.id == id) || null

	const userLiked = [currentPost?.user_id].findIndex((val) => val === sessionEmail)

	const post: Post = {
		id,
		liked: userLiked == 0 ? true : false,
		user_id: currentPost?.user_id
	}

	async function like() {
		post.liked = !post.liked


		if (post.liked) likes++

		const req = await fetch(`/api/like?id=${parseInt(post.id)}`)
		const res = await req.json()

		if (req.status === 500 || res.message === "Delete") {
			post.liked = false
			likes--
		}
	}
</script>

{#if existingPosts && post}
	<div class="flex gap-[20px] mt-[20px]">
		<button on:click={like} class="flex gap-[10px] items-center justify-center align-middle">
			<Like liked={post.liked} />
			{likes}
		</button>
		<button on:click={() => (retweeted = !retweeted)}>
			<Retweet {retweeted} />
		</button>
		<button on:click={() => (bookmarked = !bookmarked)}>
			<Bookmark {bookmarked} />
		</button>
	</div>
{/if}
