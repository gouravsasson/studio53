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
          Studio53 is an international architectural 3D visualization bureau. We
          create 3D renders for Developers, Creative Companies, Architects &
          Interior Designers worldwide. Our clients are professionals who focus
          on the quality of working processes, including the visual presentation
          of their projects. We help to realize their ideas and concepts through
          realistic 3D images. <br />
          We are able to work with spaces of different purpose and scale and
          reveal the potential of each space using visual effects. Our
          visualizations are the balance of photorealism and a unique artistic
          vision.
        </div>
      </div>
      <Work />
    </>
  );
}

export default Home;
