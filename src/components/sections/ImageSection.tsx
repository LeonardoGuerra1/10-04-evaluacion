import imageClasicos from "../../assets/section/Clásicos.jpg"
import imageNuevo from "../../assets/section/Nuevos.jpg"
import imageOST from "../../assets/section/NuevoOST.jpg"
import { useEffect, useState } from "react";

function ImageSection() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000);
  }, []);

  return (
    <section className="max-w-page mx-auto my-10 flex flex-wrap justify-center gap-5">
      <div className={`relative w-[640px] h-[300px] delay-500 ${show ? "translate-x-0 opacity-100" : "-translate-x-1/2 opacity-0"} duration-500`}>
        <img
          src={imageNuevo}
          alt="Clasicos"
          className="w-full h-full rounded"
        />
        <span className="absolute top-2/5 -translate-y-1/2 left-4 italic text-white text-3xl font-semibold flex flex-col items-end">
          <span>Experimenta lo</span>
          <b>moderno!</b>
        </span>
      </div>

      <div className={`relative w-[640px] h-[300px] delay-1000 ${show ? "translate-x-0 opacity-100" : "translate-x-1/2 opacity-0"} duration-500`}>
        <img
          src={imageClasicos}
          alt="Clasicos"
          className="w-full h-full rounded"
        />
        <span className="absolute top-1/2 -translate-y-1/2 left-10 italic text-3xl font-semibold flex flex-col items-end">
          <span>Revive los</span>
          <b>viejos tiempos!</b>
        </span>
      </div>

      <div className={`relative w-[640px] h-[300px] delay-1500 ${show ? "translate-x-0 opacity-100" : "-translate-x-1/2 opacity-0"} duration-500`}>
        <img
          src={imageOST}
          alt="Clasicos"
          className="w-full h-full rounded"
        />
        <span className="absolute top-1/2 -translate-y-1/2 left-4 italic text-red-600 text-3xl font-semibold flex flex-col items-end">
          <span>Y si eres amante de los</span>
          <b>soundtracks!</b>
        </span>
      </div>
    </section>
  );
}

export default ImageSection;