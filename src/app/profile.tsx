import { Component, For } from 'solid-js';
import Image from './Image';

import { images, skillsList, colors, profile } from '../config';

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
            <div class="relative px-4 pt-1">
                <button class={`absolute right-[15px] top-[10px] ${colors.bg.profile} drop-shadow-md border-solid border-2 p-2 rounded-full ${colors.banner.border}`} onClick={() => {
                    let url = document.location.href;
                    navigator.share({
                        title: 'web.dev',
                        text: `Share ${profile.name}'s |attach|`,
                        url,
                    });
                }}>
                    <Share />
                </button>
                <h1 class="text-2xl font-bold">{profile.name}</h1>
                <h2 class={`text-lg font-medium ${colors.text.subtitle}`}>{profile.subtitle}</h2>
                <div class={`${colors.text.bio} text-sm leading-4 pl-3 relative`}>
                    <div class={`absolute top-[11%] left-[5px] w-[2px] h-[80%] rounded-sm ${colors.skills.line}`}></div>
                    <For each={profile.bio}>
                        {(bio) => (
                            <p>{bio}</p>
                        )}
                    </For>
                </div>
                <div class="flex gap-1 flex-wrap text-xs mt-2.5">
                    <Skills />
                </div>
            </div>
        </div>
    );
};

const Share = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class={`${colors.arrow.fill}`}><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z"></path></svg>
    );
};

export default Profile;
