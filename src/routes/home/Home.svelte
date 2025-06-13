<script>
  import HookDetail from '../../components/HookDetail.svelte';
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import Clock from '../../components/Clock.svelte';
  export let data, helpers, settings;

  // add permalinks to the hook list so we can link to the posts.
  const hooks = data.hookInterface.map((hook) => ({
    ...hook,
    link: helpers.permalinks.hooks({ slug: hook.hook.toLocaleLowerCase() }),
  }));
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }
  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 3rem 0;
    }
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  :global(.entry) {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
  .about {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .hydrate {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }

  .hooks {
    display: grid;
    grid-template-columns: 100%;
  }

  @media (min-width: 768px) {
    .hooks {
      grid-template-columns: 50% 50%;
    }
  }
</style>

<svelte:head>
  <title>Cover Opini: Beranda</title>
  <meta name="description" content="Elder.js Starter Template: It's A Tutorial Too!" />
  <link href="{settings.origin}/" rel="canonical" />
</svelte:head>

{#if data.testingHooks}
  <div class="banner">
    <p>Testing hooks worked</p>
    {#if data.cpus}
      <p>If you use Elder.js to build your site, it will span all {data.cpus.length} cpus listed below:</p>
      <ol>
        {#each data.cpus as cpu}
          <li>{cpu.model}</li>
        {/each}
      </ol>
    {/if}
  </div>
{/if}

<div class="banner">
  <h1>Cover Opini: Opini yang Membangun</h1>
  <p>
    Selamat datang di Cover Opini, platform yang didedikasikan untuk menghadirkan analisis mendalam dan perspektif
    beragam tentang isu-isu yang membentuk dunia kita. Kami percaya bahwa pemahaman yang komprehensif lahir dari
    keberanian untuk melihat berbagai sisi dan keberanian untuk bertanya.
  </p>

  <p>
    Di tengah derasnya informasi, Cover Opini hadir sebagai penyeimbang. Kami tidak hanya menyajikan berita, tetapi juga
    menggali di balik permukaan, menawarkan esai, kolom, dan komentar dari berbagai penulis yang ahli di bidangnya.
    Tujuan kami adalah mendorong diskusi yang konstruktif, memantik pemikiran kritis, dan membekali Anda dengan wawasan
    yang lebih luas untuk membentuk opini Anda sendiri.
  </p>

  <p>
    Kami berkomitmen untuk menjadi ruang yang aman dan inspiratif bagi para pembaca dan penulis. Di sini, Anda akan
    menemukan keberanian untuk menyuarakan pandangan, tantangan untuk memperluas cakrawala, dan kesempatan untuk menjadi
    bagian dari komunitas yang menghargai intelektualisme dan keterbukaan.
  </p>

  <p>Bergabunglah bersama kami di Cover Opini, dan mari kita selami dunia ide bersama.</p>
</div>

<div class="blog">
  <div class="entries">
    {#each data.markdown.blog as blog}
      <BlogTeaser {blog} {helpers} />
    {/each}
  </div>
</div>
