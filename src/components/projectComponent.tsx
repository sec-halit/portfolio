import React, { FC } from 'react'
import { IProjectItem, SkillColumn } from '@/actions/projectAction';
// import {  useAppSelector } from '../redux/store/hooks';
import InfoDetailRadioItem from './infoDetailRadioItem';
import ResumeHeaderComponent from './resumeHeaderComponent';
import { Language } from '@/lib/helper/types';
type Props = {
    projects: IProjectItem[],
    lang: Language
}

const ProjectComponent: FC<Props> = ({ projects, lang }) => (
    <>
        <ResumeHeaderComponent title={lang === "tr" ? "Projeler" : "Projects"} icon="project" />
        <div className="col-6">
            {
                projects.filter(project => project.column === SkillColumn.COLOUMN_1).map((project, index) => {
                    return (
                        <InfoDetailRadioItem text={project.title} key={index + 20} />
                    )
                })
            }
        </div>
        <div className="col-6">
            {
                projects.filter(project => project.column === SkillColumn.COLOUMN_2).map((project, index) => {
                    return (
                        <InfoDetailRadioItem text={project.title} key={index + 20} />
                    )
                })
            }
        </div>
        <div className="col-12"><p>&nbsp;</p></div>
    </>
)
export default ProjectComponent
