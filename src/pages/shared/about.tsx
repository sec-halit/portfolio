import React, { FC, ReactElement } from 'react'
import Layout from '@/page-components/layout/index'
interface IAboutProps {

};

const About: FC<IAboutProps> = ({ }): ReactElement => {
  return (<Layout>
  </Layout>
  )
}


export default About

export const getServerSideProps = async () => {
  return {
    props: {

    }
  }
}