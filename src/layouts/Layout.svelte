<script>
  import style from '../../assets/style.css';
  export let templateHtml, settings;
</script>

<style>
  :global(h1) {
    font-style: italic;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }
  .footer {
    padding: 2rem 0;
    background: #06395a;
    padding-top: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: #f4f7fb;
    text-align: center;
    font-size: 14px;
  }
  .footer a {
    color: #f4f7fb;
  }
  :global(ul li),
  :global(ol li) {
    margin-bottom: 0.3rem;
  }
</style>

<svelte:head>
  <link rel="icon" type="image/png" href="{settings.origin}/favicon.png" />
  <meta name="google-site-verification" content="nBQwj8wksdzr2V612jP-Gn6kvrSktl3YZaWogOfEOQU" />
  <script src="https://analytics.ahrefs.com/analytics.js" data-key="yGamTKV1TkwIo7N/pOBi6w" async></script>
  <script>
    document.addEventListener('ejs', (e) => {
      console.log('Layout.svelte > Component Mount Detail', e.detail);
    });
  </script>
</svelte:head>

<div class="container">
  {@html templateHtml}
</div>
<div class="footer">
  <p>Didukung oleh <a href="https://pesoros.com" target="_blank" rel="noopener">pesoros.com</a></p>
</div>
