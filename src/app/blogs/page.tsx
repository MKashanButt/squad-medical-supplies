'use client'
import styles from '@/assets/css/Blog.module.css';

import hero from "@/assets/images/blog-hero.jpg";
import Image, { StaticImageData } from 'next/image';

import medicalPolicy from "@/assets/images/2025-medicare-policy-hero.jpg"
import cgm from "@/assets/images/cgm-hero.jpg"
import covid from "@/assets/images/covid-hero.jpg"
import medicalEquipment from "@/assets/images/medical-equipment-hero.jpg"
import { useState } from 'react';
import Link from 'next/link';

interface Blog {
    id: number
    image: StaticImageData,
    title: string,
    content: string,
    tags: string,
    link: string
}

export default function Blogs() {

    const Blogs: Blog[] = [
        {
            "id": 1,
            'image': medicalPolicy,
            'title': 'How the 2025 Medicare Policy Changes Impact Your Access to Medical Supplies',
            'content': "Medicare's rules are always changing to accommodate patients' increasing demands and increase access to healthcare in general. Beneficiaries' access to durable medical equipment (DME) will be directly impacted by the major changes introduced in the 2025 revisions. These upgrades include enhanced access to certain equipment types, new invoicing practices, and updated coverage criteria....",
            'tags': '',
            'link': '/blogs/2025-medicare-policy-changes',
        },
        {
            "id": 2,
            'image': cgm,
            'title': 'The Advantages of Continuous Glucose Monitoring: What Medicare Will Cover in 2025',
            'content': "Continuous glucose monitors (CGMs) are now a crucial component of the toolset needed to properly manage diabetes. Medicare has increased its coverage for CGMs in response to the rising prevalence of diabetes in the US, giving patients more access. Patients may more easily purchase and utilize CGMs in 2025 because to these regulatory improvements, which also make it simpler for them....",
            'tags': '',
            'link': '/blogs/continuous-glucose-monitoring',
        },
        {
            "id": 3,
            'image': covid,
            'title': "Navigating COVID-19: Tips, Updates, and Resources for Your Health and Safety",
            'content': "Globally, the COVID-19 epidemic has changed day-to-day living. It has emphasized the value of teamwork, improvements in healthcare, and access to trustworthy information since it began in late 2019. This blog offers crucial information and practical advice to enable you to handle these extraordinary times with fortitude and well-informed care....",
            'tags': '',
            'link': '/blogs/covid-19',
        },
        {
            "id": 4,
            'image': medicalEquipment,
            'title': "Medicare's Top Durable Medical Devices for 2025",
            'content': "Healthcare is changing quickly, and in-home medical equipment (DME) is a key component of this change. The way people access and utilize medical equipment in their homes will be completely transformed by 2025 due to changes in Medicare laws, technological improvements, and a greater focus on patient-centered care....",
            'tags': '',
            'link': '/blogs/medical-devices-2025',
        },
    ]

    const [searchyQuerry, setSearchQuerry] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(Blogs)

    const handleSearch = (e: any) => {
        setSearchQuerry(e.target.value)

        const filtered = Blogs.filter(blog =>
            blog.title.toLowerCase().includes(e.target.value.toLowerCase())
        )

        setFilteredBlogs(filtered)
    }

    return (
        <main>
            <section className={styles.hero}>
                <Image src={hero} alt="" />
                <div className={styles.content}>
                    <h1>Discover Fresh Insights</h1>
                    <hr />
                    <p>Discover a multitude of information, perspectives, and advice on a range of subjects that are most important to you. In order to keep you informed and motivated, we provide the newest trends, professional guidance, and useful resources on our blog.</p>
                    <p>Explore in-depth articles written by experts, useful advice, and stimulating conversations. Our blog provides articles designed to keep you ahead of the curve, whether your goal is to remain current on industry news or discover answers to common problems. Come go on an educational and exploratory trip with us!</p>
                    <a href="#blogs">
                        <button>Discover</button>
                    </a>
                </div>
            </section>
            <div className={styles.blogs} id='blogs'>
                <form action="">
                    <input type="search" name="blogSearch" id="blogSearch" placeholder='Search For Blogs' onChange={handleSearch} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={styles.icon}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>
                <div className={styles.stage}>
                    {
                        filteredBlogs.map(blog => (
                            <div className={styles.item} key={blog.id}>
                                <Link href={blog.link}>
                                    <Image src={blog.image} alt={blog.title} />
                                    <h3>{blog.title}</h3>
                                    <p>{blog.content}</p>
                                    {blog.tags.split(',').map(tag => (
                                        tag ??
                                        <div className={styles.tags} key={blog.id}>
                                            <button>{tag}</button>
                                            <button>{tag}</button>
                                            <button>{tag}</button>
                                            <button>{tag}</button>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main >
    )
}