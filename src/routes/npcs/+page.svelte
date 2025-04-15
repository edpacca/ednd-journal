<script lang="ts">
    import FaIcon from "$lib/components/common/FaIcon.svelte";
import type { PageData } from "./$types";
    export let data: PageData;
</script>

<div class="list-container">
    {#each data.npcs as npc}
        <div class="list-item">
            <a href={`npcs/${npc.slug}`}>{npc.name}</a>
            <div>
                <img src={`/npcs/${npc.img}`}/>
            </div>
        </div>
    {/each}
</div>

<style>
    .list-container {
        background-color: var(--primary);
        margin: 3em;
        padding: 1em;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .list-item {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.1em;
        width: 8em;
        height: 8em;
    }
    
    .list-item a {
        text-decoration: none;
        font-weight: bold;
        color: var(--secondary);
        font-family: "Cinzel";
    }

    .list-item a:hover {
        text-decoration: underline;
    }

    img {
        width: 100%;
        border-radius: 50%;
    }
</style>