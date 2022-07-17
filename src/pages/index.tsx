/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC,ReactElement  } from 'react'
import CommingSon from '@/images/coming-son.svg'
import Layout from '@/page-components/layout/index'
type Props = {  };
const Home: FC<Props>=():ReactElement => {
  return (<Layout>
    <div className="container mx-auto p-2">
      <img src={CommingSon.src} width="100%" height="100%" alt="" />
    </div>
  </Layout>
  )
}
export default Home