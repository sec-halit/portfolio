import Header from "./header"
import { FC } from "react";
import Footer from "./footer";

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <>
      <div className="container mx-auto">
        <Header>
        </Header>
        {children}
        <Footer />
      </div>
    </>
  )
}
export default Layout