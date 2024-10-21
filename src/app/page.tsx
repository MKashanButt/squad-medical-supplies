"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import PopupForm from "@/components/PopupForm";
import Footer from "@/components/Footer";
import { toggleDialog } from "@/utils/DialogHelper";
import { counter } from "@/utils/CounterHelper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import styles from "@/assets/css/Home.module.css"

import "swiper/css";
import "swiper/css/navigation";

import HeroSlideOne from "@/assets/images/hero-slider-three.png"
import HeroSlideTwo from "@/assets/images/hero-slider-one.jpg"
import HeroSlideThree from "@/assets/images/hero-slider-two.jpg"

import KneeBraces from "@/assets/images/knee-braces.jpg"
import BraceSleves from "@/assets/images/brace-sleves.jpg"
import CgmMonitors from "@/assets/images/cgm-monitors.jpg"
import Wheelchairs from "@/assets/images/wheelchairs.jpg"
import UvbLightWands from "@/assets/images/uvb-light-wands.jpg"
import HipBraces from "@/assets/images/hip-braces.jpg"
import TenseUnit from "@/assets/images/tense-unit.jpg"
import LymphedemaPumpMassagers from "@/assets/images/lymphedema-pump-massagers.jpg"
import AboutUs from "@/assets/images/about-us.png"
import Link from "next/link";

