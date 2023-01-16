// eslint-disable-next-line no-undef
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://github.com/marcelohoficial/portfolio",
  generateRobotsTxt: true, // (optional)
  changefreq: "daily",
  // ...other options
};
