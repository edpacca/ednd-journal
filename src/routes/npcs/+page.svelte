<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<div class="list-container">
    {#each data.npcs as npc}
        <a href={`npcs/${npc.slug}`}>{npc.name}</a>
    {/each}
</div>

<style>
    .list-container {
        background-color: black;
        margin: 3em;
    }
</style>