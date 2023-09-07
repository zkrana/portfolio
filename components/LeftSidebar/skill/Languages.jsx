import React from 'react';

export default function Languages({ languages }) {
  return (
    <div className=' border-b border-[#F0F0F6] pb-4 mt-4'>
      <h4 className='text-lg font-medium'> Languages </h4>
      <div className='pt-4'>
        {languages.map((language) => (
          <div key={language.name} className="skill-box">
            <span className='bar-title'>{language.name}</span>
            <div className="skill-bar">
              <span className={`skill-per ${language.className}`}>
                <span className='tooltip'>{language.percentage}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
