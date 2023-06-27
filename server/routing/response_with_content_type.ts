import { ContentType } from "./content_types.ts";

export function responseWithContentType(path : URL, contentType : ContentType) {
    return new Response(
        Deno.readFileSync(path.pathname),
        {
            headers: {
                'content-type': contentType
            }
        }
    )
}
