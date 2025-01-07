"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {

    useEffect(() => {
            AOS.init();
    }, [])

    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/em_about_pic.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div data-aos="fade-up" className="container mx-auto mt-[100px] relative z-10 py-8">
                <h1 className="text-white text-6xl font-bold drop-shadow-lg">About</h1>
                <p className="text-white text-2xl mt-5 w-[850px] drop-shadow-lg">
                    myemail@gmail.com
                </p>
                <p className="text-white text-2xl mt-5 w-[850px] drop-shadow-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis quisquam animi doloribus dignissimos dolores facilis necessitatibus magni, accusamus illo quidem, ipsam vitae quibusdam, officiis alias enim beatae quos voluptate?
                </p>
                
            </div>
        </div>
    );
}

export default AboutPage