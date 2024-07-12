// next.config.js
module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' 'unsafe-inline' 'unsafe-eval'; object-src 'none'; base-uri 'self';"
            },
          ],
        },
      ];
    },
  };
  