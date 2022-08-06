import { Images } from "./app/profile";
import profileWebp from "./assets/profile.webp";
import profilePng from "./assets/profile.png";
// export { default as bannerWebp } from "./assets/banner.webp";
// export { default as bannerPng } from "./assets/banner.png";

export const images = {
    profileWebp: profileWebp,
    profilePng: profilePng,
    // bannerWebp: bannerWebp,
    // bannerPng: bannerPng,
} as Images;

export const colors = {
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
        fill: "fill-[#50fa7b]",
    },
};

export const skillsList = [
    "TypeScript",
    "React.js",
    "Express.js",
    "Node.js",
    "Golang",
    "Fly",
    "Remix.js",
    "Prometheus",
    "Grafana",
];

import { Link } from "./app/links";
import email from "./assets/icons/email.svg";
import linkedin from "./assets/icons/linkedin.svg";
import github from "./assets/icons/github.svg";

export const linksList = [
    {
        url: "mailto: zsant014@fiu.edu",
        title: "Email",
        icon: email,
        content: "zsant014@fiu.edu",
    },
    {
        url: "https://www.linkedin.com/in/zackary-santana/",
        icon: linkedin,
        title: "LinkedIn",
    },
    {
        url: "https://github.com/ZackarySantana/",
        icon: github,
        title: "GitHub",
    },
    {
        url: "https://github.com/ZackarySantana/",
        title: "GitHub",
    },
] as Link[];
