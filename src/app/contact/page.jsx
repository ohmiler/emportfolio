"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioPage() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen bg-gray-500" style={{ backgroundImage: "url('/img/em_pic_contact.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div data-aos="fade-up" className="container mx-auto mt-[100px] relative z-10 py-8">
                <div className='m-5'>
                    <h1 className="text-white text-6xl font-bold">Contact</h1>
                    <p className="text-white text-2xl mt-5 mb-3 drop-shadow-lg">
                        สนใจติดต่อจ้างงานสามารถคุยรายละเอียดได้ที่ <br />
                        Line : em175422 หรือ โทร 084-076-5558 <br /><br />
                        <span className='text-yellow-300'>*มีการเก็บมัดจำก่อนเริ่มงานนะครับ</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage