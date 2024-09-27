<script>
    import { page } from '$app/stores';
</script>
  
<h1>Errkkkk - an error</h1>
<h1>{$page.status}: {$page.error ? $page.error.message : ""}</h1>