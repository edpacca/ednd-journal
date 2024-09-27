<script lang="ts">
    import Fa from "svelte-fa/src/fa.svelte";
    import { faXmark } from "@fortawesome/free-solid-svg-icons";
    export let onClick: () => void; 
</script>

<button on:click={onClick}>
    <Fa icon={faXmark}/>
</button>

<style>
    button {
        color: var(--grey);
        border: none;
        background: none;
        margin: 0;
        padding: 0;
    }

    button:hover {
        color: var(--red);
    }
</style>