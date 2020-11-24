var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {
        'Set-Cookie':[
            'yummy_cookie=choch',
            'tasty_cookie=strawberry',
            `Permanent=cookies; Max-Age={60*60*24*30}`,
            'Secure=Secure; Secure',    
            'HttpOnly=HttpOnly; HttpOnly',  //JS로 제어X
            'Path=Path; Path=/cookie',   // 해당 Path에만 남아있음
            'Domain=Domain; Domain=o2.org'  // 어떠한 Domain에서 동작하는지
        ]
    });
    response.end('Cookie!!');
}).listen(3000);