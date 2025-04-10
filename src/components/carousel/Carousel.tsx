import image01 from "../../assets/carousel/RECIEN-LLEGADOS.png"
import image02 from "../../assets/carousel/Rock-2.jpg"
import image03 from "../../assets/carousel/NuevosJAZZ.jpg"
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    image: image01,
    title: "Recién llegados"
  },
  {
    id: 2,
    image: image02,
    title: "Rock en español"
  },
  {
    id: 3,
    image: image03,
    title: "Jazz"
  },
]

function GalleryCarousel() {
    const [show, setShow] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setShow(true)
      }, 1000);
    }, []);
  
  return (
    <div className={`${show ? " opacity-100" : "opacity-0"} duration-500`}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={true}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
          },
        }}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        transitionDuration={500}
        itemClass="w-carousel"
      >
        {images.map(image => (
          <div key={image.id} className="flex justify-center items-center">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-[425px] max-w-carousel m-auto rounded"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default GalleryCarousel;
