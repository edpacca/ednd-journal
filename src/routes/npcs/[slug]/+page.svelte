<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    // const date = formatDate(data.meta.date);
</script>

<!-- SEO -->
<svelte:head>
    <title>{data.meta.name}</title>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content={data.meta.article}/>
</svelte:head>

<article>
    <!-- Title -->
    <hgroup>
        <h1>{data.meta.name}</h1>
    </hgroup>

    <div class="contents">
        <img src={`images/${data.meta.img}`}
            alt={`${data.meta.name} image`}
            loading="lazy"
            class="token"/>
        <svelte:component this={data.content}/>
    </div>
</article>

<style>
    h1 {
        text-transform: uppercase;
    }
</style>