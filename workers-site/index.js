import { getAssetFromKV, serveSinglePageApp } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
	try {
		event.respondWith(handleEvent(event));
	} catch (error) {
		event.respondWith(new Response(`An unexpected problem occurred: ${error.stack}`, { status: 500 }));
	}
});

async function handleEvent(event) {
	try {
		// Get the request URL
		const url = new URL(event.request.url);
		
		
		// Get asset from KV (returns a Response object)
		let response = await getAssetFromKV(event, {
			mapRequestToAsset: serveSinglePageApp,
			cacheControl: {
				browserTTL: url.pathname.includes('/static/') ? 60 * 60 * 24 * 365 : url.pathname.includes('/images/') ? 60 * 60 * 24 : null,
				edgeTTL: url.pathname.includes('/images/') ? 60 * 60 * 24 : 60 * 60 * 24 * 365,
			},
		});


		// Modify headers
		response.headers.set('X-Content-Type-Options', 'nosniff');
		response.headers.set('X-XSS-Protection', '1; mode=block');
		response.headers.set('X-Frame-Options', 'SAMEORIGIN');
		response.headers.set('Referrer-Policy', 'same-origin');


		// Return response
		return response;
	} catch (error) {
		try {
			let pathname = new URL(event.request.url).pathname;
			
			if (error.message.includes('could not find')) {
				return new Response(`Not found: ${pathname}`, { status: 404 });
			}

			return new Response(`An unexpected error occurred: ${error.stack}`, { status: 500 });
		} catch (error) {
			return new Response(`Error: ${error}`);
		}
	}
}
