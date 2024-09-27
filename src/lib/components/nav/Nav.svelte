<script>
    import { currentCampaign, userType } from "../../../stores/store";
    import XButton from "../common/XButton.svelte";

    const resetUser = () => {
        $userType = undefined;
        $currentCampaign = "";
    }
</script>

<nav>
    <a href="/" class="nav-link">Home</a> | 
    <a href="/locations" class="nav-link">Locations</a> |
    <a href="/npcs" class="nav-link">NPCs</a> |
    <a href="/journal" class="nav-link">Journal</a>

    <div class="user-info">
        {#if $currentCampaign}
            <h3 class="primary">{$currentCampaign}</h3>
            <XButton onClick={resetUser} />
        {:else if $userType}
            <div>viewing as</div>
            <select bind:value={$userType}>
                <option>{"player"}</option>
                <option>{"visitor"}</option>
            </select>
        {/if}
    </div>
</nav>

<style>
    nav {
        height: var(--navbar-height);
        display: flex;
        column-gap: 16px;
        align-items: center;
        justify-content: center;

        background-color: var(--secondary);
        color: var(--primary);
        border-bottom: var(--border-width) solid brown;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .user-info {
        display: flex;
        flex-direction: row;
        column-gap: var(--default-spacing);
        color: var(--black);
        font-weight: normal;
        font-size: 1rem;
        position: absolute;
        right: var(--default-spacing);
    }

    select {
        font-family: "RobotoCondensed";
        font-weight: bold;
        background-color: transparent;
        border: 1px solid var(--primary);
        border-radius: var(--border-radius);
    }

    option {
        color: var(--grey)
    }

    a {
        color: brown;
        text-decoration: none;
    }
</style>