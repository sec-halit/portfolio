import { Language } from '@/lib/helper/types'
import React, { FC } from 'react'
import { IWorkItem } from '../redux/actions/workAction'
import { useAppSelector } from '../redux/store/hooks'
import ResumeHeaderComponent from './resumeHeaderComponent'
import WorkItemComponent from './workItemComponent'
type Props={
    works:IWorkItem[],
    lang:Language
}
const WorkComponent:FC<Props> = ({works,lang}) => {
    // const Items = useAppSelector((state) => state.works.items)
    return (
        <>
            <div className="col-12">
                <ResumeHeaderComponent title={lang==="tr"?"İş Deneyimi":"Work Experience"} icon="work" />
                {works && works.map((work: IWorkItem, index: number) => {
                    return <WorkItemComponent Item={work} key={(index + 20)} />
                })}
            </div>
        </>
    )
}
export default WorkComponent
