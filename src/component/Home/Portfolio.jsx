import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../assets/portfolio/01.1.2023-Mujeer Villa-Family Living V1.webp";
import img2 from "../../assets/portfolio/11.11.2022-Masood Masterbedroom-V2-Day.webp";
import img3 from "../../assets/portfolio/GF-Round Seating with flower.webp";
import img4 from "../../assets/portfolio/19.6.2022-Bathroom V1-2.webp";
import img5 from "../../assets/portfolio/27.01.2023-Family Living.webp";
import img6 from "../../assets/portfolio/GF-Sofa.webp";
import { UilArrowCircleLeft } from "@iconscout/react-unicons";
import { UilArrowCircleRight } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
import './work.css'


const itemData = [
  {
    img: img1,
    title: "Image 1",
    rows: 8,
    cols: 2,
    rows1: 1,
    cols1: 2,
  },
  {
    img: img2,
    title: "Image 2",
    rows: 6,
    cols: 2,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img3,
    title: "Image 3",
    rows: 7,
    cols: 2,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img6,
    title: "Image 6",
    rows: 4,
    cols: 2,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img5,
    title: "Image 5",
    rows: 6,
    cols: 2,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img4,
    title: "Image 4",
    rows: 5,
    cols: 2,
    rows1: 1,
    cols1: 2,
  },
  
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Work() {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( itemData.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === itemData.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }



  return (
    
    <>
    <div className=" hidden md:block md:portfolio-container md: mx-10  "  style={{ backgroundColor: "white" }}>
    <div className="text-4xl text-center font-Medium">PORTFOLIO</div>
    {openModal && (
      <div className="sliderWrap">
        <UilTimes className="btnClose" onClick={handleCloseModal} />
        <UilArrowCircleLeft className="btnPrev" onClick={prevSlide} />
        <UilArrowCircleRight className="btnNext" onClick={nextSlide} />
        <div className="fullScreenImage">
          <img src={itemData[slideNumber].img} alt="" />
        </div>
      </div>
    )}

    <ImageList
      sx={{ width: 1, height: 1, background: "white", padding: 2 }}
      variant="quilted"
      gap={20}
      cols={4}
      rowHeight={121}
      className="galleryWrap"
    >
      {itemData &&
        itemData.map((item, index) => (
          <ImageListItem
            className="single overflow-hidden"
            onClick={() => handleOpenModal(index)}
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              className="hover:scale-110 overflow-hidden cursor-pointer duration-700 ease-in-out"
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  </div>
  
  
  
  <div className=" portfolio-container mx-2 md:hidden  "  style={{ backgroundColor: "white" }}>
    <div className="text-4xl text-center font-Medium">PORTFOLIO</div>
    {openModal && (
      <div className="sliderWrap">
        <UilTimes className="btnClose" onClick={handleCloseModal} />
        <UilArrowCircleLeft className="btnPrev" onClick={prevSlide} />
        <UilArrowCircleRight className="btnNext" onClick={nextSlide} />
        <div className="fullScreenImage">
          <img src={itemData[slideNumber].img} alt="" />
        </div>
      </div>
    )}

    <ImageList
      sx={{ width: 1, height: 1, background: "white", padding: 2 }}
      variant="quilted"
      gap={10}
      cols={4}
      rowHeight={121}
      className="galleryWrap"
    >
      {itemData &&
        itemData.map((item, index) => (
          <ImageListItem
            className="single overflow-hidden"
            onClick={() => handleOpenModal(index)}
            key={item.img}
            cols={item.cols1 || 1}
            rows={item.rows1 || 1}
          >
            <img
              className="hover:scale-110 overflow-hidden cursor-pointer duration-700 ease-in-out"
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>

    

  </div>
  </>
  
  
);
}

