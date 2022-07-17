// import dynamic from 'next/dynamic'
import React, {  FC } from 'react'
import  { StaticImageData } from 'next/image'
type Props = {
    title: string,
    icon: string
}
interface StaticRequire {
    default: StaticImageData;
}
const ResumeHeaderComponent: FC<Props> = ({ title, icon }) => {
    let newIcon:StaticRequire =require(`../assets/icons/${icon}.png`);
    return (
        <div className="col-12">
            <div className="resume-header">
                <div className="img-content">
                    <img className="img-icon" src={newIcon.default?.src} alt="" />
                </div>
                <h3>{title}</h3>

            </div>
        </div>
    )
}
export default ResumeHeaderComponent;
