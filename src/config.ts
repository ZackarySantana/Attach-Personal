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
        base: "text-white",
        subtitle: "text-slate-400",
        bio: "text-slate-500",
        "link-content": "text-gray-400",
    },
    bg: {
        profile: "bg-[#192734]",
        links: "bg-[#192734]",
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
    gradient: {
        from: "from-pink-700",
        to: "to-pink-500",
    },
    arrow: {
        fill: "fill-pink-500",
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
