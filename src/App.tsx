import { ThemeProvider } from './theme/ThemeContext';
import { Nav } from './components/layout/Nav';
import { Hero } from './components/sections/Hero';
import { Featured } from './components/sections/Featured';
import { SelectedWork } from './components/sections/SelectedWork';
import { Craft } from './components/sections/Craft';
import { Experience } from './components/sections/Experience';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <SelectedWork />
        <Craft />
        <Experience />
        <About />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
