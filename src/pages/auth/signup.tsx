import Layout from '@/page-components/layout'
import { FC, ReactElement } from 'react'
import SignInEmail from '@/page-components/auth/signInEmail'
import { ClientSafeProvider, getCsrfToken, getProviders, getSession, LiteralUnion, signIn } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
import { CtxOrReq } from 'next-auth/client/_utils';
import SignInWithProvider from '@/page-components/auth/signInWithProvider';
import SignUp from '@/page-components/auth/signUp';
type Props = {
  csrfToken?: string,
  providers?: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null
};
const Register: FC<Props> = ({
  csrfToken,
  providers
}): ReactElement => {
  return (
    <>
      <Layout>
        <SignUp csrfToken={csrfToken} provider={providers?.credentials} />
      </Layout>
    </>
  )
}
export default Register

export async function getServerSideProps(context: CtxOrReq) {
  const csrfToken = await getCsrfToken(context);
  const providers = await getProviders();
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    }
  }
  return {
    props: {
      csrfToken, providers
    }
  }
}