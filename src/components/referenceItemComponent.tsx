/* eslint-disable @next/next/no-img-element */
import React, {  FC } from 'react'
import { IReferenceItem } from '@/actions/referenceAction';
import ImageRadio from '@/icons/radio.png';
type Props = {
    Item: IReferenceItem
}

const ReferenceItemComponent : FC<Props> =({Item:{ title, detail ,phone}})=>{
        return (
            <section className="info-detail">
                <div className="img-content radio-icon">
                    <img className="img-icon" src={ImageRadio.src} alt="" />
                </div>
                <div className="col-4">
                    <h4>{title}</h4>
                </div>
                <div className="col-4">
                    <h4>{detail}</h4>
                </div>
                <div className="col-4">
                    <h4>{phone}</h4>
                </div>
            </section>
        )
    }
export default ReferenceItemComponent