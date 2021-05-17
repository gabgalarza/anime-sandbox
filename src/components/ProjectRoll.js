import React from 'react';

const ProjectRoll = ({projects}) => {
  return (
    <div id="ProjectRollDiv" className="b-project-roll">
      {projects.map((proj, i) => {
        return (
          <article key={i} className="b-project-roll__project">
            <div>{proj.name}</div>
            <img src={proj.rollImg} alt="Project" />
          </article>
        );
      })}
    </div>
  );
};

export default ProjectRoll;