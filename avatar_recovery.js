alert("First you need to login, we do not save the username and password anywhere!");
var username = prompt("Username");
var password = prompt("Password");
VRChatAPI.Init(function() {
    VRChatAPI.Login(username, password, function(user) {
        console.log("Logged as: " + user.username);
        console.log("User ID: " + user.id);
        VRChatAPI.Avatar.List({
            user: 'me',
            releaseStatus: 'hidden'
        }, function(avatars) {
            console.log(avatars);
        });
    });
});