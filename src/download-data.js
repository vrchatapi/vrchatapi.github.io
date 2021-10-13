const fs = require('fs');
const fetch = require('node-fetch');

const client_auth_id = process.env.GITHUB_USER
const client_auth_secret = process.env.GITHUB_TOKEN
let auth = "Basic " + Buffer.from(client_auth_id + ":" + client_auth_secret).toString('base64')

let headers = {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Authorization": auth
}

function downloadRepoInfo(repoName, callback) {
    fetch('https://api.github.com/repos/vrchatapi/' + repoName, {
        method: 'GET',
        headers: headers,
    })
        .then(response => response.json())
        .then(callback)
        .catch(console.err);
}

function downloadRepoReleases(repoName, callback) {
    fetch('https://api.github.com/repos/vrchatapi/' + repoName + '/releases', {
        method: 'GET',
        headers: headers,
    })
        .then(response => response.json())
        .then(callback)
        .catch(console.err);
}

function downloadRepoREADME(repoName, callback) {
    fetch('https://api.github.com/repos/vrchatapi/' + repoName + '/git/trees/main', {
        method: 'GET',
        headers: headers,
    })
        .then(response => response.json())
        .then(body => {
            function returnFile(url) {
                fetch(url, {
                    method: 'GET',
                    headers: headers,
                })
                    .then(response => response.json())
                    .then(callback)
                    .catch(console.err);
            }

            if (repoName == "vrchatapi-dart") {
                let file = body.tree.filter(f => f.path == "vrchat_dart")[0];
                fetch(file.url, {
                    method: 'GET',
                    headers: headers,
                })
                    .then(response => response.json())
                    .then(body => {
                        let file = body.tree.filter(f => f.path == "README.md")[0];
                        returnFile(file.url);
                    })
                    .catch(console.err);
            } else {
                let file = body.tree.filter(f => f.path == "README.md")[0];
                returnFile(file.url);
            }
        })
        .catch(console.err);
}

try {
    const data = fs.readdirSync("content/sdk").map(f => f.split(".")[0]);

    data.forEach(sdk => {
        const repo = "vrchatapi-" + sdk;
        console.log(repo)
        downloadRepoInfo(repo, function (body) {
            fs.writeFileSync('data/github/repo/repo_' + sdk + '.json', JSON.stringify(body));
        });

        /*downloadRepoReleases(repo, function (body) {
            fs.writeFileSync('data/github/releases/releases_' + sdk + '.json', JSON.stringify(body));
        });*/

        downloadRepoREADME(repo, function (body) {
            body.decoded = Buffer.from(body.content, 'base64').toString('utf8');
            fs.writeFileSync('data/github/readme/readme_' + sdk + '.json', JSON.stringify(body));
        });
    });
    console.log("OK");
} catch (e) {
    console.error(e);
}