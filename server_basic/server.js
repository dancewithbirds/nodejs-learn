
// require = import 
//  http module 을 불러서 http 변수에 담음
var http = require('http'); 


// create http module
// http 요청이 들어오면 function내부 코드를 실행
var server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello Node.js');
});

// listen 함수로 8080 포트를 가진 서버를 실행
server.listen(8080, () => console.log('Server is running...'));
