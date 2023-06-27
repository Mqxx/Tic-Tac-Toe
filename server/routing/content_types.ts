export const contentTypes = {
    js: 'application/javascript',
    map: 'application/javascript',
    json: 'application/json',
    html: 'text/html',
    css: 'text/css',
    less: 'text/css'
} as const;

export type ContentType = typeof contentTypes[keyof typeof contentTypes]
export type ContentKey = keyof typeof contentTypes
