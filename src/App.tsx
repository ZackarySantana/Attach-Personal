import type { Component } from 'solid-js';

import logo from './logo.svg';

const App: Component = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
        <p class="text-4xl text-red-400 tracking-widest">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
