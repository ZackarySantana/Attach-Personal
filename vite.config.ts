import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import fs from "fs";
import sharp from "sharp";
import {
    base_profile as bp,
    extended_profile as ep,
    webpage_config as c,
} from "./src/config";

export default defineConfig({
    plugins: [solidPlugin()],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
        rollupOptions: {
            plugins: [
                {
                    name: "picture-webp",
                    async writeBundle() {
                        const folder = "dist";
                        const files = fs
                            .readdirSync(folder)
                            .filter(
                                (f) =>
                                    f.toLowerCase().endsWith(".png") ||
                                    f.toLowerCase().endsWith(".jpg")
                            );

                        const promises = files.map((name) =>
                            sharp(fs.readFileSync(folder + "/" + name))
                                .resize({
                                    fit: sharp.fit.contain,
                                    width: name.includes("profile")
                                        ? 150
                                        : name.includes("banner")
                                            ? 455
                                            : undefined,
                                    height: name.includes("banner")
                                        ? 130
                                        : undefined,
                                })
                                .toFile(folder + "/" + name)
                                .then(async () => {
                                    await sharp(
                                        fs.readFileSync(folder + "/" + name)
                                    )
                                        .toFormat("webp", { quality: 70 })
                                        .toFile(
                                            folder +
                                            "/" +
                                            name.replace(
                                                /\.[^/.]+$/,
                                                ".webp"
                                            )
                                        )
                                        .then(() => { })
                                        .catch((e) =>
                                            console.log(
                                                "Failed converting",
                                                name,
                                                e,
                                                "skipping..."
                                            )
                                        );
                                    console.log(folder + "/" + name, "-> webp");
                                })
                                .catch((e) =>
                                    console.log(
                                        "Failed converting",
                                        name,
                                        e,
                                        "skipping..."
                                    )
                                )
                        );

                        Promise.all(promises)
                            .then(() => { })
                            .catch((e) => console.error(e));
                    },
                },
                {
                    name: "MetaTag",
                    async writeBundle() {
                        let html = `
                        <title>${c.title}</title>
                        <meta name="description" content="${c.desc}">
                        <meta name="keywords" content="${c.keywords}">
                        <meta property="og:title" content="${c.title}">
                        <meta property="og:site_name" content="${c.title}">
                        <meta property="og:description" content="${c.desc}">
                        <meta property="og:updated_time" content="${Date.now()}" />
                        <meta property="og:image:type" content="image/png" />
                        <meta property="og:image:alt" content="Profile" />
                        <meta property="profile:first_name" content="${bp.first_name
                            }">
                        <meta property="profile:last_name" content="${bp.last_name
                            }">
                        `;

                        if (ep.username) {
                            html += `
                                <meta property="profile:username" content="${ep.username}">
                            `;
                        }

                        if (ep.gender) {
                            html += `
                                <meta property="profile:gender" content="${ep.gender}">
                            `;
                        }

                        const fileData = fs
                            .readFileSync("dist/index.html")
                            .toString()
                            .replace(/<!-- BUILD_REPLACE -->/g, html);
                        fs.writeFileSync("dist/index.html", fileData);
                    },
                },
            ],
        },
    },
});
