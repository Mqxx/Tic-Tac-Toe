import { ContentType } from "../type/content_types.ts";

export function responseWithContentType(
    body : BodyInit,
    contentType : ContentType
) {
    return new Response(
        body,
        {
            headers: {
                'content-type': contentType
            }
        }
    )
}
