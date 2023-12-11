import screen1 from '../assets/images/screen1.png'
import screen2 from '../assets/images/screen2.png'
import screen3 from '../assets/images/screen3.png'
import screen4 from '../assets/images/screen4.png'
import screen5 from '../assets/images/screen5.png'
import { useState } from 'react';
import { GrNext } from "react-icons/gr";
export default function Gallery(){
    const [current,setCurrent] = useState(1)
    const data = [
    {
        id:1,
        src:screen1
    },
    {
        id:2,
        src:screen4
    },
    {
        id:3,
        src:screen2
    },
    {
        id:4,
        src:screen5,
    },
    {
        id:5,
        src:screen3
    },
    ] ;
    const handleNext = () =>{
        setCurrent((prev)=> prev === data.length ? 1 : prev + 1)
    }
    return (
        <>
        <div className='flex space-x-4 items-center mt-48'>
         {data.map((img)=>{
            return <img src={img.src} alt='demo' className={`h-48 2xl:h-96 xl:h-96 lg:h-96 md:h-96 w-48 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 ${current === img.id ? 'block' : 'hidden'}`}/>
         })}
         <GrNext onClick={handleNext} className='text-2xl'/>
        </div>
        <div className='flex space-x-2 mt-2 items-center justify-center w-3/4 '>
        {data.map((img)=>{
            return <div className={` ${img.id === current ? 'bg-blue-900' : 'bg-white' }  h-2 w-2 rounded-full`}></div>
        })}
        </div>
     
        </>
    )
}