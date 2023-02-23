addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    const request_path = new URL(event.request.url).pathname;
    const asset_url = new URL(request_path === "/" ? `${VERSION_ID}/index.html` : `${VERSION_ID}${request_path}`, `file://`);
    return fetch(asset_url);

  } catch (e) {
    return new Response(e.message || e.toString(), { status: 500 })
  }
}
