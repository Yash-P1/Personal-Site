
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/yash/Desktop/Coding/Portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/yash/Desktop/Coding/Portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/yash/Desktop/Coding/Portfolio/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/yash/Desktop/Coding/Portfolio/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/yash/Desktop/Coding/Portfolio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/yash/Desktop/Coding/Portfolio/src/pages/index.js")),
  "component---src-templates-blog-js": preferDefault(require("/Users/yash/Desktop/Coding/Portfolio/src/templates/blog.js"))
}

