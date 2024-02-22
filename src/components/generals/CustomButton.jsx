import React from 'react'
import { Link } from 'react-scroll'

const CustomButton = ({ text, to = "/" }) => {
    return (
        <Link href={to} className="bg-black cursor-pointer hover:bg-webRed-0 transition-all text-white max-w-[180px] w-full text-center px-10 py-3 whitespace-nowrap  rounded-lg">
            {text}
        </Link>
    )
}

export default CustomButton