import Carousel from "react-multi-carousel";
import listaVinilos from "../../vinilos/vinilos";
import ItemCard from "../items/ItemCard";
import { useEffect, useState } from "react";

let sorteds = [...listaVinilos]
sorteds = sorteds.sort((a, b) => b.anio - a.anio).slice(0, 10)

function NewestSection() {
  const [extend, setExtend] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setExtend(true)
    }, 500);
  }, []);

  return (
    <div className="relative py-5 my-10">
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-100 via-stone-100 to-amber-100 ${extend ? "scale-x-100" : "scale-x-0"} duration-1000 origin-left`}></div>
      <section className={`max-w-page mx-auto w-full delay-500 ${extend ? "opacity-100" : "opacity-0"} duration-500`}>
        <h2 className="text-3xl font-semibold">
          ¡Los más nuevos!
        </h2>
        <div className="mt-5">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            arrows={false}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5
              },
            }}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            transitionDuration={500}
          >
            {sorteds
              .map(vinilo => (
                <ItemCard key={vinilo.id} item={vinilo} />
              ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default NewestSection;