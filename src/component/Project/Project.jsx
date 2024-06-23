import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../assets/New folder/1.webp";
import img2 from "../../assets/New folder/2.webp";
import img3 from "../../assets/New folder/3.webp";
import img4 from "../../assets/New folder/4.webp";
import img5 from "../../assets/New folder/5.webp";
import img6 from "../../assets/New folder/6.webp";
import img7 from "../../assets/New folder/7.webp";
import img8 from "../../assets/New folder/8.webp";
import img9 from "../../assets/New folder/9.webp";
import img10 from "../../assets/New folder/10.webp";
import img11 from "../../assets/New folder/11.webp";
import img12 from "../../assets/New folder/12.webp";
import img13 from "../../assets/New folder/13.webp";
import img14 from "../../assets/New folder/14.webp";
import img15 from "../../assets/New folder/15.webp";
import img16 from "../../assets/New folder/16.webp";
import img17 from "../../assets/New folder/17.webp";
import img18 from "../../assets/New folder/18.webp";
import img19 from "../../assets/New folder/19.webp";
import img20 from "../../assets/New folder/20.webp";
import img21 from "../../assets/New folder/21.webp";
import img22 from "../../assets/New folder/22.webp";
import img23 from "../../assets/New folder/23.webp";
import img24 from "../../assets/New folder/24.webp";
import img25 from "../../assets/New folder/25.webp";
import img26 from "../../assets/New folder/26.webp";
import img28 from "../../assets/New folder/28.webp";
import img29 from "../../assets/New folder/29.webp";
import img30 from "../../assets/New folder/30.webp";
import img31 from "../../assets/New folder/31.webp";
import img32 from "../../assets/New folder/32.webp";
import img33 from "../../assets/New folder/33.webp";
import img34 from "../../assets/New folder/34.webp";
import img35 from "../../assets/New folder/35.webp";
import img36 from "../../assets/New folder/36.webp";
import img37 from "../../assets/New folder/37.webp";
import img38 from "../../assets/New folder/38.webp";
import img39 from "../../assets/New folder/39.webp";
import img40 from "../../assets/New folder/40.webp";
import img41 from "../../assets/New folder/41.webp";
import img42 from "../../assets/New folder/42.webp";
import img43 from "../../assets/New folder/43.webp";
import img44 from "../../assets/New folder/44.webp";
import img45 from "../../assets/New folder/45.webp";
import img46 from "../../assets/New folder/46.webp";
import img47 from "../../assets/New folder/47.webp";
import img48 from "../../assets/New folder/48.webp";
import img49 from "../../assets/New folder/49.webp";
import img50 from "../../assets/New folder/50.webp";
import img51 from "../../assets/New folder/51.webp";
import img52 from "../../assets/New folder/52.webp";
import img53 from "../../assets/New folder/53.webp";
import img54 from "../../assets/New folder/54.webp";
import img55 from "../../assets/New folder/55.webp";
import img56 from "../../assets/New folder/56.webp";
import img57 from "../../assets/New folder/57.webp";
import img58 from "../../assets/New folder/58.webp";
import img59 from "../../assets/New folder/59.webp";
import img60 from "../../assets/New folder/60.webp";
import img61 from "../../assets/New folder/61.webp";
import img62 from "../../assets/New folder/62.webp";
import img63 from "../../assets/New folder/63.webp";
import img64 from "../../assets/New folder/64.webp";
import img65 from "../../assets/New folder/65.webp";
import img66 from "../../assets/New folder/66.webp";
import img67 from "../../assets/New folder/67.webp";
import img68 from "../../assets/New folder/68.webp";
import img69 from "../../assets/New folder/69.webp";
import img70 from "../../assets/New folder/70.webp";
import img71 from "../../assets/New folder/71.webp";
import img72 from "../../assets/New folder/72.webp";
import img73 from "../../assets/New folder/73.webp";
import img74 from "../../assets/New folder/74.webp";
import img75 from "../../assets/New folder/75.webp";
import img76 from "../../assets/New folder/76.webp";



import { UilArrowCircleLeft } from "@iconscout/react-unicons";
import { UilArrowCircleRight } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
import './work.css'


const itemData = [
  {
    img: img1,
    title: "Image 1",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img2,
    title: "Image 2",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img3,
    title: "Image 3",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img6,
    title: "Image 6",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img5,
    title: "Image 5",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img4,
    title: "Image 4",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img7,
    title: "Image 7",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img8,
    title: "Image 8",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img9,
    title: "Image 9",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img10,
    title: "Image 10",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img11,
    title: "Image 11",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img12,
    title: "Image 12",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img13,
    title: "Image 13",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img14,
    title: "Image 14",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img15,
    title: "Image 15",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img16,
    title: "Image 16",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img17,
    title: "Image 17",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img18,
    title: "Image 18",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img19,
    title: "Image 19",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img20,
    title: "Image 20",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img21,
    title: "Image 21",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img22,
    title: "Image 22",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img23,
    title: "Image 23",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img24,
    title: "Image 24",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img25,
    title: "Image 25",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img26,
    title: "Image 26",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img28,
    title: "Image 28",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img29,
    title: "Image 29",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img30,
    title: "Image 30",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img31,
    title: "Image 31",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img32,
    title: "Image 32",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img33,
    title: "Image 33",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img34,
    title: "Image 34",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img35,
    title: "Image 35",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img36,
    title: "Image 36",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img37,
    title: "Image 37",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img38,
    title: "Image 38",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img39,
    title: "Image 39",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img40,
    title: "Image 40",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img41,
    title: "Image 41",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img42,
    title: "Image 42",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img43,
    title: "Image 43",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img44,
    title: "Image 44",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img45,
    title: "Image 45",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img46,
    title: "Image 46",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img47,
    title: "Image 47",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img48,
    title: "Image 48",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img49,
    title: "Image 49",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img50,
    title: "Image 50",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img51,
    title: "Image 51",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img52,
    title: "Image 52",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img53,
    title: "Image 53",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img54,
    title: "Image 54",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img55,
    title: "Image 55",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img56,
    title: "Image 56",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img57,
    title: "Image 57",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img58,
    title: "Image 58",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img59,
    title: "Image 59",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img60,
    title: "Image 60",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img61,
    title: "Image 61",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img62,
    title: "Image 62",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img63,
    title: "Image 63",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img64,
    title: "Image 64",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img65,
    title: "Image 65",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img66,
    title: "Image 66",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img67,
    title: "Image 67",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img68,
    title: "Image 68",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img69,
    title: "Image 69",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img70,
    title: "Image 70",
    rows: 4,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img71,
    title: "Image 71",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img72,
    title: "Image 72",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img73,
    title: "Image 73",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img74,
    title: "Image 74",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img75,
    title: "Image 75",
    rows: 3,
    cols: 1,
    rows1: 2,
    cols1: 2,
  },
  {
    img: img76,
    title: "Image 76",
    rows: 2,
    cols: 1,
    rows1: 2,
    cols1: 2,
  }
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
    <div className="hidden md:block md:portfolio-container md: mx-10" style={{ backgroundColor: "white" }}>
    <div className=" my-10 text-4xl text-center font-medium">PROJECTS</div>
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
<div className=" my-10 text-4xl text-center font-Medium">PROJECTS</div>
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

