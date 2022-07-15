import React, { FC,ReactElement  } from 'react'
import Layout from '@/page-components/layout/index'
import Cvs  from '@/lib/models/cvModels'
import connectDB from '@/lib/index';
type Props = {  };
const About: FC<Props>=({}):ReactElement => {
  return (<Layout>
    <div className="container mx-auto p-2">
      <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </a>
    </div>
  </Layout>
  )
}


export default About

export const getServerSideProps = async ()=>{
  await connectDB();
  const Items =await Cvs.findOne().sort('-_id');
  console.log("Items",Items)
  return {
    props:{
      
    }
  }
}