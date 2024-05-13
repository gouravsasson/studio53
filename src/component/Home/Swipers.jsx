import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import img1 from '../../assets/CoverPage/191014-Backside view.jpg'
import img2 from '../../assets/CoverPage/191014-Backside view02.jpg'
import img3 from '../../assets/CoverPage/191015-Exterior Front.jpg'



export function Swi() {

  

  const [autoplayIndex, setAutoplayIndex] = useState(0);

  const handleAutoplayChange = (index) => {
    setAutoplayIndex(index);
  };
  return (
    <Carousel 
    className="h-screen"
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
    </Carousel>
  );
}