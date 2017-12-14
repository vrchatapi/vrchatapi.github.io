var VRChatAPI = {};

(function() {

    var CLIENT_API_KEY = null;
    var BASE_URL = "https://api.vrchat.cloud/api/1/";
    var AUTH_DETIALS = {};
    var AUTH_TOKEN = null;

    VRChatAPI.Init = function(callback, error) {
        doRequest("config", "GET", null, null, function(data) {
            CLIENT_API_KEY = data.clientApiKey;
            if(callback == undefined || callback === null) callback = console.error;
            callback(data);
        }, error);    
    }

    VRChatAPI.Avatar = {};
    VRChatAPI.Avatar.List = function(searchParams, callback, error) {
        doRequest("avatars", "GET", searchParams, AUTH_DETIALS, callback, error)
    }

    VRChatAPI.Avatar.Save = function(data, callback, error) {
        if(data.id) {
            doRequest("avatars/" + data.id, "PUT", data, AUTH_DETIALS, callback, error);
        }else {
            doRequest("avatars", "POST", data, AUTH_DETIALS, callback, error);        
        }
    }

    VRChatAPI.Login = function(username, password, callback, error) {
        doRequest("auth/user", "GET", null, {username: username, password: password}, function(data) {
            AUTH_TOKEN = data.authToken
            document.cookie = "auth=" + AUTH_TOKEN;
            if(callback == undefined || callback === null) callback = console.error;
            AUTH_DETIALS = {username: username, password: password};
            callback(data);
        }, error);
    }

    function doRequest(url, method, data, creds, callback, error) {
        url = BASE_URL + url;
        if(CLIENT_API_KEY !== null) {
            let temp = new URL(url);
            temp.searchParams.append('apiKey', CLIENT_API_KEY);
            if(method == 'GET' && data != null) {
                for(var name in data) {
                    temp.searchParams.append(name, data[name]);
                }
            }
            url = temp.toString();
        }
        let xhttp = createCORSRequest(method, url);
        xhttp.withCredentials = true;
        if(error == undefined || error === null) error = console.log;
        if(callback == undefined || callback === null) callback = console.error;
        xhttp.onreadystatechange = function() {
            if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                callback(JSON.parse(this.responseText));
            }else if(this.readyState == XMLHttpRequest.DONE) {
                // TODO Better error handling
                error(JSON.parse(this.responseText));
            }
        }
        if(creds != null) {
            xhttp.setRequestHeader("Authorization", "Basic " + btoa(creds.username + ":" + creds.password));            
        }
        // add this when we can, we will use creds until then
        // if(AUTH_TOKEN != null) {
        //     xhttp.setRequestHeader("Cookie", "auth=" + AUTH_TOKEN);            
        // }
        if(data == null) {
            xhttp.send();
        }else {
            xhttp.send(JSON.stringify(data));
        }
    }

    function createCORSRequest(method, url){
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr){
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined"){
            xhr = new XDomainRequest();
            xhr.open(method, url, true);
        } else {
            xhr = null;
        }
        return xhr;
    }    

}());