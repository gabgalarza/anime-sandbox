import React from 'react';

const ProjectRoll = ({ projects }) => {
  return (
    <div id="ProjectRollDiv" className="b-project-roll">
      {projects.map((proj, i) => {
        return (
          <article key={i} className="b-project-roll__project">
            <div className="b-project-roll__project--lang">{proj.lang}</div>
            <h2 className="b-project-roll__project--name">{proj.name}</h2>
            <div>{proj.desc}</div>
            <div onMouseEnter={() => console.log('hover over read more')}>Read More <span>›</span></div>
          </article>
        );
      })}
    </div>
  );
};

export default ProjectRoll;