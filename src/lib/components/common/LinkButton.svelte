<script lang="ts">
    export let href: string;
</script>

<a href={href}><slot/></a>

<style>
    a {
        padding: 8px 16px;
        background: var(--primary-50);
        color: var(--accent);
        border: none;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Cinzel";
        font-size: 1.2em;
        border-radius: 0 var(--border-radius);
    }

    a:hover {
        background: var(--primary);
    }
</style>