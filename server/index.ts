import { serveFiles } from "./serve_files.ts";

serveFiles(
    {
        rootDirectory: './client',
        defaultFile: 'index.html',
        notFound: '404.html'
    },
    { port: 80 }
);
