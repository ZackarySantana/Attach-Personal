import { Component, createSignal, For } from 'solid-js';
import { colors } from '../config';

import attach_logo from "../assets/attach/attach_logo_full_v2.png";

export type Link = {
    url: string;
    icon?: string;
    title: string;
    content?: string;
};

const Links = (props: { title: string; linksList: Link[]; solo?: boolean; default_opened: boolean; }) => {

    const [open, setOpen] = createSignal(props.solo ?? props.default_opened);
    const height = 72 * props.linksList.length + "px";

    return (
        <div class="flex flex-col gap-3">
            {!props.solo &&
                <div class={`relative w-full h-[60px] flex items-center rounded-lg leading-5 px-4 ${colors.bg.links} select-none cursor-pointer`} onClick={() => setOpen(!open())}>
                    <h1 class="font-bold whitespace-nowrap">{props.title}</h1>
                    <Arrow class={`transition-all duration-[300ms] ${open() ? "rotate-[-90deg]" : "rotate-[90deg]"}`} />
                </div>
            }
            <div class={`overflow-hidden transition-all duration-[300ms] ${open() ? "mb-3" : ""}`} style={{ "max-height": `${open() ? height : 0}` }}>
                <div class="flex flex-col gap-3">
                    <For each={props.linksList}>
                        {(link: Link) => (
                            <a href={link.url} target="_blank" class="w-full">
                                <div class="relative w-full h-[60px] flex items-center pr-4">
                                    <div class={`absolute inset-[0] left-[25px] z-[-1] rounded-lg ${colors.bg.links}`}></div>
                                    <div class={`w-[50px] min-w-[50px] h-[50px] flex items-center justify-center bg-gradient-to-b rounded-lg
                            ${colors.links_icon['from-transparent'] ? "from-transparent" : ""}
                            ${colors.links_icon['to-transparent'] ? "to-transparent" : ""}
                            ${colors.gradient.from != "" && !colors.links_icon['from-transparent'] ? `${colors.gradient.from}` : ""}
                            ${colors.gradient.to != "" && !colors.links_icon['to-transparent'] ? `${colors.gradient.to}` : ""}
                            `}>
                                        <div class="p-2">
                                            {link.icon &&
                                                <img src={link.icon} />
                                            }
                                            {!link.icon &&
                                                <img src={attach_logo} />
                                            }
                                        </div>
                                    </div>
                                    <div class={`w-full overflow-hidden leading-5 pl-4 ${colors.bg.mask_links}`}>
                                        <h3 class="font-bold whitespace-nowrap">{link.title}</h3>
                                        <p class={`${colors.text['link-content']} font-medium text-sm whitespace-nowrap`}>{link.content || link.url}</p>
                                    </div>
                                    <Arrow />
                                </div>
                            </a>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
};

export default Links;

const Arrow = (props: { class?: string; }) => {
    return (
        <svg width="15" height="11" viewBox="0 0 15 11" class={`${colors.arrow.expand} ml-auto ${props.class ? props.class : ""}`} xmlns="http://www.w3.org/2000/svg"><path d="M0.734794 5.56438L0.731567 5.48748C0.731576 5.25128 0.820396 5.02373 0.980395 4.84998C1.1404 4.67623 1.35988 4.569 1.59527 4.54956L1.67271 4.54633L11.519 4.54633L8.94185 1.96867C8.76534 1.79216 8.66618 1.55276 8.66618 1.30314C8.66618 1.05352 8.76534 0.814125 8.94185 0.637617C9.11835 0.461109 9.35775 0.361948 9.60737 0.361948C9.85699 0.361948 10.0964 0.461109 10.2729 0.637617L14.4559 4.82061C14.5433 4.908 14.6126 5.01176 14.6599 5.12595C14.7072 5.24014 14.7316 5.36253 14.7316 5.48613C14.7316 5.60973 14.7072 5.73213 14.6599 5.84632C14.6126 5.96051 14.5433 6.06426 14.4559 6.15166L10.2729 10.3347C10.0964 10.5112 9.85699 10.6103 9.60737 10.6103C9.35775 10.6103 9.11835 10.5112 8.94185 10.3347C8.76534 10.1581 8.66618 9.91875 8.66618 9.66913C8.66618 9.41951 8.76534 9.18011 8.94185 9.0036L11.5168 6.42863L1.67271 6.42863C1.43643 6.42861 1.2088 6.33971 1.03504 6.1796C0.861281 6.01949 0.754102 5.79987 0.734794 5.56438Z"></path></svg>
    );
};