import React, { Component } from 'react'
import { IWorkItem } from '../redux/actions/workAction';
type Props ={
    Item:IWorkItem
}

export default class WorkItemComponent extends Component<Props> {
    render() {
        let { title, dateTitle, detail } = this.props.Item;
        return (
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
    }
}