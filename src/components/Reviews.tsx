import Image from "next/image"

import quotes from "@/assets/images/quotes.png"
import styles from "@/assets/css/components/Reviews.module.css"

interface Review {
    id: number,
    name: string,
    position: string,
    description: string,
}

export default function Reviews() {
    const Reviews: Review[] = [
        {
            'id': 1,
            'name': 'Demo',
            'position': 'Head',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam veritatis enim cum eaque consequatur error sunt deleniti sequi voluptas laboriosam excepturi placeat voluptatum, eos vitae quam velit reiciendis aut facere magni?',
        },
        {
            'id': 2,
            'name': 'Demo',
            'position': 'Head',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam veritatis enim cum eaque consequatur error sunt deleniti sequi voluptas laboriosam excepturi placeat voluptatum, eos vitae quam velit reiciendis aut facere magni?',
        }
        ,
        {
            'id': 3,
            'name': 'Demo',
            'position': 'Head',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam veritatis enim cum eaque consequatur error sunt deleniti sequi voluptas laboriosam excepturi placeat voluptatum, eos vitae quam velit reiciendis aut facere magni?',
        }
        ,
        {
            'id': 4,
            'name': 'Demo',
            'position': 'Head',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam veritatis enim cum eaque consequatur error sunt deleniti sequi voluptas laboriosam excepturi placeat voluptatum, eos vitae quam velit reiciendis aut facere magni?',
        }
        ,
        {
            'id': 5,
            'name': 'Demo',
            'position': 'Head',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam veritatis enim cum eaque consequatur error sunt deleniti sequi voluptas laboriosam excepturi placeat voluptatum, eos vitae quam velit reiciendis aut facere magni?',
        }
    ]

    return (
        <section className={styles.reviews}>
            <h2>Latest Reviews</h2>
            <div className={styles.stage}>
                {Reviews.map(e => (
                    <div className={styles.item} key={e.id}>
                        <Image src={quotes} alt="quote-icon" className={styles.icon} />
                        <span className={styles.avatar}>{e.name.charAt(0)}</span>
                        <h3>{e.name}</h3>
                        <p>{e.description}</p>
                        <hr />
                        <span>{e.position}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}