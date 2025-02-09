import React from 'react'
import CallButton from './CallButton'

const Navbar = () => {
    const links = [
        'Features',
        'Product',
        'Action',
        'Pricing'
    ]
    return (
        <div className='w-full flex items-center justify-around py-4'>
            <h3 className='text-white font-semibold text-2xl'>Logo</h3>
            <ul className='md:flex items-center gap-10 hidden'>
                {links?.map((li, i) => (
                    <li key={i} className='text-navText cursor-pointer hover:text-white transition-all'>{li}</li>
                ))}
            </ul>
            <CallButton />
        </div>
    )
}

export default Navbar