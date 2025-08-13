import "../../index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import { button } from "framer-motion/client";

export default function CarouselHome() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);
    const isMobile = useIsMobile();

    useEffect(() => {
        const fetchCarousel = async () => {
            try {
                const response = await fetch("/data/home-carousel.json");
                const data = await response.json();
                setSlides(data);
            } catch (error) {

            }
        };
        fetchCarousel();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevslide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[currentSlide];

    if (!slide) {
        return null;
    }

    return (
        <div className="relative w-full">
            <div className=" w-full lg:w-[90%] lg:m-auto h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-gray-300 md:rounded-b-lg overflow-hidden">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-full h-full"
                >
                    <img
                        src={slide.background}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover md:rounded-b-lg"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-0 flex flex-col justify-center gap-10 px-4 md:px-10 py-4">
                        <div className="text-white">
                            <motion.h1
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 5 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="flex flex-col gap-3 text-2xl sm:text-3xl lg:text-5xl font-bold"
                            >
                                {slide.title}
                                <span className="text-xl sm:text-2xl lg:text-4xl">{slide.subtitle}</span>
                            </motion.h1>
                        </div>
                        <div>
                            {!isMobile &&
                                <div className="flex flex-wrap gap-4 text-[var(--pink)]">
                                    {slide.links.map((link, index) => (
                                        <div
                                            className="bg-white text-sm sm:text-base md:text-lg font-extrabold p-3 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform duration-100"
                                            key={index}
                                        >
                                            <Link href="#">{link}</Link>
                                        </div>
                                    ))}</div>
                            }
                            {isMobile &&
                                <div className="">
                                    <button
                                        className="text-[var(--pink)] bg-white text-sm sm:text-base md:text-lg font-extrabold p-3 rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform duration-100"
                                    >
                                        Voir plus
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </motion.div>
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-6 z-10">
                    <FaChevronLeft
                        className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                        onClick={prevslide}
                    />
                </div>
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-6 z-10">
                    <FaChevronRight
                        className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                        onClick={nextSlide}
                    />
                </div>
            </div>
            <div className="flex justify-center gap-10 mt-4 md:hidden">
                <FaChevronLeft
                    className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                    onClick={prevslide}
                />
                <FaChevronRight
                    className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                    onClick={nextSlide}
                />
                {/* {slides.map((index) => (
                    <button
                        key={index}
                        className="h-3 w-3 rounded-full bg-[var(--yellow)]"
                    ></button>
                ))} */}
            </div>
        </div>


    );
};