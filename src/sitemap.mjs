"use strict";
import fs from 'fs';
import yaml from 'yaml';
import toml from 'toml';
import fetch from 'node-fetch';
import xmlbuilder from 'xmlbuilder';

function loadConfig() {
    const body = fs.readFileSync("config.toml", "utf8");
    return toml.parse(body);
}

async function getOpenAPIURLs(CONFIG) {
    const API_PATH = CONFIG["baseURL"] + "/docs/api";
    let URLs = [];
    // Download latest spec
    const response = await fetch('https://vrchatapi.github.io/specification/openapi.yaml');
    const body = await response.text();
    const spec = yaml.load(body);

    // Parse URLs from spec
    for(const pathUrl in spec.paths) {
        const path = spec.paths[pathUrl];

        for(const method in path) {
            if (method == "parameters") {
                continue;
            }
            const url = API_PATH + "#" + method + "-" + pathUrl.replace('{', '-').replace('}', '-');
            // console.log(url);
            URLs.push(url);
        }
    }
    return URLs;
}

async function getJekyllURLs(CONFIG) {
    const PATH = CONFIG["baseURL"];
    const FOLDERS = ["sdk", "tutorials"];
    let URLs = [];
    URLs.push(PATH + ""); // Index
    URLs.push(PATH + "/docs/api"); // API Docs
    for(const folder of FOLDERS) {
        for(const fileName of fs.readdirSync("./content/" + folder)) {
            URLs.push(PATH + "/" + folder + "/" + fileName.split(".")[0]);
        }
    }
    return URLs;
}

const CONFIG = loadConfig();

let URLs = [];

URLs.push(...await getJekyllURLs(CONFIG))
URLs.push(...await getOpenAPIURLs(CONFIG));

// Generate sitemap
let builder = xmlbuilder.create("urlset", { encoding: 'utf-8' })
    .att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

for (const url of URLs) {
    builder = builder.ele("url")
                .ele("loc", url).up()
            .up();
}

const sitemap = builder.end({ pretty: true });

// Write sitemap to file
fs.writeFileSync("sitemap.xml", sitemap);
console.log(sitemap)