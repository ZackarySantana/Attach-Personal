/* Type Imports - DO NOT TOUCH */
import { Sections } from "./app/App";
import { Link } from "./app/links";
import { Experience } from "./app/experinces";
import { ExtendedProfile, Images } from "./app/profile";
/* Type Imports - DO NOT TOUCH */

/*
Profile and banner are optional! Just replace the file in the public folder if you want it, or delete them from the folder!

 - Profile:
   - Aspect Ratio: 1/1
   - Dimensions: 120 x 120 (it is resized automatically!)
 - Banner:
   - Aspect Ratio: 7/2
   - Dimensions: 455 x 130 (it is resized automatically!)
*/
export const images = {
    profilePng: "/profile.png",
    bannerPng: "/banner.png",
} as Images;

import { getRandomTheme } from "./color_themes";
export const colors = getRandomTheme();
export const random_theme_button = true;

export const base_profile = {
    first_name: "Zackary",
    last_name: "Santana",
    subtitle: "Software Engineer, Fullstack",
    bio: ["MongoDB", "Miami, FL", "Florida International University"],
    name() {
        return this.first_name + " " + this.last_name;
    },
};

export const extended_profile = {
    gender: "Male", // You can input any gender
    username: "LidTop", // You can opt out my commenting either of these
} as ExtendedProfile;

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
const projects_list = [
    {
        url: "https://zackaryjamessantana.com/",
        icon: "/icons/portfolio.svg",
        title: "Portfolio",
    },
    {
        url: "https://todo.zackaryjamessantana.com/",
        icon: "/icons/todo.svg",
        title: "Todo",
    },
    {
        url: "https://twitterst.fly.dev/",
        title: "Twitter Filter",
    },
    {
        url: "https://codeconstants.com/",
        icon: "/icons/CodeConstants.png",
        title: "Code Constants",
    },
    {
        url: "https://upefiu.io/",
        icon: "/icons/upe.png",
        title: "UPE",
    },
] as Link[];

const experiences = [
    {
        company: "MongoDB",
        meta: [
            "Software Engineer Intern",
            "Jun 2022 - Aug 2022",
            "New York, New York",
        ],
        icon: "/icons/mongodb.svg",
        desc: [
            "Worked on a scrum (agile) team for MongoDB's internal CI/CD testing tool, Evergreen (https://github.com/evergreen-ci/evergreen).",
            "Used Golang to create new REST endpoints, manage existing ones, and create middleware.",
            "Augmented the CLI to allow users to do actions that were previously restricted like using regex to find what tests to do on which builds and run that test-suite.",
            "Modified core infrastructure of archiving tests and scheduling/restarting logic of tests.",
            "Created new functionality that restarts a subset of tests for the user and systematically keeps track of non-restarted and restarted tests for the same test-suite.",
        ],
    },
    {
        company: "MetLife",
        meta: [
            "Software Engineer Intern",
            "Jun 2021 - Aug 2021",
            "Cary, North Carolina",
        ],
        icon: "/icons/metlife.png",
        desc: [
            "Managed and maintained a frontend Angular.js application that displayed real-time information that was vital for the team.",
            "Organized the backend Restify that interacted with a MongoDB that used endpoints to test status of Java Virtual Machines.",
            "Worked in a SAFe Agile team that used scrum to keep track with the day-to-day process.",
        ],
    },
] as Experience[];

const games_list = [
    {
        url: "https://zackaryjamessantana.com/hosted_projects/rpg.html",
        title: "RPG",
    },
    {
        url: "https://videos.zackaryjamessantana.com/spacefrontier/",
        title: "Space Frontier",
    },
    {
        url: "https://videos.zackaryjamessantana.com/spacefrontier/",
        title: "Space Frontier",
    },
    {
        url: "https://rachelquijano.itch.io/chainsaw-the-door/",
        title: "Chainsaw The Door",
    },
] as Link[];

const contactme_list = [
    {
        url: "https://www.linkedin.com/in/zackary-santana/",
        icon: "/icons/linkedin.svg",
        title: "LinkedIn",
    },
    {
        url: "https://github.com/ZackarySantana/",
        icon: "/icons/github.svg",
        title: "GitHub",
    },
    {
        url: "mailto: zsant014@fiu.edu",
        title: "Email",
        icon: "/icons/email.svg",
        content: "zsant014@fiu.edu",
    },
] as Link[];

/**
 You can customize the order here (if you only want one section, the dropdown will go away and format nicely)
 */
export const sections = {
    // An example of a button. This button is a resume download
    "📝 Resume": {
        url: "/Resume.pdf",
        download_name: `${base_profile.name()}_Resume.pdf`,
    },
    // An example of a list of projects, that is opened on load
    "🕸️ Projects": {
        links: projects_list,
        default_opened: true,
    },
    // An example of an experience section
    "💼 Work Experience": {
        experiences: experiences,
    },
    "🧠 Games": {
        links: games_list,
    },
    "📧 Contact Me": {
        links: contactme_list,
    },
    "Page Stats": true,
} as Sections;

export const webpage_config = {
    title: `${base_profile.name()}'s |attach|`,
    desc: `${base_profile.name()}'s projects, work experience, games, contact info, and more! Click to get in contact!`,
    keywords: `New Grad, Portfolio, Projects, Developer, Coder, Programmer, Programming, Languages, Software, ${base_profile.name()}`,
};
