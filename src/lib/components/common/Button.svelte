<script lang="ts">
    export let content: string;
    export let onClick: () => void = () => {};
</script>

<button on:click={onClick}>
    {content}
</button>

<style>
    button {
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

    button:hover {
        background: var(--primary);
    }
</style>