
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/matthieu/Development/coachnpulse/.cache/dev-404-page.js")),
  "component---src-pages-coach-tsx": preferDefault(require("/Users/matthieu/Development/coachnpulse/src/pages/coach.tsx")),
  "component---src-pages-description-tsx": preferDefault(require("/Users/matthieu/Development/coachnpulse/src/pages/description.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/matthieu/Development/coachnpulse/src/pages/index.tsx")),
  "component---src-pages-prices-tsx": preferDefault(require("/Users/matthieu/Development/coachnpulse/src/pages/prices.tsx"))
}

