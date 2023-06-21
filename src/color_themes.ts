/*
 This is a list of themes that I've premade. To use, edit the config.ts file.
*/

import { colors } from "./config";

const pinkish = {
    name: "Pinkish",
    text: {
        base: "text-white",
        subtitle: "text-slate-400",
        bio: "text-slate-500",
        button: "text-white",
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#192734]",
        links: "bg-[#192734]",
        mask_links: "mask-image-[#192734]", // This should be the same as 'links'. This is to allow for disappearing text for short devices.
        main: "bg-[#14202b]",
        button: "bg-[#223647]",
    },
    skills: {
        bg: "bg-gray-600",
        text: "text-white",
        line: "bg-pink-500",
    },
    banner: {
        border: "border-pink-500",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-pink-700",
        to: "to-pink-500",
    },
    arrow: {
        expand: "fill-pink-500",
        download: "fill-white",
    },
};

const blueish = {
    name: "Blueish",
    text: {
        base: "text-white",
        subtitle: "text-slate-400",
        bio: "text-slate-500",
        button: "text-white",
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#192734]",
        links: "bg-[#192734]",
        mask_links: "mask-image-[#192734]", // This should be the same as 'links'. This is to allow for disappearing text for short devices.
        main: "bg-[#14202b]",
        button: "bg-[#223647]",
    },
    skills: {
        bg: "bg-gray-600",
        text: "text-white",
        line: "bg-blue-500",
    },
    banner: {
        border: "border-blue-500",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-blue-700",
        to: "to-blue-500",
    },
    arrow: {
        expand: "fill-blue-500",
        download: "fill-white",
    },
};

