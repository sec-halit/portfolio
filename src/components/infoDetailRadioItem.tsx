/* eslint-disable @next/next/no-img-element */
import React, { FC, Component } from 'react'
import ImageRadio from '@/icons/radio.png';
type Props = {
    text: string
};

const InfoDetailRadioItem: FC<Props> = ({ text }) => (
    <section className="info-detail">
        <div className="img-content radio-icon">
            <img className="img-icon" src={ImageRadio.src} alt="" />
        </div>
        <h4>{text}</h4>
    </section>
)
export default InfoDetailRadioItem