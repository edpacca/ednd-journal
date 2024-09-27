<script lang="ts">
    export let colour: string = "black";
    export let opacity: number = 1;
</script>

<div class="background-border" style="stroke:{colour}; opacity:{opacity}">
    <div class="top">
        <svg width="100%" height="100%" viewBox="0 0 126.209 126.209"><g transform="translate(-4.432 -2.357)"><rect style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="27.705" height="27.705" x="11.314" y="9.496" ry="0"/><rect style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="31.981" height="31.981" x="22.614" y="20.797" ry="0"/><path style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" d="M7.914 125.084V75.3h29.905v19.51l-15.235 12.028v-42.63h43.699M127.158 5.84H77.375v29.904h19.51l12.027-15.234h-42.63v43.698"/></g></svg>
        <div></div>
        <svg width="100%" height="100%" viewBox="0 0 126.209 126.209"><g transform="rotate(90 66.499 62.068)"><rect style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="27.705" height="27.705" x="11.314" y="9.496" ry="0"/><rect style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="31.981" height="31.981" x="22.614" y="20.797" ry="0"/><path style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" d="M7.914 125.084V75.3h29.905v19.51l-15.235 12.028v-42.63h43.699M127.158 5.84H77.375v29.904h19.51l12.027-15.234h-42.63v43.698"/></g></svg>
    </div>
    <div class="middle">
    </div>
    <div class="bottom">
        <svg width="100%" height="100%" viewBox="0 0 126.209 126.209"><g transform="rotate(180 65.32 64.284)"><rect style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="27.705" height="27.705" x="9.24" y="-123.502" ry="0" transform="rotate(90)"/><rect style="opacity:1;vector-effect:none;fill:none;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="31.981" height="31.981" x="20.54" y="-112.201" ry="0" transform="rotate(90)"/><path style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" d="M7.914 5.84h49.784v29.905h-19.51L26.16 20.51h42.63v43.699m58.368 60.875V75.301H97.254v19.51l15.234 12.027v-42.63H68.79"/></g></svg>
        <div></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 126.209 126.209"><g transform="rotate(180 65.32 64.284)"><rect style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="27.705" height="27.705" x="11.314" y="9.496" ry="0"/><rect style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" width="31.981" height="31.981" x="22.614" y="20.797" ry="0"/><path style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-width:6.96500015;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;" d="M7.914 125.084V75.3h29.905v19.51l-15.235 12.028v-42.63h43.699M127.158 5.84H77.375v29.904h19.51l12.027-15.234h-42.63v43.698"/></g></svg>
    </div>
</div>

<style>
    .background-border {
        height: calc(100% - (2 * var(--corner-padding)));
        width: calc(100% - (2 * var(--corner-padding)));
        top: 0;
        left: 0;
        position: absolute;
        display: grid;
        grid-template-rows: auto 1fr auto;
        padding: var(--corner-padding);
    }

    .top, .bottom {
        display: grid;
        grid-template-columns: auto 1fr auto;
    }
</style>