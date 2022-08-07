/* Type Imports - DO NOT TOUCH */
import { Sections } from "./app/App";
import { Link } from "./app/links";
import { Images } from "./app/profile";
/* Type Imports - DO NOT TOUCH */

import profileWebp from "./assets/profile.webp";
import profilePng from "./assets/profile.png";
// export { default as bannerWebp } from "./assets/banner.webp";
// export { default as bannerPng } from "./assets/banner.png";

/*
Both are optional! If you would like neither, just comment out or remove both (but still export images)

 - Profile:
   - Dimensions: 120 x 120
 - Banner:
   - Dimensions: 320 x 130
   - This will be resized based on screen size and will focus on the middle of the image
*/
export const images = {
    profileWebp: profileWebp,
    profilePng: profilePng,
    // bannerWebp: bannerWebp,
    // bannerPng: bannerPng,
} as Images;

import { getRandomTheme } from "./color_themes";
export const colors = getRandomTheme();
export const random_theme_button = true;

export const profile = {
    name: "Zackary Santana",
    subtitle: "Software Engineer, Fullstack",
    bio: ["MongoDB", "Miami, FL", "Florida International University"],
};

export const skillsList = [
    "TypeScript",
    "React.js",
    "Express.js",
    "Remix.js",
    "Solid.js",
    "Node.js",
    "Preact.js",
    "Tailwind",
    "Fresh",
    "Deno",
    "Twind",
    "Java",
    "Svelte",
    "Firebase",
    "Splunk",
    "MongoDB",
    "MySQL",
    "Docker",
    "Golang",
    "Fly",
    "Prometheus",
    "Grafana",
];

import email from "./assets/icons/email.svg";
import linkedin from "./assets/icons/linkedin.svg";
import github from "./assets/icons/github.svg";
import Resume from "./assets/Resume.pdf";

/**
There are no required links, but each link must have:
 - url: string;
 - title: string;

 They can optionally have:
 - icon: string;
 - content: string;

 If no icon is supplied, it will use a chain icon by default
 If no content is supplied, it will use the url by default
 */
const projects_linksList = [
    {
        url: "https://zackaryjamessantana.com/",
        title: "Portfolio",
    },
    {
        url: "https://todo.zackaryjamessantana.com/",
        title: "Todo",
    },
    {
        url: "https://twitterst.fly.dev/",
        title: "Twitter Filter",
    },
] as Link[];

const games_linksList = [
    {
        url: "https://zackaryjamessantana.com/hosted_projects/rpg.html",
        title: "RPG",
    },
    {
        url: "https://videos.zackaryjamessantana.com/spacefrontier/",
        title: "Space Frontier",
    },
] as Link[];

const contactMe_linksList = [
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
        url: "mailto: zsant014@fiu.edu",
        title: "Email",
        icon: email,
        content: "zsant014@fiu.edu",
    },
] as Link[];

/**
 You can customize the order here (if you only want one section, the dropdown will go away and format nicely)
 */
export const sections = {
    Resume: {
        url: Resume,
        download_name: `${profile.name}_Resume.pdf`,
    },
    Projects: {
        links: projects_linksList,
        default_opened: true,
    },
    Games: {
        links: games_linksList,
    },
    "Contact Me": {
        links: contactMe_linksList,
    },
} as Sections;

export const webpage_config = {
    title: `${profile.name}'s |attach|`,
    desc: `An |attach| for ${profile.name}`,
    keywords: `New Grad, Portfolio, Projects, Web Development, Node.js, React.js, Remix.js, CSS, Developer, Coder, Programmer, Programming, Languages, Software, ${profile.name}`,
};
