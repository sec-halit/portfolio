import React, { FC,ReactElement  } from 'react'
import Layout from '@/page-components/layout/index'
import Cvs  from '@/lib/models/cvModels'
import connectDB from '@/lib/index';
type Props = {  };
const About: FC<Props>=({}):ReactElement => {
  return (<Layout>
   
  </Layout>
  )
}


export default About

export const getServerSideProps = async ()=>{
  return {
    props:{
      
    }
  }
}