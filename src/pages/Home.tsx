import Hero from "../sections/Hero";
import MarqueeStrip from "../sections/MarqueeStrip";
import StoryScroll from "../sections/StoryScroll";
import Solutions from "../sections/Solutions";
import PixelExperience from "../sections/PixelExperience";
import Compare from "../sections/Compare";
import Projects from "../sections/Projects";
import Process from "../sections/Process";
import Company from "../sections/Company";
import SocialWall from "../sections/SocialWall";
import Configurator from "../sections/Configurator";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <StoryScroll />
      <Solutions />
      <PixelExperience />
      <Compare />
      <Projects />
      <Process />
      <Company />
      <SocialWall />
      <Configurator />
      <FAQ />
      <Contact />
    </>
  );
}
