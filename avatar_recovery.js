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
            for(let i = 0; i < avatars.length; i++) {
                console.log(i + ") " + avatars[i].name + " - " + avatars[i].description + " (" + avatars[i].imageUrl + ")");                
            }
            let index = parseInt(prompt("Please select avatar (number), -1 to cancel"));
            if(index == -1) {
                console.log("Cancelled");
            }else {
                let avatar = avatars[index];
                console.log("Setting avatar's releaseStatus to `public`");
                VRChatAPI.Avatar.Save({id: avatar.id, releaseStatus: 'public'}, function() {
                    console.log("Recovered avatar!");
                });
            }
        });
    });
});