/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const reactjs = new URL("@/icons/code/reactjs.svg",import.meta.url).pathname;
    const nextjs = new URL("@/icons/code/nextjs.svg",import.meta.url).pathname;
    const reduxjs = new URL("@/icons/code/redux.svg",import.meta.url).pathname;
    const typescriptJs = new URL("@/icons/code/ts-node.svg",import.meta.url).pathname;
    const vercelLogo = new URL("@/icons/code/vercel-logotype-light.svg",import.meta.url).pathname;
    const githubLogo = new URL("@/icons/code/GitHub_Logo_White.png",import.meta.url).pathname;
    const mongoLogo = new URL("@/icons/code/mongodb-ar21.svg",import.meta.url).pathname;
    const sassLogo = new URL("@/icons/code/Sass_Logo_Color.svg",import.meta.url).pathname;
    return (<footer className="container mx-auto p-2 rounded-lg shadow md:px-2 md:py-4 custom-footer-content" style={{position:"fixed",bottom:0}}>
        <div className="sm:flex sm:items-center sm:justify-between">
            {/* <a href="" className="flex items-center mb-4 sm:mb-0">
                <img src={reactjs} className="mr-3 h-8" alt="React JS" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <a href="" className="flex items-center mb-4 sm:mb-0">
                <img src={nextjs} className="mr-3 h-8" alt="Next JS" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a> */}
            <ul className="flex flex-nowrap items-center mb-6 text-sm text-gray-500 sm:mb-0 light:text-gray-400 ">
                <li>
                    <img src={reactjs} className="mr-4 hover:underline md:mr-6 mr-3 h-8" alt="React JS" />
                    {/* <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a> */}
                </li>
                <li className='rounded-full border-white border-2 border-solid	bg-white'>
                    <img src={nextjs} className="mr-4 pl-4 hover:underline md:mr-6 mr-3 h-8" alt="Next JS" />
                    {/* <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a> */}
                </li>
                <li className=''>
                    <img src={reduxjs} className="mr-4 pl-4 hover:underline md:mr-6 mr-3 h-8" alt="Redux JS" />
                    {/* <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a> */}
                </li>
                <li>
                    <img src={typescriptJs} className="mr-4 pl-4 hover:underline md:mr-6 mr-3 h-8" alt="Typescript JS" />
                    {/* <a href="#" className="hover:underline">Contact</a> */}
                </li>
                <li>
                    <img src={vercelLogo} className="mr-4 pl-4 hover:underline md:mr-6 mr-3 h-8" alt="Vercel" />
                </li>
                <li>
                    <img src={githubLogo} className="mr-4 pl-4 hover:underline md:mr-6 mr-3 h-8" alt="Github" />
                </li>
                <li>
                    <img src={mongoLogo} className="mr-4 pl-4 hover:underline md:mr-6 mr-3 h-8" alt="Mongo Db" />
                </li>
                <li>
                    <img src={sassLogo} className="mr-4 pl-4 hover:underline md:mr-6 mr-3 h-8" alt="Sass Compiler" />
                </li>
            </ul>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        {/* <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span> */}
    </footer>);
};

export default Footer;
