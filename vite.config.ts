import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import fs from "fs";
import sharp from "sharp";
import { base_profile, extended_profile, webpage_config } from "./src/config";

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
                                .toFormat("webp", { quality: 70 })
                                .toFile(
                                    folder +
                                        "/" +
                                        name.replace(/\.[^/.]+$/, ".webp")
                                )
                                .then(() =>
                                    console.log(folder + "/" + name, "-> webp")
                                )
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
                            .then(() => {})
                            .catch((e) => console.error(e));
                    },
                },
                {
                    name: "MetaTag",
                    async writeBundle() {
                        let html = `
                            <title>${webpage_config.title}</title>
                            <meta name="description" content="${webpage_config.desc}">
                            <meta name="keywords" content="${webpage_config.keywords}">
                            <meta property="og:title" content="${webpage_config.title}">
                            <meta property="og:description" content="${webpage_config.desc}">
                            <meta property="og:desc" content="${webpage_config.desc}">
                            <meta property="profile:first_name" content="${base_profile.first_name}">
                            <meta property="profile:last_name" content="${base_profile.last_name}">
                        `;

                        if (extended_profile.username) {
                            html += `
                                <meta property="profile:username" content="${extended_profile.username}">
                            `;
                        }

                        if (extended_profile.gender) {
                            html += `
                                <meta property="profile:gender" content="${extended_profile.gender}">
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
    assetsInclude: ["**/*.docx"],
});
