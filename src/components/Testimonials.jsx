import React from 'react'
import { assets } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='pt-8 px-[20px] md:px-[120px] pb-[120px]'>
            <div className='mb-16'>
                <button className='text-base text-navText font-normal px-4 py-[8px] mb-6 rounded-full bg-[#FFFFFF05]'>Client testimonials</button>
                <h2 className='text-white text-3xl md:text-4xl font-semibold mb-6'>People rave about us,<span className='text-navText'> and there's a good reason.</span></h2>
                <p className='text-base text-navText'>Peruse the testimonials of our contented clientele regarding our goods/services. <br /> We delight in offering top-notch customer assistance and cherish their response.</p>
            </div>
            <div className='grid md:grid-cols-3 space-y-6 space-x-6'>
                <div className='max-w-[500px] px-4 py-6 rounded-xl bg-darkTwo'>
                    <p className='text-navText mb-4'>"I recently implemented this software in our workflow, and it’s been transformative. The intuitive interface and powerful automation have saved us so much time. It's a must-have for any growing business."</p>
                    <div className='flex items-center gap-[12px]'>
                        <img src={assets.card_img} alt="" className='w-[42px] h-[42px] rounded-full' />
                        <div className='flex items-start flex-col'>
                            <p className='text-white'>Lucas</p>
                            <p className='text-navText text-xs'>Product Owner</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[500px] px-4 py-6 rounded-xl bg-darkTwo md:ml-6 ml-0 test-card' >
                    <p className='text-navText mb-4'>"I recently implemented this software in our workflow, and it’s been transformative. The intuitive interface and powerful automation have saved us so much time. It's a must-have for any growing business."</p>
                    <div className='flex items-center gap-[12px]'>
                        <img src={assets.card_img} alt="" className='w-[42px] h-[42px] rounded-full' />
                        <div className='flex items-start flex-col'>
                            <p className='text-white'>Lucas</p>
                            <p className='text-navText text-xs'>Product Owner</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[500px] px-4 py-6 rounded-xl bg-darkTwo md:ml-6 ml-0 test-card'>
                    <p className='text-navText mb-4'>"I recently implemented this software in our workflow, and it’s been transformative. The intuitive interface and powerful automation have saved us so much time. It's a must-have for any growing business."</p>
                    <div className='flex items-center gap-[12px]'>
                        <img src={assets.card_img} alt="" className='w-[42px] h-[42px] rounded-full' />
                        <div className='flex items-start flex-col'>
                            <p className='text-white'>Lucas</p>
                            <p className='text-navText text-xs'>Product Owner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials