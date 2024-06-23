import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import img1 from '../../assets/CoverPage/swi/1.webp'
import img2 from '../../assets/CoverPage/swi/2.webp'
import img3 from '../../assets/CoverPage/swi/3.webp'
import img4 from '../../assets/CoverPage/swi/4.webp'
import img5 from '../../assets/CoverPage/swi/5.webp'



export function Swi() {

  

  const [autoplayIndex, setAutoplayIndex] = useState(0);

  const handleAutoplayChange = (index) => {
    setAutoplayIndex(index);
  };
  return (
   
    
    <Carousel 
   className=" absolute top-0  h-screen"
    autoplay
    autoplayInterval={2000} 
    autoplayIndex={autoplayIndex}
    onAutoplayChange={handleAutoplayChange}
    loop
    >
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={img4}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={img5}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    
    
    
  );
}