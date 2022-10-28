const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    if (req.url === '/')
    {
        let filePath = path.join(__dirname,'public','home.html');
        let contentType = getFileType(filePath) || 'text/html';
        let emptyPage = path.join(__dirname,'public','404.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err)
            {
                if(err.code === 'ENOENT'){
                    fs.readFile(emptyPage, 'utf8', (err, data) => {
                        res.writeHead(200, {'Content-Type': contentType});
                        res.end(data);
                    });
                }else{
                    res.writeHead(500);
                    res.end("Server Error")
                }
            }
            if (!err){
                res.writeHead(200, {'Content-Type': contentType});
                res.end(data);
            }
        })
    }
    if (req.url === '/about')
    {
        let filePath = path.join(__dirname,'public','about.html');
        let contentType = getFileType(filePath) || 'text/html';
        let emptyPage = path.join(__dirname,'public','404.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err)
            {
                if(err.code === 'ENOENT'){
                    fs.readFile(emptyPage, 'utf8', (err, data) => {
                        res.writeHead(200, {'Content-Type': contentType});
                        res.end(data);
                    });
                }else{
                    res.writeHead(500);
                    res.end("Server Error")
                }
            }
            if (!err){
                res.writeHead(200, {'Content-Type': contentType});
                res.end(data);
            }
        })
    }
    if (req.url === '/contact')
    {
        let filePath = path.join(__dirname,'public','contact.html');
        let contentType = getFileType(filePath) || 'text/html';
        let emptyPage = path.join(__dirname,'public','404.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err)
            {
                if(err.code === 'ENOENT'){
                    fs.readFile(emptyPage, 'utf8', (err, data) => {
                        res.writeHead(200, {'Content-Type': contentType});
                        res.end(data);
                    });
                }else{
                    res.writeHead(500);
                    res.end("Server Error")
                }
            }
            if (!err){
                res.writeHead(200, {'Content-Type': contentType});
                res.end(data);
            }
        })
    }
});

const getFileType = (filePath) => {
    let extname = path.extname(filePath);
    if(extname === '.js'){
        return 'text/javascript';
    }
    if(extname === '.css'){
        return 'text/css';
    }
    if(extname === '.html'){
        return 'text/html';
    }
    if(extname === '.png'){
        return 'image/png';
    }
    if (extname === '.jpg'){
        return 'image/jpg';
    }
}

server.listen(4000, () => console.log("Server listening...."))