import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            
                <div className="w-96 h-96 bg-blue-500 opacity-30 blur-2xl rounded-full absolute -top-10 -left-20 animate-pulse"></div>
            
            <div className='relative flex flex-col gap-6'>
                <p className='text-xl md:text-2xl text-blue-400 animate-fade-in '>
                    IT'S TIME TO GET:
                </p>
                <h1 className='uppercase font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-text-gradient'>
                    Aslan
                    <span className='text-blue-400'> BULK&#128170;&#127995;</span>
                </h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}