import { parsePath } from "./routing/parse_path.ts";

export function serveFiles(
    rootDirectory : string,
    defaultFile : string,
    options: Deno.ServeOptions | Deno.ServeTlsOptions
) {
    Deno.serve(
        options,
        async (request) => {
            const requestURL = new URL(request.url)
            const defaultPath = parsePath(requestURL.pathname, defaultFile)

            try {
                const file = await Deno.readFile(rootDirectory + defaultPath);
                return new Response(file);
            } catch(error) {
                if (error instanceof Deno.errors.NotFound) {
                    return new Response('File not found!');
                } else {
                    return new Response(error);
                }
            }
        }
    );
}

