import React from 'react'
import img1 from "../../assets/team/taha.jpeg"
import img2 from '../../assets/team/Biljana.jpeg'
import img3 from '../../assets/team/Minhaj.jpg'
import img4 from "../../assets/team/4.webp"

function Team() {
    const item=[
        {
            id:1,
            img: img1,
            name: "TAHA",
            occupation : "CREATIVE DRIECTOR/FOUNDER",
        },
        {
            id:2,
            img: img2,
            name: "BILJANA",
            occupation : "INTERIOR ARCHITECT",
        },
        {
            id:3,
            img: img3,
            name: "MINHAJ",
            occupation : "3D MODELLER",
        },
        {
            id:3,
            img:img4,
            name: "PAWAN",
            occupation : "SOCIAL MEDIA MANAGER",
        },
        
    ]
  return (
    <> 
    <div className=' mx-16'> 
    <h1 className=' font-Medium   mt-24 mb-12 text-4xl text-end '> Our team</h1>
    <div className=' md:grid grid-cols-4  gap-10'>

        

    {item.map((i)=>(
        <div >
            
            <div className='mt-10 w-full h-60 mb-4 md:w-72 md:h-72 overflow-hidden'>
                            <img className='object-cover w-full h-full' src={i.img} alt={i.name} />
                        </div>
            
            <h1 className=' mb-4 text-2xl font-Medium'>{i.name}</h1>
            <h1 className=' mb-4 text-xl font-light'>{i.occupation}</h1>
        </div>

    ))}
    </div>
    </div>
    
    </>
  )
}

export default Team