const ocean = {
    name: "Ocean",
    text: {
        base: "text-white",
        subtitle: "text-slate-200",
        bio: "text-[#E7F6F2]",
        button: "text-white",
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#395B64]",
        links: "bg-[#395B64]",
        mask_links: "mask-image-[#395B64]", // This should be the same as 'links'. This is to allow for disappearing text for short devices.
        main: "bg-[#2C3333]",
        button: "bg-[#497480]",
    },
    skills: {
        bg: "bg-gray-800",
        text: "text-white",
        line: "bg-[#1b2c30]",
    },
    banner: {
        border: "border-[#497480]",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-[#497480]",
        to: "to-[#497480]",
    },
    arrow: {
        expand: "fill-white",
        download: "fill-white",
    },
};

const dracula = {
    name: "Dracula",
    text: {
        base: "text-[#f8f8f2]",
        subtitle: "text-[#6272a4]",
        bio: "text-[#6272a4]",
        button: "text-[#f8f8f2]",
        "link-content": "text-[#6272a4]",
    },
    bg: {
        profile: "bg-[#44475a]",
        links: "bg-[#44475a]",
        mask_links: "mask-image-[#44475a]", // This should be the same as 'links'. This is to allow for disappearing text for short devices.
        main: "bg-[#282a36]",
        button: "bg-[#6272a4]",
    },
    skills: {
        bg: "bg-[#50fa7b]",
        text: "text-[#44475a]",
        line: "bg-[#bd93f9]",
    },
    banner: {
        border: "border-[#bd93f9]",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-[#bd93f9]",
        to: "to-[#bd93f9]",
    },
    arrow: {
        expand: "fill-[#50fa7b]",
        download: "fill-white",
    },
};

const light_fire = {
    name: "Light Fire",
    text: {
        base: "text-black",
        subtitle: "text-black",
        bio: "text-black",
        button: "text-white",
        "link-content": "text-gray-800",
    },
    bg: {
        profile: "bg-gray-100",
        links: "bg-gray-100",
        mask_links: "mask-image-gray-100", // This should be the same as 'links'. This is to allow for disappearing text for short devices.
        main: "bg-white",
        button: "bg-[#e23a4d]",
    },
    skills: {
        bg: "bg-[#e23a4d]",
        text: "text-white",
        line: "bg-[#e23a4d]",
    },
    banner: {
        border: "border-[#e23a4d]",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-[#e23a4d]",
        to: "to-[#e23a4d]",
    },
    arrow: {
        expand: "fill-[#e23a4d]",
        download: "fill-white",
    },
};

const firery = {
    name: "Firery",
    text: {
        base: "text-white",
        subtitle: "text-[#FF0000]",
        bio: "text-[#FF0000]",
        button: "text-white",
        "link-content": "text-[#FF0000]",
    },
    bg: {
        profile: "bg-[#111111]",
        links: "bg-[#111111]",
        mask_links: "mask-image-[#111111]", // This should be the same as 'links'. This is to allow for disappearing text for short devices.
        main: "bg-[#000000]",
        button: "bg-[#950101]",
    },
    skills: {
        bg: "bg-[#3D0000]",
        text: "text-white",
        line: "bg-[#FF0000]",
    },
    banner: {
        border: "border-[#950101]",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-[#3D0000]",
        to: "to-[#3D0000]",
    },
    arrow: {
        expand: "fill-[#FF0000]",
        download: "fill-white",
    },
};

// mongodb theme
const mongodb = {
    name: "MongoDB",
    text: {
        base: "text-[#e8e7d5]",
        subtitle: "text-[#e8e7d5]",
        bio: "text-[#e8e7d5]",
        button: "text-[#e8e7d5]",
        "link-content": "text-[#e8e7d5]",
    },
    bg: {
        profile: "bg-[#3fa037]",
        links: "bg-[#3fa037]",

        mask_links: "mask-image-[#3fa037]", // This should be the same as 'links'. This is to allow for disappearing text for short devices.
        main: "bg-[#3f3e42]",
        button: "bg-[#3fa037]",
    },
    skills: {
        bg: "bg-[#4db33d]",
        text: "text-[#FFFFFF]",
        line: "bg-[#4db33d]",
    },
    banner: {
        border: "border-[#4db33d]",
        "from-transparent": true,
        "to-transparent": false,
    },
    links_icon: {
        "from-transparent": false,
        "to-transparent": false,
    },
    gradient: {
        from: "from-[#4db33d]",
        to: "to-[#4db33d]",
    },
    arrow: {
        expand: "fill-[#e8e7d5]",
        download: "fill-white",
    },
};

const themes = [pinkish, blueish, ocean, dracula, light_fire, mongodb];
const funky = [...themes, firery];

function fromParams(params: URLSearchParams) {
    const theme = params.get("theme");
    if (theme != null) {
        switch (decodeURIComponent(theme.toLowerCase())) {
            case "pinkish":
                return pinkish;
            case "blueish":
                return blueish;
            case "ocean":
                return ocean;
            case "dracula":
                return dracula;
            case "light_fire":
            case "light fire":
            case "lightfire":
                return light_fire;
            case "firery":
                return firery;
            case "mongodb":
                return mongodb;
        }
    }
    return null;
}

export function getRandomTheme(force = true) {
    if (typeof document === "undefined") {
        return themes[0];
    }
    const params = new URLSearchParams(document.location.search);
    if (force) {
        const forced = fromParams(params);
        if (forced != null) {
            return forced;
        }
    }
    if (params.get("funky") == "true") {
        return funky[Math.floor(Math.random() * funky.length)];
    }
    return themes[Math.floor(Math.random() * themes.length)];
}

export function getRandomFunkyTheme(force = true, excludeCurrent = false) {
    if (typeof document === "undefined") {
        return themes[0];
    }
    if (force) {
        const params = new URLSearchParams(document.location.search);
        const forced = fromParams(params);
        if (forced != null) {
            return forced;
        }
    }
    if (excludeCurrent) {
        const sub = funky.filter((c) => c.name != colors.name);
        if (sub.length > 0) {
            return sub[Math.floor(Math.random() * sub.length)];
        }
    }
    return funky[Math.floor(Math.random() * funky.length)];
}

export default themes;
