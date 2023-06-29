import { getContentType } from "./routing/get_content_type.ts";
import { pathDefaultFile } from "./routing/path_default_file.ts";
import { readFileFromRequestURL } from "./routing/read_file_from_request_url.ts";

export function fileServer(
    options : Deno.ServeOptions | Deno.ServeTlsOptions,
    directory : {
        defaultFile : string
    }
) {
    Deno.serve(
        options, 
        (request) => {
            const requestURL = new URL(request.url)
            const parsedPath = pathDefaultFile(requestURL.pathname, directory.defaultFile);
            return readFileFromRequestURL(
                parsedPath,
                getContentType(
                    requestURL.pathname,
                    'html'
                )
            );
        }
    );
}
