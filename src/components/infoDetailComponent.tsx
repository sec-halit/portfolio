/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import ImgLocation from '@/icons/location.png';
import ImgPhone from '@/icons/phone.png';
import ImgMail from '@/icons/email.png';
import ImgLinkend from '@/icons/linkend-2.png';
type Props = {
  info: any
}
const InfoDetailComponent: FC<Props> = ({ info: { email, phone, location, profileUrl } }) => (
  <>
    <div className="col-6">
      <section className="info-detail">
        <div className="img-content">
          <img className="img-icon" src={ImgLocation.src} alt="" />
        </div>
        <h4>{location}</h4>
      </section>
      <section className="info-detail">
        <div className="img-content">
          <img className="img-icon phone-icon" src={ImgPhone.src} alt="" />
        </div>
        <h4>{phone}</h4>
      </section>
    </div>
    <div className="col-6">
      <section className="info-detail">
        <div className="img-content">
          <img className="img-icon email-icon" src={ImgMail.src} alt="" />
        </div>
        <h4>{email}</h4>
      </section>
      <section className="info-detail">
        <div className="img-content">
          <img className="img-icon linkend-icon" src={ImgLinkend.src} alt="" />
        </div>
        <h4><a href={profileUrl} target="blank"> {profileUrl}</a></h4>
      </section>
    </div>
  </>
)
export default InfoDetailComponent