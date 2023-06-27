import { ContentType } from "../type/content_types.ts";

export function responseWithContentType(
    path : string,
    contentType : ContentType
) {
    return new Response(
        Deno.readFileSync(path),
        {
            headers: {
                'content-type': contentType
            }
        }
    )
}
