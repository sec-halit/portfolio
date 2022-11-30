import Avatar from '@/components/avatar';
import EducationComponent from '@/components/educationComponent';
import InfoDetailComponent from '@/components/infoDetailComponent';
import ProjectComponent from '@/components/projectComponent';
import ReferenceComponent from '@/components/referenceComponent';
import SectionsComponent from '@/components/sectionsComponent';
import SkillComponent from '@/components/skillComponent';
import WorkComponent from '@/components/workComponent';
import { Language } from '@/lib/helper/types';
import Layout from '@/page-components/layout';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import React, { FC, LegacyRef } from 'react';
import ReactToPrint from 'react-to-print';

const env = process.env.NODE_ENV
// type RedirectResult ={
//     redirect: {
//         permanent: boolean,
//         destination:string
//     }
// }
type ProfileProps = {
    data: {
        info: any,
        projects: any,
        skills: any,
        works: any,
        educations: any,
        references: any
    },
    lang: Language
}
const ProfileComponent: FC<ProfileProps> = ({ data: { info, projects, skills, works, educations, references }, lang }) => {
    let componentRef: any = React.createRef<React.ReactElement>()
    return (
        <>
            <Layout>
                <div className="m-2">
                    <div className="flex justify-end">
                        <ReactToPrint trigger={() => {
                            return <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Print
                                </span>
                            </button>;
                        }} content={() => componentRef} />
                    </div>

                    <div className="root-content" ref={(ref: any) => { componentRef = ref }}>
                        <header>
                            <Avatar />
                        </header>
                        <div className="main">
                            <section className="info-title">
                                <h2>{info?.fullName || ""}</h2>
                                <p className="section-title-comment"><em>{info?.tagName || ""}</em></p>
                            </section>
                            <SectionsComponent>
                                <InfoDetailComponent info={info} />
                            </SectionsComponent>
                            <SectionsComponent>
                                <div className="col-12">
                                    <h4 className="detail-title">
                                        {lang === "tr" && "Kariyer hedefimde her zaman yeniliklere açığım. Benim için gelişim asla bitmeyecek bir yaşam biçimidir." || "I am always open to innovations in my career goal. For me, development is a way of life that will never end."}
                                    </h4>
                                </div>
                            </SectionsComponent>
                            <SectionsComponent className="flex-wrap">
                                <ProjectComponent projects={projects} lang={lang} />
                                <SkillComponent skills={skills} lang={lang} />
                            </SectionsComponent>
                            <SectionsComponent>
                                <WorkComponent works={works} lang={lang} />
                            </SectionsComponent>
                            <SectionsComponent>
                                <EducationComponent educations={educations} lang={lang} />
                            </SectionsComponent>
                            <SectionsComponent>
                                <ReferenceComponent references={references} lang={lang} />
                            </SectionsComponent>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
}
export default ProfileComponent;
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, query } = context;
    let host = ""
    if (env === 'development') {
        host = "http://localhost:3000"
    } else {
        host = "https://" + req.headers["host"]
    }
    let lang = query["lang"] || "tr";
    if (Array.isArray(lang)) {
        lang = lang.join("")
    }
    const headers: any = { ...context.req.headers } || "";
    const res = await fetch(host + `/api/cvs/getProfile/${lang}`, {
        method: 'GET',
        headers: headers
    })
    if (res?.status === 401) {
        return {
            redirect: {
                permanent: false,
                destination: "/auth/login"
            }
        }
    }

    const data = await res?.json();

    if (data?.data == null) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    const resultData = data?.data;
    resultData["skills"] = resultData?.skills.map((x: any) => { return { ...x, "column": parseInt(x["column"]) - 1 } })
    resultData["projects"] = resultData?.projects.map((x: any) => { return { ...x, "column": parseInt(x["column"]) - 1 } })
    return {
        props: {
            data: resultData,
            lang: lang || "tr"
        }
    }
}