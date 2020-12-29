const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pageExtensions: ['route.tsx', 'route.jsx'],
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public',
    runtimeCaching,
  },
})
