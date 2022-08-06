const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const port = 4173;

app.use(compression());
app.use("/", express.static(path.join(__dirname, "dist")));

app.listen(port, () => {
    console.log(`Attach app listening on port ${port}`);
});
