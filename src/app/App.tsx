import type { Component } from 'solid-js';
import { colors } from '../config';
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
        <Links />
      </main>
    </>
  );
};

export default App;
