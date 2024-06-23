import React from 'react'
import img1 from "../../assets/team/taha.jpeg"
import img2 from '../../assets/team/Biljana.jpeg'
import img3 from '../../assets/team/Minhaj.jpg'

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
            
            name: "PAWAN",
            occupation : "SOCIAL MEDIA MANAGER",
        },
        
    ]
  return (
    <> 
    <div className=' mx-16'> 
    <h1 className=' mt-24 mb-12 text-4xl text-end font-boold'> Our team</h1>
    <div className='  grid grid-cols-4  gap-10'>

        

    {item.map((i)=>(
        <div >
            
            <div className=' mb-4 w-72 h-72 overflow-hidden'>
                            <img className='object-cover w-full h-full' src={i.img} alt={i.name} />
                        </div>
            
            <h1 className=' mb-4 text-2xl font-boold'>{i.name}</h1>
            <h1 className=' mb-4 text-xl font-Medium'>{i.occupation}</h1>
        </div>

    ))}
    </div>
    </div>
    
    </>
  )
}

export default Team