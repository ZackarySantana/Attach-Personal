/* Type Imports - DO NOT TOUCH */
import { Sections } from "./app/App";
import { Link } from "./app/links";
import { Experience } from "./app/experinces";
import { Images } from "./app/profile";
/* Type Imports - DO NOT TOUCH */

import profileWebp from "/profile.webp";
import profilePng from "/profile.png";
import bannerWebp from "/banner.webp";
import bannerPng from "/banner.png";

/*
Both are optional! If you would like neither, just comment out or remove both (but still export images)
I recommend https://www.photopea.com/ for editing and exporting both files in .png and .webp

If you don't have either or, you can insert the one you have. This is for expanded compatability with displaying and smaller sizes

 - Profile:
   - Dimensions: 120 x 120
 - Banner:
   - Dimensions: 320 x 130
   - This will be resized based on screen size and will focus on the middle of the image
*/
export const images = {
    profileWebp: profileWebp,
    profilePng: profilePng,
    bannerWebp: bannerWebp,
    bannerPng: bannerPng,
} as Images;

import { getRandomTheme } from "./color_themes";
export const colors = getRandomTheme();
export const random_theme_button = true;

export const profile = {
    name: "John Doe",
    subtitle: "Aspiring Software Developer",
    bio: ["Miami, FL", "Florida International University"],
};

export const skillsList = [
    "Time management",
    "Communication",
    "Adaptability",
    "Problem-solving",
    "Teamwork",
    "Creativity",
    "Leadership",
    "Interpersonal skills",
    "Work ethic",
    "Attention to detail",
    "Stress management",
    "Organization",
    "Prioritizing",
    "Planning",
    "Goal setting",
    "Verbal communication",
    "Written communication",
    "Presentation",
    "Constructive feedback",
    "Active listening",
    "Self-management",
    "Optimism",
    "Calmness",
    "Analysis",
    "Self-motivation",
];

import email from "/icons/email.svg";
import linkedin from "/icons/linkedin.svg";
import github from "/icons/github.svg";
// @ts-ignore
import Resume from "./assets/Resume.docx";

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
        url: "https://google.com",
        title: "Portfolio",
        content: "By default, content is the url (view next to continue)",
    },
    {
        url: "https://google.com",
        title: "Todo App",
        content: "but you can force content by specifying like this!",
    },
    {
        url: "https://google.com",
        title: "And more!",
    },
] as Link[];

const experiences = [
    {
        company: "Company X",
        meta: [
            "Software Engineer Intern",
            "Jun 2022 - Aug 2022",
            "Space, Space",
        ],
        desc: [
            "Did many things to improve the company",
            "Hired a private inspector",
            "Became superman!",
        ],
    },
    {
        company: "Company Y",
        meta: [
            "Software Engineer Intern",
            "Jun 2021 - Aug 2021",
            "Space, Space",
        ],
        desc: [
            "Did many things to improve the company",
            "Hired a private inspector",
            "Became superman!",
        ],
    },
] as Experience[];

const games_linksList = [
    {
        url: "https://google.com",
        title: "Game 1",
    },
    {
        url: "https://google.com",
        title: "Game 2",
        content: "But I have more!",
    },
] as Link[];

const contactMe_linksList = [
    {
        url: "https://www.linkedin.com/in/",
        icon: linkedin,
        title: "LinkedIn",
    },
    {
        url: "https://github.com/",
        icon: github,
        title: "GitHub",
    },
    {
        url: "mailto: someone@gmail.com",
        title: "Email",
        icon: email,
        content: "someone@gmail.com",
    },
] as Link[];

/**
 You can customize the order here (if you only want one section, the dropdown will go away and format nicely)
 */
export const sections = {
    // An example of a button. This button is a resume download
    Resume: {
        url: Resume,
        download_name: `${profile.name}_Resume.pdf`,
    },
    // An example of a list of projects, that is opened on load
    Projects: {
        links: projects_linksList,
        default_opened: true,
    },
    // An example of an experience section
    "Work Experience": {
        experiences: experiences,
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
    keywords: `New Grad, Portfolio, Projects, Developer, Coder, Programmer, Programming, Languages, Software, ${profile.name}`,
};
