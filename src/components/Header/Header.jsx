import Image from 'next/image'
import React from 'react'
import logo from '@public/img/logo.svg';
import menu from '@public/asset/menu.svg';

export const Header = () => {
    return (
        <header className='container d-flex align-items-center justify-content-between sicky-top mb-5 pt-3'>
            <div className='d-flex align-items-center'>
                <Image src={logo} className='me-3' />
                <h3 className='fw-bold'>SeJu</h3>
            </div>
            <Image src={menu} />
        </header>
    )
}
