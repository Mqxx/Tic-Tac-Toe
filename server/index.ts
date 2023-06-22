import { FileServer } from "./routing/file_server.ts";

FileServer(
    {
        rootDirectory: './client',
        defaultFile: 'index.html',
        notFoundDirectory: '404'
    },
    { port: 80 }
);
