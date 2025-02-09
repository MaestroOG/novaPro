import React from 'react'
import { assets } from '../assets/assets'
import Marquee from 'react-fast-marquee'

const CTA = () => {
    return (
        <div className='bg-darkTwo p-[20px] md:p-[120px]'>
            <div className='flex-col flex md:flex-row md:items-center gap-[62px]'>
                <img src={assets.card_img} alt="" className='rounded-xl h-[480x] w-[480px]' />
                <div>
                    <Marquee speed={15} className='mb-[42px]'>
                        <p className='text-white'>I can be a React component, multiple React components, or just some text.</p>
                    </Marquee>
                    <h2 className='text-3xl md:text-4xl text-white mb-[42px]'>It's not about conserving moments, <span className='text-navText'>it's about ensuring they're never squandered.</span></h2>
                    <button className='text-darkOne bg-white px-6 py-[10px] rounded-3xl truncate'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default CTA