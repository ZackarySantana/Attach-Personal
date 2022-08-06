import { Component, For } from 'solid-js';
import Image from './Image';

import { images, skillsList, colors } from '../config';

export type Images = {
    bannerWebp: string;
    bannerPng: string;
    profileWebp: string;
    profilePng: string;
};

const Skills: Component = () => {
    return (
        <For each={skillsList}>
            {(item) => (
                <div class={`${colors.skills.bg} px-2.5 py-1 rounded-full`}>
                    <p class={`${colors.skills.text}`}>{item}</p>
                </div>
            )}
        </For>
    );
};

const Profile: Component = () => {
    return (
        <div class={`relative w-full ${colors.bg.profile} pb-4 my-3 rounded-2xl`}>
            <div class={`w-full h-[130px] overflow-hidden rounded-2xl
            bg-gradient-to-b
            ${colors.banner['from-transparent'] ? "from-transparent" : ""}
            ${colors.banner['to-transparent'] ? "to-transparent" : ""}
            ${colors.gradient.from != "" && !colors.banner['from-transparent'] ? `${colors.gradient.from}` : ""}
            ${colors.gradient.to != "" && !colors.banner['to-transparent'] ? `${colors.gradient.to}` : ""}
            border-solid border-2 ${colors.banner.border}`}>
                {(images?.bannerPng || images?.bannerWebp) && (
                    <Image
                        src={images?.bannerWebp}
                        srcAlt={images?.bannerPng}
                        alt="Banner"
                        class="block w-full h-full object-cover object-center"
                    />
                )}
            </div>
            {(images?.profilePng || images?.profileWebp) && (
                <div class={`absolute top-[17.5px] left-[15px] overflow-hidden w-[120px] h-[120px] rounded-full border-solid border-2 ${colors.banner.border}`}>
                    <Image
                        src={images.profilePng}
                        srcAlt={images.profileWebp}
                        alt="Profile picture"
                        class="block w-full h-full object-cover object-center"
                    />
                </div>
            )}
            <div class="px-4 pt-1">
                <h1 class="text-2xl font-bold">Zackary Santana</h1>
                <h2 class={`text-lg font-medium ${colors.text.subtitle}`}>Software Engineer, Fullstack</h2>
                <div class={`${colors.text.bio} text-sm leading-4 pl-3 relative`}>
                    <div class={`absolute top-[11%] left-[5px] w-[2px] h-[80%] rounded-sm ${colors.skills.line}`}></div>
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
