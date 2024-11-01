"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import styles from "@/assets/css/components/ProductSlider.module.css"

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import KneeBraces from "@/assets/images/knee-braces.jpg"
import BraceSleves from "@/assets/images/brace-sleves.jpg"
import CgmMonitors from "@/assets/images/cgm-monitors.jpg"
import Wheelchairs from "@/assets/images/wheelchairs.jpg"
import UvbLightWands from "@/assets/images/uvb-light-wands.jpg"
import HipBraces from "@/assets/images/hip-braces.jpg"
import TenseUnit from "@/assets/images/tense-unit.jpg"
import LymphedemaPumpMassagers from "@/assets/images/lymphedema-pump-massagers.jpg"

interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
}

interface SliderProps {
    heading: string;
    data: Product[];
}

export default function ProductSlider({ heading, data }: SliderProps) {

    return (
        <section className={styles.products}>
            <h2>{heading}</h2>
            <Swiper className={styles.stage}
                modules={[Navigation, A11y, Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                navigation
                autoplay
                loop
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className={styles.item}>
                        <a href={item.link}>
                            <div className={styles.image}>
                                <Image src={item.image} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}