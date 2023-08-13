<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<div class="list-container">
    {#each data.npcs as npc}
        <div class="list-item">
            <a href={`npcs/${npc.slug}`}>{npc.name}</a>
            <div>{npc.locationId}</div>
        </div>
    {/each}
</div>

<style>
    .list-container {
        background-color: var(--primary);
        margin: 3em;
        padding: 1em;
    }

    .list-item {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0.1em;
        display: flex;
    }
    
    .list-item a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
        color: var(--secondary);
        font-family: "Cinzel";
    }

    .list-item a:hover {
        text-decoration: underline;
    }
</style>