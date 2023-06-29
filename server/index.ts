import { fileServer } from "./file_server.ts";

fileServer(
    { port: 80 },
    {
        root: 'client/',
        notFoundPath: '404/',
        defaultFile: 'index.html'
    }
);
