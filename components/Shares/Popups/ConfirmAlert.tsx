import gsap from 'gsap';
import React, { useState, useEffect } from 'react'

const ConfirmAlert = ({display, text, setDisplay, onSubmit}: any) => {

    useEffect(() => {
        let alertPopup = gsap.timeline()
        // alertPopup.to('.alert-pop-up',
        // {
        //     duration: 0,
        //     scale: 0
        // });
        if(display==true)
        {
            document.querySelector('.alert-pop-up')?.classList.remove('hidden');
            document.querySelector('.alert-pop-up')?.classList.add('flex');
            alertPopup.to('.alert-pop-up',{
                duration: 0.5,
                x: 0,
                scale: 1
            });
            alertPopup.fromTo('.alert-pop-up-wraper',{
                x: 0,
                scale: 1.2,
                opacity: 0,
            },
            {
                duration: 0.5,
                x: 0,
                scale: 1,
                opacity: 1
            });
        }
        else
        {
            alertPopup.fromTo('.alert-pop-up-wraper',{
                x: 0,
                scale: 1,
                opacity: 1
            },
            {
                duration: 0.5,
                x: 0,
                scale: 1.2,
                opacity: 0
            });
            alertPopup.to('.alert-pop-up',{
                duration: 0.5,
                x: 0,
                scale: 0,
            });
        }
    },[display])

    return (
        <div className="alert-pop-up fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 z-50 hidden flex-wrap justify-center items-start">
            <div className='alert-pop-up-wraper bg-white w-96 rounded-xl p-2 mt-32'>
                <div className='px-4'>
                    <h3 className="pt-4 pb-8 text-center">{text}</h3>
                    <div className="text-right">
                        <button className='bg-blue-500 text-white px-2 shadow-sm rounded-lg text-lg mr-2' onClick={(e)=>onSubmit(e)}>Yes</button>
                        <button className='bg-red-500 text-white px-2 shadow-sm rounded-lg text-lg' onClick={()=> setDisplay(false)}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ConfirmAlert.defaultProps = {
    text: "Are you sure! to implement this process",
    display: false,
    setDisplay: () => {},
    onSubmit: () => {}
}

export default ConfirmAlert