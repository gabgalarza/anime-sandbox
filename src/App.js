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

  useEffect(() => {
    const AppDelegateMethods = AppDelegates(this);
    // Fetch markdown posts for sections
    AppDelegateMethods.getMarkdownPost(MdFile)
      .then(res => res.text())
      .then(md => { setContent(md) })

    AppDelegateMethods.initIntroAnimation();

  }, []);

  const { projects, text } = constants;
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
          id="Intro"
          title="Projects"
          children={
            <ProjectRoll projects={projects} />
          }
        />
        <PageSection
          id="TechStack"
          title="Tech Stack"
          children={
            <Carousel items={SVGCarouselComponents} />
          }
        />
        <PageSection
          id="Hobbies"
          title="Hobbies"
          children={<div />}
        />
      </div>
    </div>
  );
}

export default App;
