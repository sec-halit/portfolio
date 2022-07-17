import Header from "./header"
import { FC } from "react";

interface Props {
  children: React.ReactNode
}

const Layout:FC<Props> = ({ children})=> {
 
  return (
    <>
      <div className="container mx-auto">
        <Header>
        </Header>
        {children}
      </div>
    </>
  )
}
export default Layout