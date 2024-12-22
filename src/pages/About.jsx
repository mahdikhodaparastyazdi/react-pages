import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsletterBox'
const About = () => {
    return (
        <div>

            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>asdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna kore nasda asdan asdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk sdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna kore nasda asdan asdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk a sdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna kore nasda asdan asdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk a alknsdlkna kore nasda asdan asndlk lknew nfwjw asdaasdsa</p>
                    <p>asdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna  kore nasda asdanasdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna kore nasda asdan</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>asdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna kore nasda asdanasdan asdnlsa alnkdalk adnlkanlkda lkndlasdanklk alknsdlkna kore nasda</p>
                </div>
            </div>

            <div className='text-2xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality assurance:</b>
                    <p className='text-gray-600'>We meticalnsa select and vet each product to ensure it meets our stringent quality standard.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>With our user-friendly and hassle-free ordering process, shopping has never been easier </p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority</p>
                </div>
            </div>

            <NewsLetterBox />

        </div>
    )
}

export default About