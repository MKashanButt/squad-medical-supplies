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

export default function ProductSlider({ heading }: { heading: string }) {
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
                <SwiperSlide className={styles.item}>
                    <a href="#contactUs">
                        <Image src={Wheelchairs} alt="" />
                        <h3>Wheelchairs</h3>
                        <p>Discover our range of comfortable and durable wheelchairs, designed for ease of use and
                            enhanced
                            mobility. Choose the perfect model to fit your lifestyle and needs.</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={styles.item}>
                    <a href="#contactUs">
                        <Image src={CgmMonitors} alt="" />
                        <h3>CGM Monitors</h3>
                        <p>Stay on top of your health with our continuous glucose monitors, providing real-time
                            blood
                            sugar
                            data for optimal diabetes management. Easy to use and highly accurate.</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={styles.item}>
                    <a href="#contactUs">
                        <Image src={KneeBraces} alt="" />
                        <h3>Knee Braces</h3>
                        <p>Support and stabilize your joints with our high-quality braces, designed for maximum
                            comfort
                            and
                            effectiveness. Ideal for injury recovery and daily use.</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={styles.item}>
                    <a href="#contactUs">
                        <Image src={HipBraces} alt="" />
                        <h3>Hip Braces</h3>
                        <p>Support and stabilize your joints with our high-quality braces, designed for maximum
                            comfort
                            and
                            effectiveness. Ideal for injury recovery and daily use.</p>
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}