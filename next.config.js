const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pageExtensions: ['page.tsx', 'page.jsx'],
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
