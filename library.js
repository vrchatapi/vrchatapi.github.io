var VRChatAPI = {};

(function() {

    var CLIENT_API_KEY = null;
    var BASE_URL = "https://api.vrchat.cloud/api/1/";
    var AUTH_DETIALS = {};
    var AUTH_TOKEN = null;

    VRChatAPI.Init = function(callback, error) {
        doRequest("config", "GET", null, null, function(data) {
            CLIENT_API_KEY = data.clientApiKey;
            callback(data);
        }, error);    
    }

    VRChatAPI.Login = function(username, password, callback, error) {
        doRequest("auth/user", "GET", null, {username: username, password: password}, function(data) {
            AUTH_TOKEN = data.authToken
            callback(data);
        }, error);
    }

    function doRequest(url, method, data, creds, callback, error) {
        let xhttp = createCORSRequest(method, url);
        if(error == undefined || error === null) error = console.log;
        if(callback == undefined || callback === null) callback = console.error;
        xhttp.onload = function() {
            callback(JSON.parse(xhttp.responseText));
        }
        xhttp.onerror = function() {
            error(xhttp.responseText);            
        }
        if(creds != null) {
            xhttp.setRequestHeader("Authorization", "Basic " + btoa(creds.username + ":" + creds.password));            
        }
        if(AUTH_TOKEN != null) {
            xhttp.setRequestHeader("Cookie", "auth=" + AUTH_TOKEN);            
        }
        if(data == null) {
            xhttp.send();
        }else {
            xhttp.send(JSON.stringify(data));
        }
    }

    function createCORSRequest(method, url){
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr){
            xhr.open(method, BASE_URL + url, true);
        } else if (typeof XDomainRequest != "undefined"){
            xhr = new XDomainRequest();
            xhr.open(method, BASE_URL + url);
        } else {
            xhr = null;
        }
        return xhr;
    }    

}());