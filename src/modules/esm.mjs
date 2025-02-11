import path from "path";
import {createServer as createServerHttp}  from 'http';
import './files/c.js'
import {fileURLToPath} from "url";
const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json',
    {
        with: {type: 'json'}
    });
} else {
    unknownObject = await import('./files/b.json',
        {
            with: {type: 'json'}
        });
}

//console.log(`Release ${release()}`);
console.log(`Version ${process.versions.nodeho}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {unknownObject, myServer};

