const http = require('http');

const server = http.createServer((req, res) => {
    const now = new Date();
    console.log(`Sayfa yenilendi: ${now.toLocaleString()}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Worladsfadsd112131231\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});
