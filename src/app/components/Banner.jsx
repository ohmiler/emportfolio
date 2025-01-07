"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="relative overflow-hidden bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/img/em_pic.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div data-aos="fade-up" className="container mx-auto mt-[450px] relative z-10 py-8">
                <div className="m-5">
                    <h1 className="text-white text-6xl font-bold">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'เอ็ม เกียรตินันต์',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Video Editor',
                                1000,
                                'Graphic Designer',
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-white text-2xl mt-5 w-full max-w-[850px] drop-shadow-lg">
                        สวัสดีครับ ผมชื่อเอ็ม หรือ นายเกียรตินันต์ รับจ้างตัดต่อถ่ายรูป กราฟฟิค รวมไปถึงการคิดคอนเทนต์และ Script สามารถรับชมผลงานได้เลยครับ
                        หากสนใจสามารถคุยรายละเอียดได้ที่ 
                        Line : em175422 หรือ โทร 084-076-5558 มีการเก็บมัดจำก่อนเริ่มงานนะครับ
                    </p>
                    <a href="https://www.facebook.com/em.kiattinan" target="_blank" className="mt-8 px-6 py-3 bg-white border-2 text-black text-lg font-semibold rounded hover:bg-transparent hover:text-white hover:border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 inline-block">
                        ติดต่อเรา
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;