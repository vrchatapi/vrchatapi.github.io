const fs = require('fs');
const yaml = require('js-yaml');
const fetch = require('node-fetch');

const client_auth_id = process.env.GITHUB_USER
const client_auth_secret = process.env.GITHUB_TOKEN
let auth = "Basic " + Buffer.from(client_auth_id+":"+client_auth_secret).toString('base64')

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
        let file = body.tree.filter(f => repoName == "vrchatapi-dart" ? (f.path == "vrchat_dart/README.md") : (f.path == "README.md"))[0];
        fetch(file.url, {
            method: 'GET',
            headers: headers,
        })
            .then(response => response.json())
            .then(callback)
            .catch(console.err);
    })
    .catch(console.err);
}

try {
    let fileContents = fs.readFileSync('_config.yml', 'utf8');
    let data = yaml.load(fileContents);

    data.sdks.forEach(sdk => {
        console.log(sdk.repo)
        downloadRepoInfo(sdk.repo, function(body) {
            fs.writeFileSync('_data/github/repo_' + sdk.id + '.json', JSON.stringify(body));
        });

        downloadRepoReleases(sdk.repo, function(body) {
            fs.writeFileSync('_data/github/releases_' + sdk.id + '.json', JSON.stringify(body));
        });

        downloadRepoREADME(sdk.repo, function(body) {
            body.decoded = Buffer.from(body.content, 'base64').toString('utf8');
            fs.writeFileSync('_data/github/readme_' + sdk.id + '.json', JSON.stringify(body));
        });
    });
    console.log("OK");
} catch (e) {
    console.error(e);
}