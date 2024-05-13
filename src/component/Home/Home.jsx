import { Typography, Card } from "@material-tailwind/react";
import { Swi } from "./Swipers";
import Work from "./Portfolio";

function Home() {
  return (
    <>
      <Swi />
      <div className="flex my-48 mx-10 gap-96"> 

      <h1 className=" text-4xl  font-boold">About</h1>
      <div className=" text-2xl font-Medium">Studio53 is an international architectural 3D visualization bureau. We create 3D renders for Developers, Creative Companies, Architects & Interior Designers worldwide. Our clients are professionals who focus on the quality of working processes, including the visual presentation of their projects. We help to realize their ideas and concepts through realistic 3D images. <br />

We are able to work with spaces of different purpose and scale and reveal the potential of each space using visual effects. Our visualizations are the balance of photorealism and a unique artistic vision.</div>
      
      </div>
      <Work/>
    </>
  );
}

export default Home;
