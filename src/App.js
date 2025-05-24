import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Portofolio from './components/Portofolio/Portofolio'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const styles = {
  light: {
    backgroundColor: "#fcfcfc",
    color: "#555",
    fontFamily: '"Poppins", sans-serif',
    lineHeight: 1.5,
  },
  dark: {
    backgroundColor: "#23283e",
    color: "#c6c6c6",
    fontFamily: '"Poppins", sans-serif',
    lineHeight: 1.5,
  },
};

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div
      id="top"
      className={`${themeName} font-[Poppins] text-[var(--clr-fg)] bg-[var(--clr-bg)] leading-[1.5]`}
      style={themeName === "light" ? styles.light : styles.dark}
    >
      <Header />

      <main className="w-[95%] mx-auto mt-8">
        <About />
        <Portofolio />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App
