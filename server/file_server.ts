import { getContentType } from "./routing/get_content_type.ts";
import { readFileFromRequestURL } from "./routing/handle_file_request.ts";

export function fileServer(
    options: Deno.ServeOptions | Deno.ServeTlsOptions,
) {
    Deno.serve(
        options, 
        (request) => {
            return readFileFromRequestURL(new URL(request.url), getContentType(
                new URL(request.url).pathname,
                'html'
            )
        );
    });
}
