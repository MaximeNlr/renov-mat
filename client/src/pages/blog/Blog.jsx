import Header from "../../Components/Header/Header"
import Promo from "../../Components/Promo/Promo"
import Footer from "../../Components/Footer/Footer"
import { useState, useEffect } from "react"

export default function Blog() {

  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/data/blogs.json');
        const data = await response.json();
        console.log(data);
        setSlides(data);
        setCurrent(data[0]);
      } catch (error) {
        console.error("Error lors de la récupération des blogs", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Promo />
      </div>
      <div className="relative w-full mt-8 overflow-hidden">
        <div className="flex justify-center gap-16 relative h-[400px]">
          {/* Image précédente partiellement visible */}
          <div
            className="w-1/4 flex-shrink-0 opacity-40"
            style={{
              backgroundImage: `url(${slides[(currentIndex - 1 + slides.length) % slides.length]?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Image principale */}
          <div
            className="w-2/3 flex-shrink-0 relative shadow-[inset_0px_0px_100px_50px_rgba(0,_0,_0,_0.7)]"
            style={{
              backgroundImage: `url(${current.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-opacity-40 flex items-end px-4 py-6">
              <h1 className="text-white text-xl md:text-2xl font-semibold leading-tight">
                {current.title}
              </h1>
            </div>
          </div>
          <div
            className="w-1/4 flex-shrink-0 opacity-40"
            style={{
              backgroundImage: `url(${slides[(currentIndex + 1) % slides.length]?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
        <div className="mt-6 px-4 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[var(--yellow)]">
            {current.title}
            <span className="text-gray-500 text-sm font-normal ml-2">Temps de lecture : 7 min</span>
          </h2>
          <p className="text-gray-700 text-md mt-4">{current.content}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}