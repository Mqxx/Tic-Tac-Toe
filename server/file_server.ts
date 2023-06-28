import { getContentType } from "./routing/get_content_type.ts";
import { parsePath } from "./routing/parse_path.ts";
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
            const parsedPath = parsePath(requestURL.pathname, directory.defaultFile);
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
