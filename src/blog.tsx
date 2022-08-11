import { Post } from "./app/posts";

const markdown = `
Solid.js is a framework. Cool

- here's
- a
- list
`;

export const posts = [
    {
        title: "Solid.js",
        headline: "Why choose Solid.js?",
        blog: markdown,
    },
] as Post[];
