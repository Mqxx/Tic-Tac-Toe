import { getContentType } from "./routing/get_content_type.ts";
import { pathDefaultFile } from "./routing/path_default_file.ts";
import { readFileFromRequestURL } from "./routing/read_file_from_request_url.ts";
import { responseWithContentType } from "./routing/response_with_content_type.ts";

export function fileServer(
    options : Deno.ServeOptions | Deno.ServeTlsOptions,
    directory : {
        root : string,
        defaultFile : string,
        notFoundPath : string
    }
) {
    Deno.serve(
        options, 
        (request) => {
            const requestURL = new URL(request.url);
            
            const referer = request.headers.get('referer')

            let path = ''

            if (referer) {
                path = new URL(referer).pathname;
            }
            
            const parsedPath = pathDefaultFile(directory.root + '/' + path + requestURL.pathname, directory.defaultFile);

            return responseWithContentType(
                readFileFromRequestURL(
                    parsedPath,
                    pathDefaultFile(directory.root + '/' + directory.notFoundPath, directory.defaultFile)
                ),
                getContentType(
                    requestURL.pathname,
                    'html'
                )
            );
        }
    );
}
