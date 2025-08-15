import Link from "next/link";

export default function WhatsappButton(){
    return(
        <Link href="https://wa.me/14044422019" target="__blank" className="absolute bottom-5 left-5">
            <button className="flex p-2 bg-green-700 flex items-center justify-center">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet" className="w=5 h-5">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    </g>
                </svg>
            </button>
        </Link>
    )
}