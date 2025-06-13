module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'sitemap' }],
  // the permalink definition takes a 'request' object and returns a relative permalink.
  // In this case "/simple/"
  permalink: '/:slug/', // this is the same as ({ request }) => `/${request.slug}/`;
  data: async ({ request }) => {
    // The data function populates an object that will be in available in our Svelte template under the 'data' key.
    return {
      title: 'Website Sitemap',
      description: 'Website Sitemap of Page, Post and Everything in this website',
      content: `
      <h2>What is Website Sitemap?</h2>
      <p>Website Sitemap of Page, Post and Everything in this website</p>
      <p><a href="https://coveropini.my.id/">https://coveropini.my.id/</a><p>
      <p><a href="https://coveropini.my.id/sitemap/">https://coveropini.my.id/sitemap/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-1000-ampere/">https://coveropini.my.id/acb-3-phase-1000-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-1250-ampere/">https://coveropini.my.id/acb-3-phase-1250-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-1600-ampere/">https://coveropini.my.id/acb-3-phase-1600-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-2000-ampere/">https://coveropini.my.id/acb-3-phase-2000-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-2500-ampere/">https://coveropini.my.id/acb-3-phase-2500-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-3200-ampere/">https://coveropini.my.id/acb-3-phase-3200-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-4000-ampere/">https://coveropini.my.id/acb-3-phase-4000-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-630-ampere/">https://coveropini.my.id/acb-3-phase-630-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-6300-ampere/">https://coveropini.my.id/acb-3-phase-6300-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-3-phase-800-ampere/">https://coveropini.my.id/acb-3-phase-800-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-1000-ampere/">https://coveropini.my.id/acb-4-phase-1000-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-1250-ampere/">https://coveropini.my.id/acb-4-phase-1250-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-1600-ampere/">https://coveropini.my.id/acb-4-phase-1600-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-2000-ampere/">https://coveropini.my.id/acb-4-phase-2000-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-2500-ampere/">https://coveropini.my.id/acb-4-phase-2500-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-3200-ampere/">https://coveropini.my.id/acb-4-phase-3200-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-4000-ampere/">https://coveropini.my.id/acb-4-phase-4000-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-630-ampere/">https://coveropini.my.id/acb-4-phase-630-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-6300-ampere/">https://coveropini.my.id/acb-4-phase-6300-ampere/</a><p>
      <p><a href="https://coveropini.my.id/acb-4-phase-800-ampere/">https://coveropini.my.id/acb-4-phase-800-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-10-ampere/">https://coveropini.my.id/mcb-1-phase-10-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-16-ampere/">https://coveropini.my.id/mcb-1-phase-16-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-2-ampere/">https://coveropini.my.id/mcb-1-phase-2-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-20-ampere/">https://coveropini.my.id/mcb-1-phase-20-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-25-ampere/">https://coveropini.my.id/mcb-1-phase-25-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-32-ampere/">https://coveropini.my.id/mcb-1-phase-32-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-4-ampere/">https://coveropini.my.id/mcb-1-phase-4-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-40-ampere/">https://coveropini.my.id/mcb-1-phase-40-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-50-ampere/">https://coveropini.my.id/mcb-1-phase-50-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-6-ampere/">https://coveropini.my.id/mcb-1-phase-6-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-1-phase-63-ampere/">https://coveropini.my.id/mcb-1-phase-63-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-10-ampere/">https://coveropini.my.id/mcb-2-phase-10-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-16-ampere/">https://coveropini.my.id/mcb-2-phase-16-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-2-ampere/">https://coveropini.my.id/mcb-2-phase-2-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-20-ampere/">https://coveropini.my.id/mcb-2-phase-20-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-25-ampere/">https://coveropini.my.id/mcb-2-phase-25-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-32-ampere/">https://coveropini.my.id/mcb-2-phase-32-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-4-ampere/">https://coveropini.my.id/mcb-2-phase-4-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-40-ampere/">https://coveropini.my.id/mcb-2-phase-40-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-50-ampere/">https://coveropini.my.id/mcb-2-phase-50-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-6-ampere/">https://coveropini.my.id/mcb-2-phase-6-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-2-phase-63-ampere/">https://coveropini.my.id/mcb-2-phase-63-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-10-ampere/">https://coveropini.my.id/mcb-3-phase-10-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-16-ampere/">https://coveropini.my.id/mcb-3-phase-16-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-2-ampere/">https://coveropini.my.id/mcb-3-phase-2-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-20-ampere/">https://coveropini.my.id/mcb-3-phase-20-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-25-ampere/">https://coveropini.my.id/mcb-3-phase-25-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-32-ampere/">https://coveropini.my.id/mcb-3-phase-32-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-4-ampere/">https://coveropini.my.id/mcb-3-phase-4-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-40-ampere/">https://coveropini.my.id/mcb-3-phase-40-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-50-ampere/">https://coveropini.my.id/mcb-3-phase-50-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-6-ampere/">https://coveropini.my.id/mcb-3-phase-6-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mcb-3-phase-63-ampere/">https://coveropini.my.id/mcb-3-phase-63-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-100-ampere/">https://coveropini.my.id/mccb-3-phase-100-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-1000-ampere/">https://coveropini.my.id/mccb-3-phase-1000-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-125-ampere/">https://coveropini.my.id/mccb-3-phase-125-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-1250-ampere/">https://coveropini.my.id/mccb-3-phase-1250-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-15-ampere/">https://coveropini.my.id/mccb-3-phase-15-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-160-ampere/">https://coveropini.my.id/mccb-3-phase-160-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-1600-ampere/">https://coveropini.my.id/mccb-3-phase-1600-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-20-ampere/">https://coveropini.my.id/mccb-3-phase-20-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-200-ampere/">https://coveropini.my.id/mccb-3-phase-200-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-25-ampere/">https://coveropini.my.id/mccb-3-phase-25-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-250-ampere/">https://coveropini.my.id/mccb-3-phase-250-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-30-ampere/">https://coveropini.my.id/mccb-3-phase-30-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-32-ampere/">https://coveropini.my.id/mccb-3-phase-32-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-320-ampere/">https://coveropini.my.id/mccb-3-phase-320-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-40-ampere/">https://coveropini.my.id/mccb-3-phase-40-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-400-ampere/">https://coveropini.my.id/mccb-3-phase-400-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-50-ampere/">https://coveropini.my.id/mccb-3-phase-50-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-500-ampere/">https://coveropini.my.id/mccb-3-phase-500-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-63-ampere/">https://coveropini.my.id/mccb-3-phase-63-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-630-ampere/">https://coveropini.my.id/mccb-3-phase-630-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-80-ampere/">https://coveropini.my.id/mccb-3-phase-80-ampere/</a><p>
      <p><a href="https://coveropini.my.id/mccb-3-phase-800-ampere/">https://coveropini.my.id/mccb-3-phase-800-ampere/</a><p>
      `,
    };
  },
};
