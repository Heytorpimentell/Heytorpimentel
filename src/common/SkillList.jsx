import React from "react";

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Icone de Checkmark" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
