var http = require('http');

function testGroupmeCallback(res) {
    document.write(res);
}

function testGroupmeFunction(callback) {
    const options = {
        protocol: 'https:',
        hostname: 'api.groupme.com/v3',
        path: '/groups?token=441099a0998a0135f42d1be571d9ef1',
        method: 'GET'
    };
    http.get('http://api.groupme.com/v3/groups?token=441099a0998a0135f42d1be571d9ef1', callback);
}

testGroupmeFunction(testGroupmeCallback);