import React, { FC }  from 'react'
type Props = {
    className?: string ,
    children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
  };
const SectionsComponent:FC<Props> = ({className,  children }) => (
        <div className={"row "+ (className || "")}>
            {children}
       </div>
)
export default SectionsComponent