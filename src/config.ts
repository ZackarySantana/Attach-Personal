/* Type Imports - DO NOT TOUCH */
import { Sections } from "./app/App";
import { Experience } from "./app/experinces";
import { Link } from "./app/links";
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
    bio: ["I bring about amazing websites", "Miami, FL", "Florida International University"],
    name() {
        return this.first_name + " " + this.last_name;
    },
};

export const extended_profile = {
    gender: "Male", // You can input any gender
    username: "LidTop", // You can opt out my commenting either of these
} as ExtendedProfile;

export const skillsList = [
    "Golang",
    "Kubernetes",
    "Lens",
    "Docker",
    "MongoDB",
    "PlanetScale",
    "BigQuery",
    "Splunk",
    "TypeScript",
    "React",
    "Next",
    "Node",
    "Vite",
    "Tailwind",
]

export const skillsListAll = [
    "TypeScript",
    "JavaScript",
    "Golang",
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
    "PlanetScale",
    "Drizzle ORM",
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
        url: "https://weekdays.pro/",
        icon: "/icons/weekdays.png",
        title: "Weekdays",
    },
    {
        url: "https://zackaryjamessantana.com/",
        icon: "/icons/portfolio.svg",
        title: "Portfolio",
    },
    {
        url: "https://codeconstants.com/",
        icon: "/icons/CodeConstants.png",
        title: "Code Constants",
    },
    {
        url: "https://flow-test.fly.dev/",
        icon: "/icons/upe.png",
        title: "UPE",
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
] as Link[];

const experiences = [
    {
        company: "Addigy",
        meta: [
            "Junior Software Engineer",
            "Jan 2023 - Current",
            "Miami, FL",
        ],
        icon: "/icons/addigy.png",
        desc: [
            "Developed among a fleet of microservices that all interconnect and are responsible for a different aspect of the product. This meant a business outcome often affected many microservices, 3-4 on average.",
            "Developed on 5+ microservices that expose CRUD endpoints and store data via a MongoDB and SQLite databases, deployed in a Kubernetes cluster using Lens to monitor the cluster.",
            "Created a new webhooks callout consumer service and webhooks manager service in Golang to sync 200 different accounts with around 3000+ users using 3rd party integrations.",
        ],
    },
    {
        company: "MongoDB",
        meta: [
            "Software Engineer Intern",
            "Jun 2022 - Aug 2022",
            "New York, New York",
        ],
        icon: "/icons/mongodb.svg",
        desc: [
            "Direct experience working on distributed systems internal facing CI/CD testing tooling, handling 1-2 engineering requests every week from other engineers at MongoDB, dog-feeding and pushing those updates live to increase other team velocities.",
            "This ranged from changing the CLI to accept new flags, represent new database models, or fix commands under certain conditions like overriding defaults, to creating/adjusting REST endpoints to better align with the docs.",
            "Concurrently worked on uncoupling archiving and restarting logic for tests to allow for specific grouping of tests to restart only failed- teams often used these groupings with 800+ tests that would run on average for 2 hours. Restarting them before would restart all tests, with my changes it would cut down the restarted tests from 800+ → 1-5, this reduced restart time/machine usage by up to 90%.",
            "Used tools like Splunk to query and test about the data of restarted tests, creating new pipelines in MongoDB to support the database model changes, Golang as the primary language for the tooling, TypeScript/React.js for UI changes.",
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
            "Improved the UX (user experience) of the department-wide smoke test website used by 200+ teams. The site previously had blocked executions of similar requests in multiple sections of the site and would not cache responses even on the same client session. Implemented coinciding execution of requests bringing the site from a 10 seconds-30 seconds on a cold start down to 1 second.",
            "Migrated queries to MongoDB to the backend (Restifiy) and pinging endpoints (JVM’s) to the frontend (Angular.js) which reduced server load, improved overall server response time, and resulted in a fast TTFB (Time-to-first-byte).",
        ],
    },
] as Experience[];

const education = [
    {
        company: "Florida International University",
        meta: [
            "Major: Computer Science",
            "Jul 2020 - Aug 2023",
            "Miami, FL",
        ],
        icon: "/icons/fiu.png",
        desc: [
            "Courses: Advance UNIX Programming, Algorithm Techniques, Artificial Intelligence, Data Mining, Data Structures, Database Administration,\
            Database Management, Computational Geometry, Human-Computer Interaction, Mobile App Dev, Programming Languages, Operating Systems, Software Engineering",
        ],
    },
    {
        meta: [
            "Minor: Mathematical Science",
        ],
        icon: "none",
        desc: [
            "Courses: Calculus I, Calculus II, Calculus III, Differential Equations, Linear Algebra, Physics I, Physics II, Modern Physics, Intermediate Physics Lab",
        ],
    },
    {
        company: "Intermediate iOS Development",
        meta: [
            "CodePath",
            "Certificate",
            "Dec 2022",
        ],
        icon: "/icons/codepath.png",
    },
    {
        company: "Stack Overflow Student Ambassadors",
        meta: [
            "Stack Overflow",
            "Certificate",
            "Sep 2022",
        ],
        icon: "/icons/stackoverflow.png",
    },
    {
        company: "GitHub Global Campus Student",
        meta: [
            "GitHub",
            "Certificate",
            "Sep 2022",
        ],
        icon: "/icons/github.svg",
    },
    {
        company: "Android Development Honors",
        meta: [
            "CodePath",
            "Certificate",
            "Nov 2021",
        ],
        icon: "/icons/codepath.png",
    },
    {
        company: "Wilderness First Responder",
        meta: [
            "University of Colorado School of Medicine",
            "Certificate",
            "May 2021",
        ],
        icon: "/icons/ucsm.jpg",
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
    // An example of an experience section
    "🧠 Education": {
        experiences: education,
    },
    "🎮 Games": {
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
