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
      <p>Elder.js is a bit different from most frameworks in that for pages to be statically generated it asks you to define all of your <span class="code">request</span> objects in your <span class="code">all()</span> function. While this step may seem a bit different from what you are used to it prevents Elder.js from having to crawl your site to render it which dramatically speeds up the build process.</p>
      <h2>What is Website Sitemap?</h2>
      <p>Elder.js is a bit different from most frameworks in that for pages to be statically generated it asks you to define all of your <span class="code">request</span> objects in your <span class="code">all()</span> function. While this step may seem a bit different from what you are used to it prevents Elder.js from having to crawl your site to render it which dramatically speeds up the build process.</p>
      `,
    };
  },

  // template: 'Simple.svelte' // this is auto-detected.
  // layout: 'Layout.svelte' // this is auto-detected.
};
