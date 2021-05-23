import React from 'react';

const ProjectRoll = ({ projects, actions }) => {
  return (
    <div id="ProjectRollDiv" className="b-project-roll">
      {projects.map((proj, i) => {
        return (
          <article key={i} className="b-project-roll__project">
            <div className="b-project-roll__project--lang">{proj.lang}</div>
            <h2 className="b-project-roll__project--name">{proj.name}</h2>
            <div>{proj.desc}</div>
            <div className="b-action-btn-container">
              <div
                className="b-action-btn-container__action-btn"
                onMouseOver={actions.enterButton}
                onMouseLeave={actions.leaveButton}
              >
                <div>Repo</div>
                <span> → </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProjectRoll;