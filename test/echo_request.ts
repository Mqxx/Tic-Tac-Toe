function getHeader(header : Headers) {
    const headers : {[key : string] : string} = {};
    [...header].forEach(([key, value]) => {
        headers[key] = value
    });

    return headers;
}

Deno.serve({
    port: 80
}, (request) => {
    

    const response = {
        url: request.url,
        method: request.method,
        bodyUsed: request.bodyUsed,
        cache: request.cache ? request.cache : 'undefinded',
        credentials: request.credentials ? request.credentials : 'undefined',
        destination: request.destination ? request.destination : 'undefined',
        redirect: request.redirect ? request.redirect : 'undefined',
        referrer: request.referrer ? request.referrer : 'undefined',
        referrerPolicy: request.referrerPolicy ? request.referrerPolicy : 'undefined',
        integrity: request.integrity ? request.integrity : 'undefined',
        isHistoryNavigation: request.isHistoryNavigation ? request.isHistoryNavigation : 'undefined',
        isReloadNavigation: request.isReloadNavigation ? request.isReloadNavigation : 'undefined',
        keepalive: request.keepalive ? request.keepalive : 'undefined',
        mode: request.mode ? request.mode : 'undefined',
        signal: {
            aborted: request.signal.aborted,
            reason: request.signal.reason ? request.signal.reason : 'undefined'
        },
        headers: getHeader(request.headers),
    }

    console.log(request);
    
    const file = Deno.readFileSync('.' + new URL(request.url).pathname)

    try {
        return new Response(new TextEncoder().encode(new TextDecoder().decode(file).replace(
            '{request}',
            JSON.stringify(
                response,
                null,
                4
            )
        )));
    } catch (e) {
        console.log(e);
        return new Response(e)
    }
})

