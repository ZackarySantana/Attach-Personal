import { Component, For } from 'solid-js';
import { colors, links } from '../config';
import Links, { Link } from './links';
import Profile from './profile';

export type Links = {
  [key: string]: {
    links: Link[];
    default_opened?: boolean;
  };

};

const App: Component = () => {

  document.documentElement.classList.add(colors.bg.main);

  return (
    <>
      <nav>
        <a href="https://github.com/ZackarySantana/Attach" target="_blank" class="text-center w-full block text-sm text-[#4ea8ed] font-mono">|attach|</a>
      </nav>
      <main class={`
        ${colors.text.base}
      `}>
        <Profile />
        {Object.keys(links).length > 1 &&
          <For each={Object.keys(links)}>
            {(link) => (
              <Links title={link} linksList={links[link].links} default_opened={links[link].default_opened || false} />
            )}
          </For>
        }
        {Object.keys(links).length == 1 &&
          <For each={Object.keys(links)}>
            {(link) => (
              <Links title={link} linksList={links[link].links} solo={true} default_opened={links[link].default_opened || false} />
            )}
          </For>
        }
        <footer>
          <div class={`px-[40px] flex align-center items-center pt-[30px] ${colors.text['link-content']}`}>
            <a href="https://github.com/ZackarySantana/Attach" target="_blank">
              <p class="text-sm">Putting the power of connecting in to the hands of the user.</p>
              <h3>Click here to make your own <span class="text-[#4ea8ed] font-mono">|attach|</span></h3>
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
