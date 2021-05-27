import React, {useEffect, useState} from 'react';
import constants from './constants.json';
import MdFile from './markdown/intro.md';
import AppDelegates from './delegates/app.delegates';
import PageSection from './components/PageSection';
import NavListMenu from "./components/NavListMenu";
import ContactInfo from './components/ContactInfo';
import ProjectRoll from './components/ProjectRoll';
import PodcastRoll from './components/PodcastRoll';
import Carousel from './components/Carousel';
import * as SVGCarouselComponents from './components/SvgCarouselComponents';
import './App.scss';

const App = () => {
  const AppDelegateMethods = AppDelegates(this);
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch markdown posts for sections
    AppDelegateMethods.getMarkdownPost(MdFile)
      .then(res => res.text())
      .then(md => { setContent(md) })

    AppDelegateMethods.initIntroAnimation();
  }, []);

  const [loading, setLoading] = useState(false);
  const { projects, text } = constants;
  const { onHoverArrowAnimation, logoAnimation, playButtonAnimation } = AppDelegateMethods;

  return (
    <div className="App">
      {/* <NavListMenu className="b-nav-menu" links={constants.navLinks} /> */}
      <div className="App-container">
        <PageSection
          id="Intro"
          blurbText={{
            heading: text.introBlurb.heading,
            copy: content,
          }}
          children={<ContactInfo/>}
        />
        <PageSection
          id="Projects"
          title="Projects"
          blurbText={{
            heading: "",
            copy: constants.text.projectBlurb.copy,
          }}
          children={
            <ProjectRoll
              projects={projects}
              actions={{
                enterButton: onHoverArrowAnimation().enterButton,
                leaveButton: onHoverArrowAnimation().leaveButton
              }}
            />
          }
        />
        <PageSection
          id="TechStack"
          title="Tech Stack"
          children={
            <Carousel
              items={SVGCarouselComponents}
              actions={{
                hover: e => { logoAnimation(e); }
              }}
            />
          }
        />
        <PageSection
          id="Podcast"
          title="Podcasts"
          children={
            <PodcastRoll
              items={constants.podcasts}
              actions={{
                play: e => { playButtonAnimation(e, setLoading); },
                isLoading: loading
              }}
            />
          }
        />
        <PageSection
          id="Footer"
          children={<div>Copyright &copy; {new Date().getFullYear()}</div>}
        />
      </div>
    </div>
  );
}

export default App;
