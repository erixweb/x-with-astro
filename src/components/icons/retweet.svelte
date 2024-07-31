<script>
    export let retweeted = false
</script>
{#if retweeted}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="2" stroke="#3eba1e" fill="none" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(90deg);">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
    </svg>
{:else}
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="25px" height="25px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(90deg);">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
        <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
    </svg>
{/if}