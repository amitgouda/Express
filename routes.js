const fs = require('fs');

const requestHandler = (req, resp) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        resp.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');

        return resp.end();
    }

    const body = [];

    if (url === '/message' && method === 'POST') {

        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, (error) => {
                resp.statusCode = 302;
                resp.setHeader('Location', '/');
                return resp.end();
            });


        });



    }

    resp.setHeader('Wc', 'text/html');
    resp.write('<html><body> Amit</body ></html > ');
    resp.end();
}

module.exports = {
    handler : requestHandler,
    text : 'Hey '
};