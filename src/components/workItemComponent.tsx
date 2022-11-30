import React, { FC, Component } from 'react'
import { IWorkItem } from '@/actions/workAction';
type Props = {
    Item: IWorkItem
}

const WorkItemComponent: FC<Props> = ({ Item: { title, dateTitle, detail } }) => (
    <div className="resume-item">
        <h4>{title}</h4>
        <h5 className="date-range">
            {dateTitle}
        </h5>
        <p>
            <em>
                {detail}
            </em>
        </p>
    </div>
)
export default WorkItemComponent