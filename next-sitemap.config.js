/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ai-coding-assistant.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ai-coding-assistant.com/server-sitemap.xml', // Optional: only needed if you have dynamic paths that should be in sitemap
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/server-sitemap.xml'], // exclude server-sitemap from the sitemap
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  // Custom transformation function to add additional URLs
  transform: async (config, path) => {
    // Default transformation
    const url = new URL(path, config.siteUrl);
    
    return {
      loc: url.href,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    // Add assistant subdomain to sitemap
    return [
      {
        loc: 'https://assistant.ai-coding-assistant.com',
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    ];
  },
}