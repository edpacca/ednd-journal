<script lang="ts">
    import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="parchment">
    <h1>{data.journal.title}</h1>
    <div class="text">{data.journal.content}</div>
</div>