var testGROUPME = "{\n\t\"message\": {\n\t\t\"source_guid\": \"11111111\",\n\t\t\"text\": \"01001000 01100101 01101100 01101100 01101111 00100001\",\n\t\t\"attachments\": []\n\t},\n\t\"token\": \"441099a0998a0135f42d1be571d9ef1\"\n}";


function parseMessages(t) {
    document.write(t);
    
    //var data = JSON.parse(text);
    //var len = data.messages.length;
}

function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}

function testGroupmeCallback(t) {
    document.write(t);
}

function httpPost(url, data, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("POST", url, true);
    xmlHttp.send(data);
}

var hpost_base = "https://api.groupme.com/v3/groups/18268055/messages";
var hget_base = hpost_base + "?token=441099a0998a0135f42d1be571d9ef13&limit=100&";

httpPost(hpost_base, testGROUPME, testGroupmeCallback);