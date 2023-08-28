import { writable } from "svelte/store";

export const posts = writable([{
    id: "1",
    liked: false
}])

