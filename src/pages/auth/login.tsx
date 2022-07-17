import Layout from '@/page-components/layout'
import { FC, ReactElement } from 'react'
import SignInEmail from '@/page-components/auth/signInEmail'
import { ClientSafeProvider, getCsrfToken, getProviders, getSession, LiteralUnion } from 'next-auth/react';
import type { BuiltInProviderType } from 'next-auth/providers';

import SignInWithProvider from '@/page-components/auth/signInWithProvider';
import { GetServerSideProps } from 'next/types';
type Props = {
  csrfToken?: string,
  providers?: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null,
  loginType?:BuiltInProviderType
};
const Login: FC<Props> = ({
  csrfToken,
  providers,
  loginType
}): ReactElement => {
    return(
      <>
        <Layout>
          {providers && Object.values(providers).sort((a,b)=>a.name>b.name?0:-1).map((provider,key) =>(
            (provider?.id==="credentials" && ( loginType===null || loginType==="credentials")) && (<SignInEmail csrfToken={csrfToken} provider={provider} key={key} />) || (
              (provider?.id===loginType) && (<SignInWithProvider csrfToken={csrfToken} provider={provider} key={key}/>)
            )))
          }
        </Layout>
      </>
    )
}
export default Login
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { loginType=null } = context?.query
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  const session = await getSession({ req: context.req});
  if(session){
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props:{},
    }
  }
  return {
    props: {
      csrfToken, providers,loginType:loginType
    }
  }
}