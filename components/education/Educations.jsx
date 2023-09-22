import React from 'react'
import Content from'../Content'
import Education from './EducationList';

export default function Educations() {
    const educationData = [
        {
          institution: "Shanto-Mariam University of Creative Technology",
          degree: "BSc. In Engineering",
          fieldOfStudy: "Computer Science & Engineering",
          graduationYear: 2021,
        },
        {
          institution: "Feni Polytechnic Institute",
          degree: "Diploma In Engineering",
          fieldOfStudy: "Computer Technology",
          graduationYear: 2014,
        },
        {
          institution: "Neazpur Union High School",
          degree: "SSC",
          fieldOfStudy: "Science",
          graduationYear: 2009,
        }
      ];
    
  return (
    <div>
        <Content
            title="Education"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        />
        <Education education={educationData} />
    </div>
  )
}
