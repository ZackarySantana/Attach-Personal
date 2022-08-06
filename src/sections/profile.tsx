import { Component, For } from 'solid-js';

const skillsList = [
    "TypeScript",
    "React.js",
    "Express.js",
    "Node.js",
    "Golang",
    "Fly",
    "Remix.js",
    "Prometheus",
    "Grafana"
];

const Skills: Component = () => {
    return (
        <For each={skillsList}>
            {(item) => (
                <div class="bg-gray-600 px-2.5 py-1 rounded-full">
                    <p class="">{item}</p>
                </div>
            )}
        </For>
    );
};

const Profile: Component = () => {
    return (
        <div class="relative w-full bg-[#192734] pb-4 my-3 rounded-2xl">
            <div class="w-full h-[130px] overflow-hidden rounded-2xl bg-gradient-to-b from-transparent from-pink-900 to-pink-500 border-solid border-2 border-pink-500">
                {/* <img src="/assets/banner.png" class="block w-full h-full object-cover object-center" /> */}
            </div>
            <div class="absolute top-[20px] left-[15px] overflow-hidden bg-white w-[120px] h-[120px] rounded-full border-solid border-2 border-pink-500">
                {/* <img src="/assets/profile.png" class="block w-full h-full object-cover object-center" /> */}
            </div>
            <div class="px-4 pt-1">
                <h1 class="text-2xl font-bold">Zackary Santana</h1>
                <h2 class="text-lg font-medium text-[#b9cad3]">Software Engineer, Fullstack</h2>
                <div class="text-[#6a7c8b] text-sm leading-4 pl-3 relative leftline">
                    <p>MongoDB</p>
                    <p>Miami, FL</p>
                    <p>Computer Science @ Florida International University</p>
                </div>
                <div class="flex gap-1 flex-wrap text-xs mt-2.5">
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default Profile;
