import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologiesElemetnts=technologies.map((techs)=>
  (
    <span key={techs} >{techs}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologiesElemetnts}
      </div>
    </div>
  );
}

export default ProjectItem;
