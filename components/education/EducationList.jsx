import React from 'react';

const EducationList = ({ education }) => {
  return (
    <div className="education max-w-6xl mx-auto flex flex-col gap-[20px] mt-[50px] bg-white pt-[47px] pl-[37px] pb-[38px] pr-[29px] ">
      {education.map((item, index) => (
        <table key={index}>
          <tbody>
            <tr className={`flex ${index !== education.length - 1 ? 'border-b border-[#F0F0F6] pb-8' : ''}`}>
              <td className='w-full flex flex-col items-stretch'>
                <h3 className='text-text text-[18px] font-semibold leading-6 mb-[25px]'>{item.institution}</h3>
                <p>Graduation Year: <span className=' bg-[#B0B0E6] px-2 text-white'> {item.graduationYear} </span></p>
              </td>
              <td className='w-1/2'>
                <h4 className='text-text text-[18px] font-semibold leading-6 mb-[25px]'> {item.degree}</h4>
                <p>Group: {item.fieldOfStudy} </p>
                <p>Passing Year: {item.graduationYear}</p>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default EducationList;
