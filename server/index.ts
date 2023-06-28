import { fileServer } from "./file_server.ts";

fileServer(
    { port: 80 },
    {
        defaultFile: 'index.html'
    }
);
