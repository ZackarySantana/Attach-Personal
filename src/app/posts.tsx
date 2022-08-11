import { For, JSX } from 'solid-js';
import { colors } from '../config';

import Section, { Arrow } from './section';

export type Post = {
    title: string;
    icon?: string;
    headline: string;
    blog: string;
};

const Posts = (props: { title: string; posts: Post[]; solo?: boolean; default_opened: boolean; }) => {
    return (
        <Section title={props.title} solo={props.solo} default_opened={props.default_opened} >
            <For each={props.posts}>
                {(link: Post) => (
                    <button class="w-full text-left">
                        <div class="relative w-full h-[60px] flex items-center pr-4">
                            <div class={`absolute inset-[0] left-[25px] z-[-1] rounded-lg ${colors.bg.links}`}></div>
                            <div class={`w-full overflow-hidden leading-5 pl-4 pl-10 ${colors.bg.mask_links}`}>
                                <h3 class="font-bold whitespace-nowrap">{link.title}</h3>
                                <p class={`${colors.text['link-content']} font-medium text-sm whitespace-nowrap`}>{link.headline}</p>
                            </div>
                            <Arrow />
                        </div>
                    </button>
                )}
            </For>
        </Section>
    );
};

export default Posts;
