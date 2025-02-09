import React from 'react'
import { assets } from '../assets/assets'

const FeatureTwo = () => {
    return (
        <div className='p-[20px] md:p-[120px] mt-10 md:mt-0'>
            <div className='flex-col md:flex-row flex items-start gap-[60px]'>
                <div className='w-full md:w-[54%]'>
                    <h4 className='text-2xl font-bold text-white mb-6'>Streamline Your Workflow</h4>
                    <p className='text-base text-navText mb-6 font-normal'>Maximize productivity with our intuitive software. Effortlessly manage tasks, <br /> automate repetitive processes, and keep your team aligned with real-time <br /> updates and insights.</p>
                </div>
                <div className='w-full md:w-[46%]'>
                    <img src={assets.card_img} alt="" className='w-full rounded-2xl mb-6' />
                    <div className='md:flex items-center justify-between hidden'>
                        <h5 className='text-white text-2xl'>$45.2M</h5>
                        <p className='text-base text-navText'>Revenue generated from subscription services across all <br /> platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureTwo