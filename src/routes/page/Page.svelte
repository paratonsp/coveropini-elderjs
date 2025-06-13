<script>
  export let data, request, settings;
</script>

<style>
  a {
    margin-bottom: 1rem;
    display: inline-block;
  }
</style>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.title} />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<a href="/">&LeftArrow; Home</a>

<h1>{data.title}</h1>

{@html data.content}
