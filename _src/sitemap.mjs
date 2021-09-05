import fs from 'fs';
import yaml from 'js-yaml';
import fetch from 'node-fetch';
import xmlbuilder from 'xmlbuilder';

const DISPLAY_PATH = "https://vrchatapi.github.io/docs/api";

// Download latest spec
const response = await fetch('https://vrchatapi.github.io/specification/openapi.yaml');
const body = await response.text();
const spec = yaml.load(body);

let URLS = [];

// Parse URLs from spec
for(const pathUrl in spec.paths) {
    const path = spec.paths[pathUrl];

    for(const method in path) {
        if (method == "parameters") {
            continue;
        }
        const url = DISPLAY_PATH + "#" + method + "-" + pathUrl.replace('{', '-').replace('}', '-');
        console.log(url);
        URLS.push(url);
    }
}

// Generate sitemap
let builder = xmlbuilder.create("urlset", { encoding: 'utf-8' })
    .att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

for (const url of URLS) {
    builder = builder.ele("url")
                .ele("loc", url).up()
            .up();
}

const sitemap = builder.end({ pretty: true });

// Write sitemap to file
fs.writeFileSync("sitemap.xml", sitemap);
console.log(sitemap)