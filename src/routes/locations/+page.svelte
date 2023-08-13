<script>
    import FaIcon from "$lib/components/common/FaIcon.svelte";

</script>
<div>
    <div class="map-container">
        <img src="/locations/minimal-landscape.jpg" alt="temp-map"/>
        <div class="map-icon" id="rivermine">
            <FaIcon icon={"hammer"}/>
        </div>
    </div>
</div>

<style>
    .map-container {
        width: 100%;
        height: 100%;
        position: relative;
        border: 2px solid yellow;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .map-icon {
        position: absolute;
    }

    #rivermine {
        top: 30;
        left: 10;
    }
</style>