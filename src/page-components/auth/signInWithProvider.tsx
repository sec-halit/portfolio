/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ColorSwatchIcon, LockClosedIcon } from '@heroicons/react/solid'
import React, { FC, ReactElement } from 'react';
import { ClientSafeProvider, signIn } from 'next-auth/react'
type Props = {
    csrfToken?: string | undefined
    provider?: ClientSafeProvider | undefined
}
const SignInWithProvider: FC<Props> = ({
    csrfToken,
    provider
}): ReactElement => {
    const lazyRoot = React.useRef(null)
    const { signinUrl, name, type,callbackUrl } = provider || {}
    const onSubmit = async (e:MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        await signIn(provider?.id,{
               signinUrl:"/auth/login/"+(provider?.id || ""),
               callbackUrl:"/",
               redirect:true
        })
   }
    return (
        <>
            <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div ref={lazyRoot}>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account by {name}</h2>
                    </div>
                    {type !== "oauth" ? (
                        <form className="mt-8 space-y-6" action={signinUrl || ""} method={"post"}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>

                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                    Sign in {name}
                                </button>
                            </div>
                        </form>
                    ) :
                        (
                            <div className="mt-8 space-y-6">
                                <div>
                                    <button
                                       onClick={onSubmit}
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>
                                        Sign in {name}
                                    </button>
                                </div>
                            </div>
                        )}
                </div>
            </div>

        </>
    )
}


export default SignInWithProvider