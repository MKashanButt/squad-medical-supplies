"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { closeDialog, toggleDialog } from "@/utils/DialogHelper";
import { counter } from "@/utils/CounterHelper";
import ProductSlider from "@/components/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import styles from "@/assets/css/Home.module.css";
import PopupForm from "@/components/PopupForm";

import "swiper/css";
import "swiper/css/navigation";

import HeroSlideOne from "@/assets/images/hero-slider-one.png";
import HeroSlideTwo from "@/assets/images/hero-slider-two.png";
import HeroSlideThree from "@/assets/images/hero-slider-three.png";

import KneeBraces from "@/assets/images/knee-braces.jpg";
import LymphedemaPumpMassagers from "@/assets/images/lymphedema-pump-massagers.jpg";
import CgmMonitors from "@/assets/images/cgm-monitors.jpg";
import Wheelchairs from "@/assets/images/wheelchairs.jpg";
import HipBraces from "@/assets/images/hip-braces.jpg";

import AboutUs from "@/assets/images/about-us.png";

import wellcare from "@/assets/images/wellcare-insurance.png";
import humana from "@/assets/images/humana-insurance.jpg";
import aetna from "@/assets/images/aetna-insurance.png";
import cigna from "@/assets/images/cigna-insurance.jpg";
import uhc from "@/assets/images/uhc-insurance.jpg";
import bcbs from "@/assets/images/bcbs-insurance.png";
import clover from "@/assets/images/clover-insurance.png";
import medicare from "@/assets/images/medicare-insurance.png";

import Link from "next/link";

interface Product {
  id: number;
  image: any;
  title: string;
  description: string;
  link: string;
}

