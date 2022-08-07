/*
 This is a list of themes that I've premade. To use, edit the config.ts file.
*/

const pinkish = {
    name: "Pinkish",
    text: {
        base: "text-white",
        subtitle: "text-slate-400",
        bio: "text-slate-500",
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#192734]",
        links: "bg-[#192734]",
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
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#192734]",
        links: "bg-[#192734]",
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
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#395B64]",
        links: "bg-[#395B64]",
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

const firery = {
    name: "Firery",
    text: {
        base: "text-[#white]",
        subtitle: "text-[#FF0000]",
        bio: "text-[#FF0000]",
        "link-content": "text-[#FF0000]",
    },
    bg: {
        profile: "bg-[#111111]",
        links: "bg-[#111111]",
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

const dracula = {
    name: "Dracula",
    text: {
        base: "text-[#f8f8f2]",
        subtitle: "text-[#6272a4]",
        bio: "text-[#6272a4]",
        "link-content": "text-[#6272a4]",
    },
    bg: {
        profile: "bg-[#44475a]",
        links: "bg-[#44475a]",
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
        download: "fill-[#50fa7b]",
    },
};

const themes = [pinkish, blueish, ocean, dracula];
const funky = [...themes, firery];

function fromParams(params: URLSearchParams) {
    const theme = params.get("theme");
    if (theme != null) {
        switch (theme) {
            case "pinkish":
                return pinkish;
            case "blueish":
                return blueish;
            case "ocean":
                return ocean;
            case "firery":
                return firery;
            case "dracula":
                return dracula;
        }
    }
    return null;
}

export function getRandomTheme() {
    const params = new URLSearchParams(document.location.search);
    const forced = fromParams(params);
    if (forced != null) {
        return forced;
    }
    if (params.get("funky") == "true") {
        return funky[Math.floor(Math.random() * funky.length)];
    }
    return themes[Math.floor(Math.random() * themes.length)];
}

export function getRandomFunkyTheme() {
    const params = new URLSearchParams(document.location.search);
    const forced = fromParams(params);
    if (forced != null) {
        return forced;
    }
    return funky[Math.floor(Math.random() * funky.length)];
}

export default themes;
