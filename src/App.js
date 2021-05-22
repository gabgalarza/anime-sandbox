import React, {useEffect, useState} from 'react';
import constants from './constants.json';
import MdFile from './markdown/intro.md';
import AppDelegates from './delegates/app.delegates';
import PageSection from './components/PageSection';
import ContactInfo from './components/ContactInfo';
import ProjectRoll from './components/ProjectRoll';
import Carousel from './components/Carousel';
import * as SVGCarouselComponents from './components/SvgCarouselComponents';
import './App.scss';

const App = () => {
  const [content, setContent] = useState("");
  let AppDelegateMethods = AppDelegates(this);

  useEffect(() => {
    // Fetch markdown posts for sections
    AppDelegateMethods.getMarkdownPost(MdFile)
      .then(res => res.text())
      .then(md => { setContent(md) })

    AppDelegateMethods.initIntroAnimation();
  }, []);

  const { projects, text } = constants;
  const { onHoverArrowAnimation, logoAnimation } = AppDelegateMethods;
  return (
    <div className="App">
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
          id="BuyMeABeer"
          title="Buy Me A Beer"
          children={<div />}
        />
      </div>
    </div>
  );
}

export default App;
