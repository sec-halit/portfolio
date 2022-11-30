import React, { FC } from 'react'
import { UserCircleIcon } from '@heroicons/react/outline'
type LogoType = { src?: string | null }
const Logo: FC<LogoType> = ({ src }) => {
    return src ? (
        <img
            className="h-8 w-8 rounded-full"
            src={src}
            alt=""
        />
    ) : <UserCircleIcon color='white' className="h-8 w-8 rounded-full" />

}
export default Logo