if ('function' === typeof importScripts) {
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([]);

        /* custom cache rules*/
        workbox.routing.registerNavigationRoute('/index.html', {
            blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        });

        workbox.routing.registerRoute(
            /\.(?:png|gif|jpg|jpeg)$/,
            workbox.strategies.cacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );

        // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
        workbox.routing.registerRoute(
            /^https:\/\/fonts\.googleapis\.com/,
            new workbox.strategies.StaleWhileRevalidate({
                cacheName: 'google-fonts-stylesheets',
            }),
        );

        // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
        workbox.routing.registerRoute(
            /^https:\/\/fonts\.gstatic\.com/,
            new workbox.strategies.CacheFirst({
                cacheName: 'google-fonts-webfonts',
                plugins: [
                    new workbox.cacheableResponse.Plugin({
                        statuses: [0, 200],
                    }),
                    new workbox.expiration.Plugin({
                        maxAgeSeconds: 60 * 60 * 24 * 365,
                    }),
                ],
            }),
        );

    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
}