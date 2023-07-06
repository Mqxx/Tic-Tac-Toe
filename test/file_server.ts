Deno.serve({
    port: 80
}, (request) => {
    console.log(request);
    
    const headers : {[key : string] : string} = {};
    [...request.headers].forEach(([key, value]) => {
        headers[key] = value
    })

    const response = {
        bodyUsed: request.bodyUsed,
        headers: headers,
        methode: request.method,
        redirect: request.redirect ? request.redirect : 'undefined',
        url: request.url
    }

    return new Response(JSON.stringify(response, null, 4));
})
