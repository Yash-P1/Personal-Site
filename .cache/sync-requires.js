
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/src/pages/contact.js")),
  "component---src-pages-icons-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/src/pages/icons.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/src/pages/work.js")),
  "component---src-templates-blog-js": preferDefault(require("/Users/yash/Desktop/Coding/Personal-Site/src/templates/blog.js"))
}

