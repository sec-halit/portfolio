/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react'
import ImageRadio from '@/icons/radio.png';
type Props = {
    text: string ,
  };

export default class InfoDetailRadioItem extends Component<Props> {
    render() {
        let { text }= this.props;
        return (
            <section className="info-detail">
                <div className="img-content radio-icon">
                    <img className="img-icon" src={ImageRadio.src} alt="" />
                </div>
                <h4>{text}</h4>
            </section>
        )
    }
}
