const http = require("http");
const PORT = 3000;

const server = http.createServer((request, response) => {
    
    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (request.url === "/") {

        response.statusCode = 200;
        response.write("Георгий, моя ссылка на гитхаб: https://github.com/GeorgeMusiichuk");
        response.end();
    } else if (request.url === "/contact") {
        response.statusCode = 200;
        response.write("EMAIL: arfeev1230@gmail.com");
        response.end();
    } else {
        response.statusCode = 404;
        response.write("Такой страницы не существует...");
        response.end();
    }

});
 
server.listen(PORT);
console.log(`Сервер был запущен по адресу http://localhost:${PORT}`);