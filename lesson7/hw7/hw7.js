const path = require("node:path");
const http = require("node:http");
const fs = require("node:fs/promises");

const PORT = 3000;

const sendFile = async (fileName, response, statusCode) => {
    const fullPath = path.join(__dirname, "public", `${fileName}.html`);
    const page = await fs.readFile(fullPath, 'utf-8');

    response.statusCode = statusCode;
    response.end(page);
}

const server = http.createServer(async (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.url === '/') {
        await sendFile("index", response, 200);
    } else if (request.url === '/rules') {
        await sendFile("rules", response, 200);
    } else {
        await sendFile("404", response, 404);
    }
});

server.listen(PORT);
console.log(`Сервер был запущен по адресу http://localhost:${PORT}`);