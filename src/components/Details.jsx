import React from 'react'
import { assets } from '../assets/assets'
import { BookA, File, Link, TvMinimalPlay } from 'lucide-react'

const Details = () => {
    return (
        <div className='pt-[62px] px-[20px] md:px-[120px] pb-[120px] text-white'>
            <div className='md:flex md:items-center gap-[60px]'>
                <img src={assets.card_img} alt="" className='w-full mb-5 md:w-[46%] rounded-2xl' />
                <div className='w-full md:w-[54%]'>
                    <h4 className='text-2xl font-bold text-white mb-6'>Track Your Finances with Ease</h4>
                    <p className='text-base text-navText mb-6 font-normal'>Get a comprehensive overview of your financial performance. Monitor net sales, visualize trends over time, and make data-driven decisions to optimize your revenue growth.</p>
                    <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-4 mb-6'>
                        <div className='bg-darkFive flex items-center py-[6px] px-4 gap-2 rounded-md'>
                            <BookA className='text-yellow w-4 h-4' />
                            <p className='text-white text-sm'>Text</p>
                        </div>
                        <div className='bg-darkFive flex items-center py-[6px] px-4 gap-2 rounded-md'>
                            <File className='text-yellow w-4 h-4' />
                            <p className='text-white text-sm'>File</p>
                        </div>
                        <div className='bg-darkFive flex items-center py-[6px] px-4 gap-2 rounded-md'>
                            <TvMinimalPlay className='text-yellow w-4 h-4' />
                            <p className='text-white text-sm'>Video</p>
                        </div>
                        <div className='bg-darkFive flex items-center py-[6px] px-4 gap-2 rounded-md'>
                            <Link className='text-yellow w-4 h-4' />
                            <p className='text-white text-sm'>Link</p>
                        </div>
                    </div>
                    <button className='text-darkOne bg-yellow px-6 py-[10px] rounded-3xl'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Details