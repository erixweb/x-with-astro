<script lang="ts">
	import { posts } from "../store"
	import Bookmark from "./icons/bookmark.svelte"
	import Like from "./icons/like.svelte"
	import Retweet from "./icons/retweet.svelte"

	export let id: string
	export let likes: number

	let liked = false
	let retweeted = false
	let bookmarked = false
	let existingPosts: Array<Post> = []

	posts.subscribe((value) => {
		existingPosts = value
	})

	const currentPost: Post | null = existingPosts.find((post: Post) => post.id === id) || null

	const post: Post = {
		id,
		liked: currentPost?.liked ?? false,
	}

	async function like () {
		post.liked = !post.liked

		likes++
		const req = await fetch(`/api/like?id=${post.id}`)

		if (req.status === 500) {
			post.liked = false
			likes--
		}
	}
	/*
    const oldStorage = localStorage.getItem("posts")

    localStorage.setItem('posts', oldStorage + JSON.stringify([{
        id: id,
        liked: post.liked
    }]))
    */
</script>

<div class="flex gap-[20px] mt-[20px]">
	<button on:click={like} class="flex gap-[10px] items-center justify-center align-middle">
		<Like liked={post.liked} /> {likes}
	</button>
	<button on:click={() => (retweeted = !retweeted)}>
		<Retweet {retweeted} />
	</button>
	<button on:click={() => (bookmarked = !bookmarked)}>
		<Bookmark {bookmarked} />
	</button>
</div>
