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
                slidesPerView={4}
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
                        <Image src={UvbLightWands} alt="" />
                        <h3>UVB Light Wands</h3>
                        <p>Effectively treat skin conditions with our UVB light wands, offering targeted therapy
                            with
                            powerful results. Safe, portable, and easy to operate at home.</p>
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
                <SwiperSlide className={styles.item}>
                    <a href="#contactUs">
                        <Image src={TenseUnit} alt="" />
                        <h3>Tense Unit</h3>
                        <p>Relieve pain naturally with our TENS units, delivering targeted electrical stimulation to
                            soothe
                            muscle aches and tension. Compact, portable, and easy to use.</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={styles.item}>
                    <a href="#contactUs">
                        <Image src={BraceSleves} alt="" />
                        <h3>Brace Sleeves</h3>
                        <p>Keep your braces comfortable and secure with our premium brace sleeves, designed to
                            prevent
                            irritation and improve wearability. Soft, breathable, and easy to clean.</p>
                    </a>
                </SwiperSlide>
                <SwiperSlide className={styles.item}>
                    <a href="#contactUs">
                        <Image src={LymphedemaPumpMassagers} alt="" />
                        <h3>Lymphedema Pump Massagers</h3>
                        <p>Improve circulation and reduce swelling with our lymphedema pump massagers, designed for
                            effective compression therapy. Comfortable, customizable, and easy to use at home.</p>
                    </a>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}