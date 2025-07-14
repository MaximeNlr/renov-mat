import "../../index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion";

export default function CarouselHome() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);

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
        <div className="flex flex-row gap-3">
            <div className="flex items-center pl-5 pr-5">
                <FaChevronLeft
                    className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                    onClick={prevslide}
                />
            </div>
            <AnimatePresence
                className="relative w-full rounded-b-lg"
            >
                <div className="relative w-full lg:h-[500px] bg-gray-300 rounded-b-lg overflow-hidden">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative lg:h-[500px] w-full bg-cover font-bold rounded-b-lg object-cover inset-0 z-0"
                    >
                        <div>
                            <img
                                src={slide.background} alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover rounded-b-lg"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] rounded-b-2xl z-0 flex flex-col justify-center gap-20 pl-14">
                            <div className="text-white flex flex-col gap-3">
                                <motion.h1
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 5 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    className="flex flex-col gap-4 text-4xl lg:text-5xl"
                                >
                                    {slide.title}
                                    <span className="text-3xl lg:text-4xl"
                                    >
                                        {slide.subtitle}
                                    </span>
                                </motion.h1>
                            </div>
                            <div className="flex gap-10 text-[var(--pink)]">
                                {slide.links.map((link, index) => (
                                    <div
                                        className="bg-white text-base lg:text-lg font-extrabold p-3.5 rounded-lg cursor-pointer shadow-2xl shadow-black hover:scale-[1.1] duration-100"
                                        key={index}>
                                        <Link href="#">{link}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div >
                </div>
            </AnimatePresence>
            <div className="flex items-center pr-5 pl-5">
                <FaChevronRight
                    className="cursor-pointer text-[var(--yellow)] text-3xl hover:text-[var(--green)] transition-colors duration-100"
                    onClick={nextSlide}
                />
            </div>
        </div>
    );
};