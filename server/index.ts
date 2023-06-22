import { serveFiles } from "./routing/serve_files.ts";

serveFiles(
    {
        rootDirectory: './client',
        defaultFile: 'index.html',
        notFound: '404.html'
    },
    { port: 80 }
);
