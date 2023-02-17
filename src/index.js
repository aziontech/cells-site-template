addEventListener('fetch', event => {
  event.respondWith(handleEvent(event.request))
})

async function handleEvent(request) {
  try {
    const request_path = new URL(request.url).pathname;
    const asset_url = new URL(request_path === "/" ? "index.html" : request_path, "file://");
    const response = await fetch(asset_url);
    return new Response(await response.blob());
  } catch (e) {
    return new Response(e.message || e.toString(), { status: 500 })
  }
}
