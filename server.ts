import * as express from "express";
import * as path from "path";
import http = require("http");
import * as fs from "fs";

const port = process.env.PORT || 8484;
const env: string = process.env.NODE_ENV || "development";
let app: express.Application = express();
app.use(express.static(__dirname));
app.use("/src", express.static("src"));
app.use("/node_modules", express.static("node_modules"));
app.get("*", (request, response, next) => {
    response.sendFile("index.html", { root: __dirname });
});

let contents = fs.readFileSync("env-config.json", "utf8");
let config = JSON.parse(contents);
config.node_env = env;
let json = JSON.stringify(config);
fs.writeFileSync("env-config.json", json, { encoding: "utf8" });

http.createServer(<any>app).listen(port);