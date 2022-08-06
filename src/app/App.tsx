import { Component, For } from 'solid-js';
import { colors, links } from '../config';
import Links from './links';
import Profile from './profile';

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
      </main>
    </>
  );
};

export default App;
