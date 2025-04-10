import GalleryCarousel from "./components/carousel/Carousel"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import ImageSection from "./components/sections/ImageSection"
import NewestSection from "./components/sections/NewestSection"

function App() {
  return (
    <>
      <Navbar />

      <div className="mt-5 max-w-carousel mx-auto">
        <GalleryCarousel />
      </div>

      <NewestSection />
      <ImageSection />

      <Footer />
    </>
  )
}

export default App
