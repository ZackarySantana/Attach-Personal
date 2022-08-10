import { Component, For } from 'solid-js';
import { colors, images, sections } from '../config';
import Button, { ButtonType, isButton } from './button';
import Experiences, { Experience } from './experinces';
import Links, { Link } from './links';
import Profile, { Share, ThemeSwitch } from './profile';

export type Sections = {
  [key: string]: Links | Experiences | ButtonType;
};

export interface Experiences {
  experiences: Experience[];
  default_opened?: boolean;
}

export interface Links {
  links: Link[];
  default_opened?: boolean;
}

export function isLinks(obj: any): obj is Links {
  return obj.links !== undefined;
}

export function isExperiences(obj: any): obj is Experiences {
  return obj.experiences !== undefined;
}

const App: Component = () => {

  document.documentElement.classList.add(colors.bg.main);

  const ogImage = document.createElement("meta");
  ogImage.setAttribute("property", "og:image");
  ogImage.setAttribute("itemprop", "image");
  ogImage.setAttribute("content", document.location.href + images.profilePng.substring(1));
  document.head.appendChild(ogImage);

  const ms = document.createElement("meta");
  ms.setAttribute("name", "msapplication-TileImage");
  ms.setAttribute("content", document.location.href + images.profilePng.substring(1));
  document.head.appendChild(ms);

  const url = document.createElement("meta");
  url.setAttribute("property", "og:url");
  url.setAttribute("content", document.location.href);
  document.head.appendChild(url);

  const thumbnail = document.createElement("link");
  thumbnail.setAttribute("itemprop", "thumbnailUrl");
  thumbnail.setAttribute("href", document.location.href + images.profilePng.substring(1));
  document.head.appendChild(thumbnail);

  const iamgeSrc = document.createElement("link");
  iamgeSrc.setAttribute("rel", "image_src");
  iamgeSrc.setAttribute("href", document.location.href + images.profilePng.substring(1));
  document.head.appendChild(iamgeSrc);

  return (
    <>
      <nav class="relative">
        <div class="w-full text-center">
          <a href="/" class="text-sm text-[#4ea8ed] font-mono">|attach|</a>
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
              } else if (isExperiences(section)) {
                return (
                  <Experiences title={sectionName} experiences={section.experiences} default_opened={section.default_opened || false} />
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
              } else if (isExperiences(section)) {
                return (
                  <Experiences title={sectionName} experiences={section.experiences} solo={true} default_opened={true} />
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
