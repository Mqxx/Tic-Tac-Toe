import { contentTypes } from "./content_types.ts";
import { getContentType } from "./get_content_type.ts";
import { parsePath } from "./parse_path.ts";

export function FileServer(
    directories : {
        defaultFile : string,
        rootDirectory : string,
        notFoundDirectory : string
    },
    options: Deno.ServeOptions | Deno.ServeTlsOptions
) {
    Deno.serve(
        options,
        async (request) => {
            const requestURL = new URL(request.url);
            const defaultPath = parsePath(requestURL.pathname, directories.defaultFile);
            let contentType = getContentType(defaultPath, '*/*');
            let file : Uint8Array;

            try {
                file = await Deno.readFile(directories.rootDirectory + defaultPath);
            } catch(error) {
                if (error instanceof Deno.errors.NotFound) {
                    file = await Deno.readFile(directories.rootDirectory + '/' + directories.notFoundDirectory + '/' + directories.defaultFile);
                    contentType = contentTypes['html']
                } else {
                    file = error
                    contentType = contentTypes['js']
                }
            }

            return new Response(file, {
                headers: { 'content-type': contentType }
            });
        }
    );
}

