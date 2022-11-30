import React, { FC } from 'react'
import { IEducationItem } from '@/actions/educationAction';
// import {  useAppSelector } from '@/store/hooks';
import ResumeHeaderComponent from '@/components/resumeHeaderComponent'
import WorkItemComponent from '@/components/workItemComponent';
import { Language } from '@/lib/helper/types';
type Props = {
    educations: IEducationItem[],
    lang: Language
}
const EducationComponent: FC<Props> = ({ educations, lang }) => (
    <>
        <div className="col-12">
            <ResumeHeaderComponent title={lang === "tr" ? "Eğitim" : "Education"} icon="education" />
            {educations?.map((education: IEducationItem, index: number) => {
                return <WorkItemComponent Item={education} key={(index + 20)} />
            })}
        </div>
    </>
)
export default EducationComponent
