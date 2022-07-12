import Header from "./header"
// import Footer from "./footer"
import { useState } from "react";
import {  useSession } from "next-auth/react";

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { data: session, status } = useSession()
  return (
    <>
      <div className="container mx-auto">
        <Header session={session}>
        </Header>
        <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl font-bold p-4"> {status.toUpperCase() || ""}</h1>
        {children}
      </div>
    </>
  )
}