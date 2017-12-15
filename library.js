var VRChatAPI = {};

(function() {

    var CLIENT_API_KEY = null;
    var BASE_URL = "https://api.vrchat.cloud/api/1/";
    var AUTH_DETIALS = {};
    var AUTH_TOKEN = null;
    var CURRENT_USER_ID = null;

    VRChatAPI.Init = function(callback, error) {
        doRequest("config", "GET", null, null, function(data) {
            CLIENT_API_KEY = data.clientApiKey;
            if(callback == undefined || callback === null) callback = console.error;
            callback(data);
        }, error);    
    }

    //////////////// User API ////////////////

    VRChatAPI.Login = function(username, password, callback, error) {
        doRequest("auth/user", "GET", {username: username, password: password}, function(data) {
            AUTH_TOKEN = data.authToken
            CURRENT_USER_ID = data.id;
            document.cookie = "auth=" + AUTH_TOKEN;
            if(callback == undefined || callback === null) callback = console.error;
            AUTH_DETIALS = {username: username, password: password};
            callback(data);
        }, error);
    }
    VRChatAPI.Logout = function() {
        AUTH_DETIALS = null;
        AUTH_TOKEN = null;
    }
    VRChatAPI.UpdateUserInfo = function(options, callback, error) {
        doRequest("users/" + CURRENT_USER_ID, "PUT", options, callback, error);
    }
    VRChatAPI.Friends = function(callback, error) {
        doRequest("auth/user/friends", "GET", null, callback, error);
    }
    VRChatAPI.FriendRequest = function(id, callback, error) {
        doRequest("user/" + id + "/friendRequest", "POST", null, callback, error);
    }
    VRChatAPI.Unfriend = function(id, callback, error) {
        doRequest("auth/user/friends/" + id, "DELETE", null, callback, error);
    }
    VRChatAPI.Users.Get = function(id, callback, error) {
        doRequest("users/" + id, callback, error);
    }
    VRChatAPI.Users.List = function(options, callback, error) {
        let active = "";
        if(options.active) {
            active = "/active"
        }
        delete options.postFix;
        doRequest("users" + active, "GET", options, callback, error);
    }

    //////////////// Avatar API ////////////////

    VRChatAPI.Avatar = {};
    VRChatAPI.Avatar.List = function(searchParams, callback, error) {
        doRequest("avatars", "GET", searchParams, callback, error)
    }
    VRChatAPI.Avatar.Save = function(data, callback, error) {
        if(data.id) {
            doRequest("avatars/" + data.id, "PUT", data, callback, error);
        }else {
            doRequest("avatars", "POST", data, callback, error);        
        }
    }
    VRChatAPI.Avatar.Get = function(id, callback, error) {
        doRequest("avatars/" + id, "GET", null, callback, error);
    }
    VRChatAPI.Avatar.Choose = function(id, callback, error) {
        doRequest("avatars/" + id + "/select", "PUT", null, callback, error);
    }
    VRChatAPI.Avatar.Delete = function(id, callback, error) {
        doRequest("avatars/" + id, "DELETE", null, callback, error);
    }

    //////////////// Helpers ////////////////

    function doRequest(url, method, data, callback, error) {
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
        if(xhttp == null) {
            console.error("Could not create CORS request");
            return;
        }
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
        if(AUTH_DETIALS != null) {
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
            xhr.withCredentials = true;
        } else if (typeof XDomainRequest != "undefined"){
            xhr = new XDomainRequest();
            xhr.open(method, url, true);
        } else {
            xhr = null;
        }
        return xhr;
    }    

}());