import { getContentType } from "./routing/get_content_type.ts";
import { readFileFromRequestURL } from "./routing/read_file_from_request_url.ts";

export function fileServer(
    options: Deno.ServeOptions | Deno.ServeTlsOptions,
) {
    Deno.serve(
        options, 
        (request) => {
            const requestURL = new URL(request.url)
            return readFileFromRequestURL(
                requestURL,
                getContentType(
                    requestURL.pathname,
                    'html'
                )
            );
        }
    );
}
