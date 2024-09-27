<script lang="ts">
    import Button from "../lib/components/common/Button.svelte";
    import { Campaign, UserType } from "../lib/types";
    import { currentCampaign, userType } from "../stores/store";

    const setUserType = (userType: UserType) => {
        $userType = userType;
    }

    const campaigns: string[] = Object.values(Campaign);
</script>

<div class="content">
    <h1>Edpacca's Isle of Murraka</h1>
    {#if !$userType}
        <p>Welcome traveller.</p>
        <p>How do we find you today?</p>
        <div class="button-menu">
            <Button content="player" onClick={() => setUserType(UserType.PLAYER)}/>
            <Button content="visitor" onClick={() => setUserType(UserType.VISITOR)}/>
        </div>
    {:else if $userType === "player" && !$currentCampaign}
        <p>Select your campaign</p>
        <div class="button-menu">
            {#each campaigns as campaign}
                <Button content={campaign} onClick={() => $currentCampaign = campaign}/>
            {/each}
        </div>
    {:else }
        <p>Enjoy exploring the Isle.</p>
        <p>Don't wander too far from the path...</p>
    {/if}
</div>
