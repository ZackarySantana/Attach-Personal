import { Component, For } from 'solid-js';
import { colors, sections, webpage_config } from '../config';
import Button, { ButtonType, isButton } from './button';
import Links, { Link } from './links';
import Profile, { Share, ThemeSwitch } from './profile';

export type Sections = {
  [key: string]: Links | ButtonType;
};

export interface Links {
  links: Link[];
  default_opened?: boolean;
}

export function isLinks(obj: any): obj is Links {
  return obj.links !== undefined;
}

const App: Component = () => {

  document.documentElement.classList.add(colors.bg.main);

  const title = document.createElement("title");
  title.innerHTML = webpage_config.title;

  const desc = document.createElement("meta");
  desc.setAttribute("name", "description");
  desc.setAttribute("content", webpage_config.desc);

  const keywords = document.createElement("meta");
  keywords.setAttribute("name", "keywords");
  keywords.setAttribute("content", webpage_config.keywords);

  document.head.appendChild(title);
  document.head.appendChild(desc);
  document.head.appendChild(keywords);

  return (
    <>
      <nav class="relative">
        <div class="w-full text-center">
          <a href="https://github.com/ZackarySantana/Attach" target="_blank" class="text-sm text-[#4ea8ed] font-mono">|attach|</a>
        </div>
        <Share class="absolute left-[10px] top-[-9px] block sm:hidden" />
        <ThemeSwitch class="absolute right-[10px] top-[-9px] block sm:hidden" />
      </nav>
      <main class={`
        ${colors.text.base}
      `}>
        <Profile />
        {Object.keys(sections).length > 1 &&
          <For each={Object.keys(sections)}>
            {(sectionName) => {
              const section = sections[sectionName];
              if (isButton(section)) {
                return (
                  <Button url={section.url} download_name={section.download_name}>{sectionName}</Button>
                );
              } else if (isLinks(section)) {
                return (
                  <Links title={sectionName} linksList={section.links} default_opened={section.default_opened || false} />
                );
              }
              return <></>;
            }}
          </For>
        }
        {Object.keys(sections).length == 1 &&
          <For each={Object.keys(sections)}>
            {(sectionName) => {
              const section = sections[sectionName];
              if (isButton(section)) {
                return (
                  <Button url={section.url} download_name={section.download_name}>{sectionName}</Button>
                );
              } else if (isLinks(section)) {
                return (
                  <Links title={sectionName} linksList={section.links} solo={true} default_opened={true} />
                );
              }
              return <></>;
            }}
          </For>
        }
        <footer>
          <div class={`px-[20px] sm:px-[60px] flex align-center items-center py-[30px] ${colors.text['link-content']}`}>
            <a href="https://github.com/ZackarySantana/Attach" target="_blank">
              <p class="text-sm">Putting the power of connecting in to the hands of the user. Theme <code>{colors.name}</code></p>
              <h3>Click here to make your own <span class="text-[#4ea8ed] font-mono">|attach|</span></h3>
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
