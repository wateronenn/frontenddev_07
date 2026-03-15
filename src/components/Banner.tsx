'use client'
import styles from './banner.module.css'
import Image from "next/image";
import { useState } from 'react';

export default function Banner (){
    const bannerArray = ['/img/eventBanner.jpg','/img/eventBanner2.jpg','/img/eventBanner3.jpg']
    const [index,setIndex] = useState(0)
    return (
        <div className={styles.banner} onClick={()=> {setIndex(index+1)}}>
            <Image src = {bannerArray[index%3]}
            alt = 'cover'
            fill={true}
            priority
            style={{ objectFit: "contain" ,zIndex: 1 }}
            />
            <div className={styles.bannerText}>
                <h1 className="text-7xl font-bold">where every event finds its venue</h1>
                <h3 className='text-3xl'>Find venues to celebrate your special moments</h3>
            </div>
        </div>

    );
}