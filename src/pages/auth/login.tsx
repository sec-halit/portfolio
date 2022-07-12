import Layout from '@/page-components/layout'
import { FC, ReactElement } from 'react'
import SignInEmail from '@/page-components/auth/signInEmail'
import { ClientSafeProvider, getCsrfToken, getProviders, LiteralUnion, signIn } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
import { CtxOrReq } from 'next-auth/client/_utils';
import SignInWithProvider from '@/page-components/auth/signInWithProvider';
type Props = {
  csrfToken?: string,
  providers?: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null
};
const Login: FC<Props> = ({
  csrfToken,
  providers
}): ReactElement => {
    return(
      <>
        <Layout>
          <SignInEmail csrfToken={csrfToken} provider={providers?.credentials} />
          {providers && Object.values(providers).map((provider,key) => provider.name!=="Credentials" &&(
            <SignInWithProvider csrfToken={csrfToken} provider={provider} key={key}/>
          ))}
        </Layout>
      </>
    )
}
export default Login

export async function getServerSideProps(context: CtxOrReq) {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  return {
    props: {
      csrfToken, providers
    }
  }
}