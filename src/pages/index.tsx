/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC,ReactElement  } from 'react'

import Layout from '@/page-components/layout/index'
import CommingSonComponent from '@/page-components/coming-pages/comingSoonComponent';
type Props = {  };
const Home: FC<Props>=():ReactElement => {
  return (<Layout>
    <CommingSonComponent />
  </Layout>
  )
}
export default Home