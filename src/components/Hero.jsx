import React from 'react'
import Carousel from './Carousel'

const Hero = () => {
    return (
        <div className='mt-4'>
            <div className='pt-[120px] px-[20px] md:px-[150px] flex items-center justify-center flex-col'>
                <h1 className='text-5xl md:text-[56px] font-bold text-center text-yellow mb-6'>Turn leads into revenue, fast.</h1>
                <p className='text-navText text-center mb-6'>Unveil insights enhanced by AI from previously gathered user emails and domains. <br /> Now also enriched with Twitter & Telegram</p>
                <button className='text-darkOne bg-yellow px-6 py-[10px] rounded-3xl truncate'>Get Started</button>
            </div>
            <div className='mb-8 mt-16'>
                <Carousel />
            </div>
        </div>
    )
}

export default Hero