import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swi } from "./Swipers";
import Work from "./Portfolio";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutElement = aboutRef.current;

    gsap.fromTo(aboutElement, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: aboutElement,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true
        }
      }
    );
  }, []);

  return (
    <>
      <div className="h-screen">
        <Swi />
      </div> 

      <div ref={aboutRef} className="lg:flex mb-48 mx-16 gap-96">
        <h1 className="mb-5 text-4xl font-Medium">About</h1>
        <div className="text-2xl font-Light">
         Studio 53 is a global architectural 3D visualization studio that produces 3D renders for Developers, Creative Companies, Architects & Interior Designers worldwide. Our clientele comprises professionals who prioritize the quality of work processes, especially the visual representation of their projects. We assist in bringing their ideas and concepts to life through lifelike 3D images.
We excel in working with spaces of various functions and sizes, enhancing each space's potential through visual effects. Our visualizations strike a balance between photorealism and a distinct artistic perspective.
        </div>
      </div>
      <Work />
    </>
  );
}

export default Home;
