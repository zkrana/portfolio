import React from "react";

export default function Skills({ skills }) {
  return (
    <div className=" border-b border-[#F0F0F6] pb-4 mt-4">
      <h4 className="text-lg font-medium text-white"> Skills </h4>
      <div className="w-[220px] pt-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-box">
            <span className="bar-title">{skill.name}</span>
            <div className="skill-bar">
              <span className={`skill-per ${skill.className}`}>
                <span className="tooltip">{skill.percentage}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