export default function Home() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  useEffect(() => {
    const target = document.getElementById('stats');

    if (target) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counter('statesNumber');
            counter('experienceNumber');
            counter('patientNumber');
            observer.unobserve(target);
          }
        });
      }, {
        threshold: 1.0
      });

      observer.observe(target);
    }
  }, []);

  return (
    <main>
      <PopupForm />
      <Header />
      <section className={styles.hero}>
        <Swiper className={styles.overlaySlider}
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          autoplay
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          loop
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.overlay}></div>
            <Image src={HeroSlideOne} alt="" className={styles.image} />
            <div className={styles.content}>
              <h1 className={styles.heading}>Squad Medical Supplies</h1>
              <p>Durable equipment and disposable medical supplies delivered to your home. </p>
              <button className="primary">Contact Us</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.overlay}></div>
            <Image src={HeroSlideTwo} alt="" className={styles.image} />
            <div className={styles.content}>
              <h1 className={styles.heading}>Expanding Our Presence</h1>
              <p>Shipping to: Florida, New jersey, Texas, North & South Carolina</p>
              <button className="primary">Contact Us</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.overlay}></div>
            <Image src={HeroSlideThree} alt="" className={styles.image} />
            <div className={styles.content}>
              <h1 className={styles.heading}>APD provider</h1>
              <p>Caring for children. We are a provider for Agency for Persons with Disabilities (APD) Learn how to apply here so you can spend less time worrying about their medical supplies</p>
              <button className="primary">Learn More</button>
            </div>
          </SwiperSlide>
          <div className="customNavigation">
            <button ref={navigationPrevRef}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M328 112L184 256l144 144" />
              </svg>
            </button>
            <button ref={navigationNextRef}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M184 112l144 144-144 144" />
              </svg>
            </button>
          </div>
        </Swiper>
      </section>
      <section className={styles.whatWeDo}>
        <div className={styles.head}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "30%" }}>
            <span>Squad Medical Supplies</span>
            <h2>What We Do</h2>
          </div>
          <div className={styles.content}>
            <p>We are a dedicated DME company which provides disposable medical products and durable equipment
              having a
              broad product catalog comprising: incontinence, ostomy, urological, wound care, and diabetes
              supplies,
              all delivered conveniently and discreetly to the patient's home.</p>
            <button>About Us</button>
          </div>
        </div>
        <div className={styles.stage}>
          <div className={styles.item}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
              <path
                d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128"
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="32" />
              <path
                d="M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zM403.61 270.13l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z"
                fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
            </svg>
            <h3>Great Customer Service</h3>
            <p>Making your life easier and more enjoyable. The experienced staff of Sunshine Medical are
              committed to enhancing the quality of life of those we serve our patients!</p>
          </div>
          <div className={styles.item}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
              <path
                d="M256.32 126.24l-120.16 78.25 120.16 78.24L136.16 361 16 282.08l120.16-78.24L16 126.24 136.16 48zm-120.8 259.52l120.16-78.25 120.16 78.25L255.68 464zm120.8-103.68l120.16-78.24-120.16-77.6L375.84 48 496 126.24l-120.16 78.25L496 282.73 375.84 361z" />
            </svg>
            <h3>Free Sample Program</h3>
            <p>NOT SURE which size or style sample to order? Call our toll-free number today 1-888-504-4956 to
              request your free sample, delivered in a discreet package to your home.</p>
          </div>
          <div className={styles.item}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
              <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="32" />
              <circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="32" />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="32" d="M48 80h64l48 272h256" />
              <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none"
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
            </svg>
            <h3>Fast Delivery Process</h3>
            <p>Delivery frame time 24 to 72 hours after receiving Authorization. One Stop Medical Store straight
              to the patient's home.</p>
          </div>
        </div>
      </section >
      <section className={styles.promotion} id="topProducts">
        <h2>Our Top 3 Helping Products</h2>
        <div className={styles.stage}>
          <div className={styles.item} id="dialogBraces">
            <Image src={KneeBraces} alt="" />
            <div className={styles.overlay}></div>
            <h3>Struggling with Joint Pain? Find Relief with Our Orthopedic Braces!</h3>
            <button onClick={() => toggleDialog('braces')}>Get Your Product Now</button>
          </div>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <Image src={CgmMonitors} alt="" />
            <h3>Fed Up with Finger Pricks? Discover Easy Glucose Monitoring!</h3>
            <button onClick={() => toggleDialog('braces')}>Get Your Product Now</button>
          </div>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <Image src={LymphedemaPumpMassagers} alt="" />
            <h3>Battling Swollen Muscles? Try Our Lymphedema Pump Massagers!</h3>
            <button onClick={() => toggleDialog('braces')}>Get Your Product Now</button>
          </div>
        </div>
      </section>
      <section className={styles.products} id="products">
        <h2>Products</h2>
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
      </section >
      <section className={styles.stats}>
        <span>At Squad Medical Supplies</span>
        <h2>Our Stats</h2>
        <hr />
        <p>Speak for themselves</p>
        <div className={styles.stage} id="stats">
          <div className={styles.item}>
            <div className={styles.container}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                <path d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="32" />
                <path
                  d="M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z"
                  fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="32" d="M88 176v112M144 232H32" />
              </svg>
              <h3 id="experienceNumber">0</h3>
              <p>Years of EXPERIENCE Combined in the healthcare industry</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.container}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                <rect x="32" y="112" width="448" height="352" rx="48" ry="48" fill="none"
                  stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                <path d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="32" />
              </svg>
              <h3 id="patientNumber">0</h3>
              <p>Patients SATISFIED with our family service and caring for over 10 years</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.container}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 512">
                <path
                  d="M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="32" />
              </svg>
              <h3 id="statesNumber">0</h3>
              <p>STATES Business presence: Florida, North & South Carolina, Texas, New Jersey</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutUs} id="aboutUs">
        <div className={styles.image}>
          <Image src={AboutUs} alt="" />
        </div>
        <div className={styles.content}>
          <h2>About Us</h2>
          <p>At , our mission is to improve patient lives through innovative and dependable medical solutions.
            Since 2020, we’ve proudly served over 1,000 patients, providing a comprehensive range of durable
            medical equipment designed to meet diverse health needs.</p>
          <p>From orthopedic braces to glucose monitors, our products are crafted with a focus on quality,
            comfort, and effectiveness. We are dedicated to offering the latest advancements in medical
            technology.We ensure our patients receive the best care and support. Trust us to be your partner in
            health,
            guiding you towards a more comfortable and healthier life.</p>

          <a href=""><button>Contact Us at +1 (954) 417 7926</button></a>
        </div>
      </section>
      <Footer />
    </main >
  );
}
