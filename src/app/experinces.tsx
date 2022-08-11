import { createEffect, createSignal, For, onMount } from 'solid-js';
import { colors } from '../config';

import attach_logo from "../assets/attach/attach_logo_full_v2.png";
import Section from './section';

export interface Experience {
    company: string;
    meta: string[];
    icon?: string;
    desc: string[];
}

const Experiences = (props: { title: string; experiences: Experience[]; solo?: boolean; default_opened: boolean; }) => {
    return (
        <Section title={props.title} solo={props.solo} default_opened={props.default_opened} >
            <For each={props.experiences}>
                {(experience: Experience) => (
                    <div class="relative w-full h-fit flex items-center pr-8 py-5">
                        <div class={`absolute inset-[0] left-[25px] z-[-1] rounded-lg ${colors.bg.links}`}></div>
                        <div class={`w-[50px] min-w-[50px] h-[50px] flex items-center justify-center bg-gradient-to-b rounded-lg self-start
                            ${colors.links_icon['from-transparent'] ? "from-transparent" : ""}
                            ${colors.links_icon['to-transparent'] ? "to-transparent" : ""}
                            ${colors.gradient.from != "" && !colors.links_icon['from-transparent'] ? `${colors.gradient.from}` : ""}
                            ${colors.gradient.to != "" && !colors.links_icon['to-transparent'] ? `${colors.gradient.to}` : ""}
                            `}>
                            <div class="p-2">
                                {experience.icon &&
                                    <img src={experience.icon} class="w-full h-full" alt={`${props.title}'s Icon`} />
                                }
                                {!experience.icon &&
                                    <img src={attach_logo} class="w-full h-full" alt={`${props.title}'s Icon`} />
                                }
                            </div>
                        </div>
                        <div class={`w-full overflow-hidden leading-5 pl-4`}>
                            <h3 class="font-bold">{experience.company}</h3>
                            <div class={`${colors.text['link-content']} text-sm leading-4 pl-3 relative`}>
                                <div class={`absolute top-[11%] left-[2px] w-[2px] h-[80%] rounded-sm ${colors.skills.line}`}></div>
                                <For each={experience.meta}>
                                    {(bio) => (
                                        <p>{bio}</p>
                                    )}
                                </For>
                            </div>
                            <ul class="text-xs list-disc">
                                <For each={experience.desc}>
                                    {(desc) => (
                                        <li class="mt-1">{desc}</li>
                                    )}
                                </For>
                            </ul>
                        </div>
                    </div>
                )}
            </For>
        </Section>
    );
};

export default Experiences;
