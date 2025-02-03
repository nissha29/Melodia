import React from 'react'
import dashBoardImage from '../assets/dashboardImage.png'
import dashboardImageForXL from '../assets/dashboardImageForXL.png'
import dashboardImageForLG from '../assets/dashboardImageForLG.png'
import dashboardImageForMD from '../assets/dashboardImageForMD.png'
import dashboardImageForMobile from '../assets/dashboardImageForMobile.png'

export default function () {
    return (
        <div>
            <div className='2xl:flex hidden justify-center items-center pt-24 px-20'>
                <img
                    src={dashBoardImage}
                    alt="dashBoardImage"
                    className='w-[100rem] h-[50rem] shadow-pink-300 shadow-2xl transition-all duration-300 hover:-translate-y-4'
                />
            </div>
            <div className='2xl:hidden hidden xl:flex justify-center items-center pt-24 px-20'>
                <img
                    src={dashboardImageForXL}
                    alt="dashBoardImage"
                    className='w-[100rem] h-[45rem] shadow-pink-300 shadow-2xl transition-all duration-300 hover:-translate-y-4'
                />
            </div>
            <div className='xl:hidden hidden lg:flex justify-center items-center pt-24 px-20'>
                <img
                    src={dashboardImageForLG}
                    alt="dashBoardImage"
                    className='w-[100rem] h-[45rem] shadow-pink-300 shadow-2xl transition-all duration-300 hover:-translate-y-4'
                />
            </div>
            <div className='lg:hidden hidden md:flex justify-center items-center pt-24 px-11'>
                <img
                    src={dashboardImageForMD}
                    alt="dashBoardImage"
                    className='w-[45rem] h-[45rem] shadow-pink-300 shadow-2xl transition-all duration-300 hover:-translate-y-4'
                />
            </div>
            <div className='md:hidden hidden sm:flex justify-center items-center pt-24 px-11'>
                <img
                    src={dashboardImageForMD}
                    alt="dashBoardImage"
                    className='w-[40rem] h-[50rem] shadow-pink-300 shadow-2xl transition-all duration-300 hover:-translate-y-4'
                />
            </div>
            <div className='flex sm:hidden justify-center items-center pt-24 px-3'>
                <img
                    src={dashboardImageForMobile}
                    alt="dashBoardImage"
                    className='w-[40rem] h-[50rem] shadow-pink-300 shadow-2xl transition-all duration-300 hover:-translate-y-4'
                />
            </div>
        </div>
    )
}
