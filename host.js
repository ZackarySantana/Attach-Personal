const express = require("express");
const fs = require("fs");
const cron = require("node-cron");
const compression = require("compression");
const helmet = require("helmet");
const path = require("path");
const app = express();

const port = 4173;
const dist_dir = path.join(__dirname, "dist");
const data_dir = path.join(__dirname, "data");
const page_views_file = path.join(data_dir, "page_views");
const likes_file = path.join(data_dir, "likes");
const clicks_file = path.join(data_dir, "clicks");

app.use(compression());
app.use(helmet());

if (!fs.existsSync(data_dir)) fs.mkdirSync(data_dir);
app.locals.page_views = 0;
app.locals.likes = 0;
app.locals.clicks = {};

cron.schedule("20,50 * * * * *", () => {
    try {
        fs.writeFileSync(page_views_file, app.locals.page_views + "");
        fs.writeFileSync(likes_file, app.locals.likes + "");
        fs.writeFileSync(clicks_file, JSON.stringify(app.locals.clicks));
    } catch (err) {
        console.log(err);
    }
    console.log("Backed up stats!");
});

readFile(page_views_file, (data) => {
    app.locals.page_views = parseInt(data);
});

readFile(likes_file, (data) => {
    app.locals.likes = parseInt(data);
});

readFile(clicks_file, (data) => {
    app.locals.clicks = JSON.parse(data);
});

app.get("/page_views", (_, res) => {
    res.send(JSON.stringify({ page_views: app.locals.page_views }));
});

app.get("/likes", (_, res) => {
    res.send(JSON.stringify({ likes: app.locals.likes }));
});

app.get("/stats", (_, res) => {
    res.send({
        views: app.locals.page_views,
        likes: app.locals.likes,
        clicks: app.locals.clicks,
    });
    // res.sendFile(path.join(dist_dir, "/admin.html"));
});

app.use(express.text());

app.post("/page_views", () => {
    ++app.locals.page_views;
});

app.post("/likes", (req, _) => {
    if (req.body == "true") {
        ++app.locals.likes;
    } else {
        if (app.locals.likes > 0) {
            --app.locals.likes;
        }
    }
});

app.post("/clicks", (req, _) => {
    console.log(req.body);
    if (!Object.hasOwn(app.locals.clicks, req.body)) {
        app.locals.clicks[req.body] = 0;
    }
    app.locals.clicks[req.body] = parseInt(app.locals.clicks[req.body]) + 1;
    console.log(app.locals.clicks);
});

app.use("/", (req, res, next) => {
    res.set("Cache-control", "public, max-age=14400"); // 14400s = 60s/m * 60m/h * 4h
    res.set(
        "Content-Security-Policy",
        "default-src 'self' data:; style-src 'self' 'unsafe-inline';"
    );
    if (req.path === "/") {
        ++app.locals.page_views;
    }

    next();
});

app.use("/", express.static(dist_dir));

app.listen(port, () => {
    console.log(`Attach is listening on port ${port}`);
});

function readFile(path, callback) {
    fs.readFile(path, "utf-8", function (err, data) {
        if (err) {
            if (err.code !== "ENOENT") {
                console.log(err);
            }
            return;
        }

        try {
            callback(data);
        } catch (err) {
            console.log(err);
        }
    });
}