export default function Home() {
  const data: Product[] = [
    {
      id: 1,
      image: Wheelchairs,
      title: "Wheelchairs",
      description:
        "Discover our range of comfortable and durable wheelchairs, designed for ease of use and enhanced mobility. Choose the perfect model to fit your lifestyle and needs.",
      link: "#contactUs",
    },
    {
      id: 2,
      image: CgmMonitors,
      title: "CGM Monitors",
      description:
        "Stay on top of your health with our continuous glucose monitors, providing real-time blood sugar data for optimal diabetes management. Easy to use and highly accurate.",
      link: "#contactUs",
    },
    {
      id: 3,
      image: KneeBraces,
      title: "Knee Braces",
      description:
        "Support and stabilize your joints with our high-quality braces, designed for maximum comfort and effectiveness. Ideal for injury recovery and daily use.",
      link: "#contactUs",
    },
    {
      id: 4,
      image: HipBraces,
      title: "Hip Braces",
      description:
        "Support and stabilize your joints with our high-quality braces, designed for maximum comfort and effectiveness. Ideal for injury recovery and daily use.",
      link: "#contactUs",
    },
  ];
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  useEffect(() => {
    const target = document.getElementById("stats");

    if (target) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              counter("statesNumber");
              counter("experienceNumber");
              counter("patientNumber");
              observer.unobserve(target);
            }
          });
        },
        {
          threshold: 1.0,
        }
      );

      observer.observe(target);
    }
  }, []);

  return (
    <main>
      <section className={styles.hero}>
        <Swiper
          className={styles.overlaySlider}
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={1}
          autoplay
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          loop
        >
          <SwiperSlide className={`${styles.slide} ${styles.slideOne}`}>
            <Link href="/about">
              <Image src={HeroSlideOne} alt="" className={styles.image} />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image src={HeroSlideTwo} alt="" className={styles.image} />
          </SwiperSlide>
          <SwiperSlide className={`${styles.slide} ${styles.slideLast}`}>
            <Image src={HeroSlideThree} alt="" className={styles.image} />
          </SwiperSlide>
          <div className="customNavigation">
            <button ref={navigationPrevRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                  d="M328 112L184 256l144 144"
                />
              </svg>
            </button>
            <button ref={navigationNextRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="10"
                  d="M184 112l144 144-144 144"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </section>
      <section className={`${styles.whatWeDo} container`}>
        <div className={styles.head}>
          <div className={styles.headings}>
            <span>Squad Medical Supplies</span>
            <h2>What We Do</h2>
          </div>
          <div className={styles.content}>
            <p>
              We are a dedicated DME company which provides disposable medical
              products and durable equipment having a broad product catalog
              comprising: incontinence, ostomy, urological, wound care, and
              diabetes supplies, all delivered conveniently and discreetly to
              the patient's home.
            </p>
            <Link href="/about">
              <button>About Us</button>
            </Link>
          </div>
        </div>
        <div className={styles.stage}>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              viewBox="0 0 512 512"
            >
              <path
                d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zM403.61 270.13l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
            <h3>Great Customer Service</h3>
            <p>
              Making your life easier and more enjoyable. The experienced staff
              of Sunshine Medical are committed to enhancing the quality of life
              of those we serve our patients!
            </p>
          </div>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              viewBox="0 0 512 512"
            >
              <path d="M256.32 126.24l-120.16 78.25 120.16 78.24L136.16 361 16 282.08l120.16-78.24L16 126.24 136.16 48zm-120.8 259.52l120.16-78.25 120.16 78.25L255.68 464zm120.8-103.68l120.16-78.24-120.16-77.6L375.84 48 496 126.24l-120.16 78.25L496 282.73 375.84 361z" />
            </svg>
            <h3>Free Sample Program</h3>
            <p>
              NOT SURE which size or style sample to order? Call our toll-free
              number today 1-888-504-4956 to request your free sample, delivered
              in a discreet package to your home.
            </p>
          </div>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              viewBox="0 0 512 512"
            >
              <circle
                cx="176"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <circle
                cx="400"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M48 80h64l48 272h256"
              />
              <path
                d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
            <h3>Fast Delivery Process</h3>
            <p>
              Delivery frame time 24 to 72 hours after receiving Authorization.
              One Stop Medical Store straight to the patient's home.
            </p>
          </div>
        </div>
      </section>
      {/* <section className={`${styles.promotion} container`} id="topProducts">
        <h2>Our Top 3 Helping Products</h2>
        <div className={styles.stage}>
          <div className={styles.item} id="dialogBraces">
            <Image src={KneeBraces} alt="knee-braces" />
            <div className={styles.overlay}></div>
            <h3>Struggling with Joint Pain? Find Relief with Our Orthopedic Braces!</h3>
            <button onClick={() => toggleDialog('braces')}>Get Your Product Now</button>
          </div>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <Image src={CgmMonitors} alt="cgm-monitors" />
            <h3>Fed Up with Finger Pricks? Discover Easy Glucose Monitoring!</h3>
            <button onClick={() => toggleDialog('braces')}>Get Your Product Now</button>
          </div>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <Image src={LymphedemaPumpMassagers} alt="lymphedema-pump-massagers" />
            <h3>Battling Swollen Muscles? Try Our Lymphedema Pump Massagers!</h3>
            <button onClick={() => toggleDialog('braces')}>Get Your Product Now</button>
          </div>
        </div>
      </section> */}
      <ProductSlider heading="Trending Products" data={data} />
      <section className={styles.stats}>
        <span>At Squad Medical Supplies</span>
        <h2>Our Stats</h2>
        <hr />
        <p>Speak for themselves</p>
        <div className={`${styles.stage} container`} id="stats">
          <div className={styles.item}>
            <div className={styles.container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <rect
                  x="32"
                  y="112"
                  width="448"
                  height="352"
                  rx="48"
                  ry="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <h3 id="patientNumber">0</h3>
              <p>
                Patients SATISFIED with our family service and caring for over
                10 years
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M88 176v112M144 232H32"
                />
              </svg>
              <h3 id="experienceNumber">0</h3>
              <p>Years of EXPERIENCE Combined in the healthcare industry</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.container}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M313.27 124.64L198.73 51.36a32 32 0 00-29.28.35L56.51 127.49A16 16 0 0048 141.63v295.8a16 16 0 0023.49 14.14l97.82-63.79a32 32 0 0129.5-.24l111.86 73a32 32 0 0029.27-.11l115.43-75.94a16 16 0 008.63-14.2V74.57a16 16 0 00-23.49-14.14l-98 63.86a32 32 0 01-29.24.35zM328 128v336M184 48v336"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <h3 id="statesNumber">0</h3>
              <p>
                STATES Business presence: Florida, North & South Carolina,
                Texas, New Jersey
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.aboutUs} container`} id="aboutUs">
        <div className={styles.image}>
          <Image src={AboutUs} alt="" />
        </div>
        <div className={styles.content}>
          <h2>About Us</h2>
          <p>
            Our goal at Squad Medical Supplies is to make your life and the
            lives of those you care easier, healthier, and more comfortable. We
            are here to offer specialized solutions that support independence
            and well-being because we recognize the special needs of seniors. We
            are committed to helping you at every stage of your path to better
            living, whether that means providing you with knowledgeable advice
            on insurance and health plans or kind caregivers who treat you like
            family.
          </p>
          <p>
            We are proud to provide a wide selection of Durable Medical
            Equipment (DME) that is intended to improve your quality of life.
            Our products, which range from wheelchairs and lymphedema pump
            massagers to knee braces and CGM monitors, are carefully chosen for
            their dependability and efficacy. Squad Medical Supplies makes
            certain that each item satisfies your particular requirements,
            delivering ease, security, and tranquility.
          </p>
          <p>
            Our first priorities are your well-being and health. For this
            reason, we're dedicated to providing individualized care, open
            guidance, and continuous assistance. You are a member of our family
            when you work with Squad Medical Supplies, not just a client. Allow
            us to support you in living with grace, comfort, and the assurance
            that you have a reliable team on your side.
          </p>
          <button>
            <Link href="tel:+14044422019">Contact Us at +1 (404) 442-2019</Link>
          </button>
        </div>
      </section>
      <section className={`${styles.insurances} container`}>
        <h2>Insurances We Accept</h2>
        <p>Know if you are covered by our ever growing list of Health Plans</p>
        <div className={styles.stage}>
          <div className={styles.item}>
            <Image src={wellcare} alt="wellcare-insurance-logo" />
          </div>
          <div className={styles.item}>
            <Image src={humana} alt="humana-insurance-logo" />
          </div>
          <div className={styles.item}>
            <Image src={aetna} alt="aetna-insurance-logo" />
          </div>
          <div className={styles.item}>
            <Image src={cigna} alt="cigna-insurance-logo" />
          </div>
          <div className={styles.item}>
            <Image src={uhc} alt="uhc-insurance-logo" />
          </div>
          <div className={styles.item}>
            <Image src={bcbs} alt="bcbs-insurance-logo" />
          </div>
          <div className={styles.item}>
            <Image src={clover} alt="clover-insurance-logo" />
          </div>
          <div className={styles.item}>
            <Image
              src={medicare}
              alt="medicare-insurance-logo"
              className={styles.molinaLogo}
            />
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.overlay}></div>
        <div className={`${styles.container} container`}>
          <div className={styles.content}>
            <h2>Need Help?</h2>
            <p>Get in touch now and get free consultation</p>
          </div>
          <button className="primary">
            <Link href="tel:+14044422019">+1 (404) 442-2019</Link>
          </button>
        </div>
      </section>
      <PopupForm id="braces" onClose={() => closeDialog("braces")} />
    </main>
  );
}
