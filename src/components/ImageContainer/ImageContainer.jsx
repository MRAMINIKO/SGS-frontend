import Image from 'next/image'
import React from 'react'

export const ImageContainer = ({ src, title }) => {
    return (
        <div className='border border-dark p-4 rounded d-flex flex-column justify-content-between'>
            <Image src={src} />
            <p>{title}</p>
        </div>
    )
}
