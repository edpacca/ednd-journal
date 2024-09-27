<script>
    import BackgroundBorder from "$lib/components/graphics/decoration/BackgroundBorder.svelte";
    import Nav from "$lib/components/nav/Nav.svelte";
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
</script>

<Nav/>
<main>
    <BackgroundBorder colour="burlywood" opacity={0.4}/>
    <slot/>
</main>
<footer>
    <h2>Edpacca's Isle of Murraka</h2>
</footer>


<style>

    main {
        position: relative;
        flex: auto;
        z-index: 0;
        background: var(--background-url);
    }
    


    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--footer-height);
        padding: 1rem;
        z-index: 3  ;
        background-color: var(--secondary);
        border-top: var(--border-width) solid var(--primary);
    }
</style>