<script>
    import Bookmark from "./icons/bookmark.svelte";
    import Like from "./icons/like.svelte";
    import Retweet from "./icons/retweet.svelte";

    let liked = false
    let retweeted = false
    let bookmarked = false
</script>

<div class="flex gap-[20px] mt-[20px]">
    <button on:click={() => liked = !liked}>
        <Like liked={liked} />
    </button>
    <button on:click={() => retweeted = !retweeted}>
        <Retweet retweeted={retweeted} />
    </button>
    <button on:click={() => bookmarked = !bookmarked}>
        <Bookmark bookmarked={bookmarked} />
    </button>
</div>