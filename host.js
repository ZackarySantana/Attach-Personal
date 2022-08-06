const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const path = require("path");
const app = express();

const port = 4173;

app.use(compression());
app.use(helmet());

app.use("/", (_, res, next) => {
    res.set("Cache-control", "public, max-age=300");
    res.set("Content-Security-Policy", "default-src 'self' data:");

    next();
});

app.use("/", express.static(path.join(__dirname, "dist")));

app.listen(port, () => {
    console.log(`Attach is listening on port ${port}`);
});
