const fs = require('fs');
const yaml = require('js-yaml');
const fetch = require('node-fetch');

function downloadRepoInfo(repoName, callback) {
    fetch('https://api.github.com/repos/vrchatapi/' + repoName)
    .then(response => response.json())
    .then(callback);
}

function downloadRepoReleases(repoName, callback) {
    fetch('https://api.github.com/repos/vrchatapi/' + repoName + '/releases')
    .then(response => response.json())
    .then(callback);
}

function downloadRepoREADME(repoName, callback) {
    fetch('https://api.github.com/repos/vrchatapi/' + repoName + '/git/trees/main')
    .then(response => response.json())
    .then(body => {
        let file = body.tree.filter(f => repoName == "vrchatapi-dart" ? (f.path == "vrchat_dart/README.md") : (f.path == "README.md"))[0];
        fetch(file.url)
            .then(response => response.json())
            .then(callback);
    });
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