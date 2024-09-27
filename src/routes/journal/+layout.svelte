<script lang="ts">
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
    import type { LayoutData } from "./$types";
    export let data: LayoutData
</script>

<div class="content-sidebar">
    <Sidebar>
        <ul>
            {#each data.summaries as { slug, title }}
                <li><a href={`/journal/${slug}`}>{title}</a></li>
            {/each}
        </ul>
    </Sidebar>
    <div class="content">
        <slot/>
    </div>
</div>