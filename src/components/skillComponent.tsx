/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import { ISkillItem, SkillColumn } from '@/actions/skillAction';
// import {  useAppSelector } from '@/store/hooks';
import ImgSkil from '@/icons/skills.png';
import InfoDetailRadioItem from './infoDetailRadioItem';
import { Language } from '@/lib/helper/types';
type Props ={
  skills:ISkillItem[],
  lang:Language
}
const SkillComponent:FC<Props> = ({skills,lang}) => {
  // const skills = useAppSelector(state => state.skills.items);
  return (
    <>
      <div className="col-12">
        <div className="resume-header">
          <div className="img-content">
            <img className="img-icon" src={ImgSkil.src} alt="" />
          </div>
          <h3>{lang==="tr"?"Yetenekler":"Abilities"} </h3>

        </div>
      </div>

      <div className="col-4">
        {
          skills.filter(skill => skill.column === SkillColumn.COLOUMN_1).map((skill, index) => {
            return (
              <InfoDetailRadioItem text={skill.title} key={index + 20} />
            )
          })
        }
      </div>
      <div className="col-4">
        {
          skills.filter(skill => skill.column === SkillColumn.COLOUMN_2).map((skill, index) => {
            return (
              <InfoDetailRadioItem text={skill.title} key={index + 20} />
            )
          })
        }
      </div>
      <div className="col-4">
        {
          skills.filter(skill => skill.column === SkillColumn.COLOUMN_3).map((skill, index) => {
            return (
              <InfoDetailRadioItem text={skill.title} key={index + 20} />
            )
          })
        }
      </div>
    </>
  )
}
export default SkillComponent