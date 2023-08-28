<script lang="ts">
    import { posts } from "../store";
    import Bookmark from "./icons/bookmark.svelte";
    import Like from "./icons/like.svelte";
    import Retweet from "./icons/retweet.svelte";

    export let id: string

    let liked = false
    let retweeted = false
    let bookmarked = false
    let existingPosts: Array<Post> = []

    posts.subscribe(value => {
        existingPosts = value
    })

    const currentPost: Post | null = existingPosts.find((post: Post) => post.id === id) || null


    const post: Post = {
        id: id,
        liked: currentPost?.liked ?? false
    }
</script>

<div class="flex gap-[20px] mt-[20px]">
    <button on:click={() => post.liked = !post.liked}>
        <Like liked={post.liked} />
    </button>
    <button on:click={() => retweeted = !retweeted}>
        <Retweet retweeted={retweeted} />
    </button>
    <button on:click={() => bookmarked = !bookmarked}>
        <Bookmark bookmarked={bookmarked} />
    </button>
</div>