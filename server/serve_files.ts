export function serverFiles() {
    Deno.serve({
        port: 80
    }, () => {
        return new Response()
    })
}

