export function serverFiles(options: Deno.ServeOptions | Deno.ServeTlsOptions) {
    Deno.serve(
        options,
        () => {
            return new Response()
        }
    );
}

