import { Component, For } from 'solid-js';
import Image from './Image';

import { images, skillsList, colors, base_profile } from '../config';
import { getRandomFunkyTheme } from '../color_themes';

export interface ExtendedProfile {
    gender?: string;
    username?: string;
}

export type Images = {
    bannerPng: string;
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
                {images?.bannerPng && (
                    <Image
                        src={images.bannerPng.replace(/\.[^/.]+$/, ".webp")}
                        srcAlt={images.bannerPng}
                        alt="Banner"
                        class="block w-full h-full object-cover object-center"
                    />
                )}
            </div>
            {images?.profilePng && (
                <div class={`absolute top-[17.5px] left-[15px] overflow-hidden w-[120px] h-[120px] rounded-full border-solid border-2 ${colors.banner.border}`}>
                    <Image
                        src={images.profilePng.replace(/\.[^/.]+$/, ".webp")}
                        srcAlt={images.profilePng}
                        alt="Profile picture"
                        class="block w-full h-full object-cover object-center"
                    />
                </div>
            )}
            <div class="relative px-4 pt-1">
                <Share class="absolute right-[15px] top-[10px] hidden sm:block" />
                <ThemeSwitch class="absolute right-[15px] top-[50px] hidden sm:block" />
                <h1 class="text-2xl font-bold">{base_profile.name()}</h1>
                <h2 class={`text-lg font-medium ${colors.text.subtitle}`}>{base_profile.subtitle}</h2>
                <div class={`${colors.text.bio} text-sm leading-4 pl-3 relative`}>
                    <div class={`absolute top-[11%] left-[5px] w-[2px] h-[80%] rounded-sm ${colors.skills.line}`}></div>
                    <For each={base_profile.bio}>
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

export const Share = (props: { class: string; }) => {
    return (
        <button aria-label="Share" class={`${props.class} ${colors.bg.profile} transition-all border-solid border-2 hover:shadow-[1px_1px_6px_3px_rgba(0,0,0,0.25)] focus:shadow-[inset_1px_1px_3px_2px_rgba(0,0,0,0.25)] p-2 rounded-full ${colors.banner.border} shadow-[1px_1px_3px_2px_rgba(0,0,0,0.25)] z-10`} onClick={() => {
            let url = document.location.href;
            navigator.share({
                title: 'web.dev',
                text: `Share ${base_profile.name()}'s |attach|`,
                url,
            });
        }}>
            <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class={`${colors.arrow.expand}`}><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z"></path></svg>
        </button>
    );
};

export const ThemeSwitch = (props: { class: string; }) => {
    return (
        <a href={`/?theme=${getRandomFunkyTheme(false, true).name}`} aria-label="Theme Switch" class={`${props.class} ${colors.bg.profile} transition-all border-solid border-2 hover:shadow-[1px_1px_6px_3px_rgba(0,0,0,0.25)] focus:shadow-[inset_1px_1px_3px_2px_rgba(0,0,0,0.25)] p-2 rounded-full ${colors.banner.border} shadow-[1px_1px_3px_2px_rgba(0,0,0,0.25)] z-10`}>
            <svg viewBox="0 0 512.001 512.001" width="16" height="16" class={`${colors.arrow.expand}`}>
                <g>
                    <path d="M508.162,247.909l-65.998-53.919l24.064-81.848c0.89-3.026,0.365-6.294-1.43-8.89c-1.794-2.594-4.667-4.241-7.813-4.476     l-85.154-6.389L343.38,11.985c-1.065-3.009-3.447-5.368-6.467-6.401c-3.02-1.03-6.348-0.629-9.033,1.097l-71.876,46.201     l-71.777-46.2c-2.683-1.725-6.009-2.134-9.03-1.102c-3.021,1.03-5.404,3.385-6.472,6.393l-28.545,80.412l-85.165,6.39     c-3.146,0.236-6.019,1.881-7.813,4.476c-1.795,2.594-2.321,5.863-1.43,8.89l24.064,81.848l-65.997,53.92     C1.41,249.893,0,252.864,0,256s1.41,6.107,3.838,8.092l65.998,53.92L45.772,399.86c-0.89,3.026-0.365,6.293,1.429,8.89     c1.795,2.594,4.665,4.241,7.813,4.476l85.068,6.389l28.647,80.423c1.07,3.005,3.454,5.356,6.473,6.384     c3.02,1.027,6.343,0.622,9.025-1.104L256,459.121l71.773,46.197c1.706,1.098,3.673,1.662,5.656,1.662     c1.133,0,2.272-0.184,3.37-0.558c3.019-1.028,5.403-3.379,6.473-6.384l28.647-80.423l85.068-6.388     c3.146-0.236,6.018-1.882,7.813-4.476c1.794-2.596,2.32-5.863,1.429-8.89l-24.064-81.848l65.998-53.92     c2.429-1.984,3.838-4.955,3.838-8.092C512,252.864,510.59,249.893,508.162,247.909z M423.573,306.215     c-3.254,2.658-4.599,7.008-3.414,11.039l22.374,76.101l-78.959,5.931c-4.121,0.309-7.674,3.02-9.06,6.913l-26.508,74.417     l-66.351-42.707c-1.722-1.108-3.688-1.662-5.655-1.662c-1.967,0-3.933,0.554-5.655,1.662l-66.351,42.707l-26.508-74.417     c-1.388-3.894-4.939-6.604-9.06-6.913l-78.96-5.931l22.374-76.101c1.185-4.03-0.16-8.381-3.414-11.039L26.965,256l61.463-50.215     c3.254-2.658,4.599-7.008,3.414-11.038l-22.374-76.1l79.065-5.932c4.126-0.309,7.681-3.025,9.066-6.923l26.409-74.398     l66.339,42.699c3.441,2.214,7.86,2.216,11.305,0.003l66.431-42.702l26.323,74.387c1.381,3.904,4.939,6.625,9.069,6.934     l79.06,5.932l-22.374,76.1c-1.185,4.03,0.16,8.38,3.414,11.038L485.035,256L423.573,306.215z" />
                    <path d="M256,96.653c-86.424,0-156.735,70.311-156.735,156.735S169.576,410.123,256,410.123s156.735-70.311,156.735-156.735     S342.424,96.653,256,96.653z M256,389.225c-74.9,0-135.837-60.935-135.837-135.837S181.1,117.551,256,117.551     s135.837,60.935,135.837,135.837S330.9,389.225,256,389.225z" />
                    <path d="M146.286,242.939h20.898c0-37.45,30.468-67.918,67.918-67.918v-20.898C186.129,154.123,146.286,193.966,146.286,242.939z     " />
                </g>
            </svg>
        </a >
    );
};

export default Profile;
