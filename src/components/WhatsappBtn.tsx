import Link from "next/link";
import styles from "@/assets/css/components/WhatsappButton.module.css";
import whatsapp from "@/assets/images/whatsapp.png";
import Image from "next/image";

export default function WhatsappButton(){
    return(
        <Link href="https://wa.me/14706670121" target="__blank">
            <button className={styles.whatsappBtn}>
                <Image src={whatsapp} alt="Whatsapp Image" className={styles.whatsappIcon} />
            </button>
        </Link>
    )
}