<script>
    export let liked = false
</script>

{#if liked}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-code" width=32 height=32 viewBox="0 0 24 24" stroke-width="2" stroke="#fc5151" fill="#fc5151" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.5 12.572l-.536 .53m-7.91 5.96l-6.554 -6.489a5 5 0 1 1 7.5 -6.567a5 5 0 1 1 7.5 6.572"></path>
        <path d="M20 21l2 -2l-2 -2"></path>
        <path d="M17 17l-2 2l2 2"></path>
    </svg>
{:else}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-code" width=32 height=32 viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.5 12.572l-.536 .53m-7.91 5.96l-6.554 -6.489a5 5 0 1 1 7.5 -6.567a5 5 0 1 1 7.5 6.572"></path>
        <path d="M20 21l2 -2l-2 -2"></path>
        <path d="M17 17l-2 2l2 2"></path>
    </svg>
{/if}