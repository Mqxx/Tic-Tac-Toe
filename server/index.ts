import { serveFiles } from "./serve_files.ts";

serveFiles(
    './client',
    'index.html',
    { port: 80 }
);
