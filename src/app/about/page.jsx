"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {

    useEffect(() => {
            AOS.init();
    }, [])

    return (
        <div className="relative overflow-hidden bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/img/em_about_pic.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div data-aos="fade-up" className="container mx-auto mt-[150px] relative z-10 py-8">
                <div className="m-5">
                    <h1 className="text-white text-6xl font-bold drop-shadow-lg">About</h1>
                    <p className="text-white text-2xl mt-5 drop-shadow-lg">
                        ผู้เชี่ยวชาญด้านการตัดต่อวิดีโอและออกแบบกราฟิก ที่หลงใหลในความคิดสร้างสรรค์และการเล่าเรื่องด้วยภาพ
                    </p>

                    <ul class="text-white text-2xl m-5 drop-shadow-lg list-disc">
                        <li>Video Editing: เชี่ยวชาญการเล่าเรื่องผ่านวิดีโอด้วยการตัดต่อที่ดึงดูดและมืออาชีพ พร้อมทั้งการใช้เทคนิคและเอฟเฟกต์เพื่อสร้างผลงานที่มีคุณภาพสูง</li>
                        <li>Graphic Design: ออกแบบสื่อกราฟิกที่สะท้อนความเป็นเอกลักษณ์ของแบรนด์ และช่วยสื่อสารความคิดที่ชัดเจนให้กับผู้ชม</li>
                    </ul>
                    
                    <p className="text-white text-2xl mt-5 drop-shadow-lg">
                        ผลงานของผมครอบคลุมตั้งแต่การทำวิดีโอโปรโมต การสร้างแบรนด์ การออกแบบสื่อโฆษณา ไปจนถึงการตัดต่อ
                        วิดีโอสำหรับโซเชียลมีเดียและแพลตฟอร์มดิจิทัลต่าง ๆ
                    </p>

                    <p className="text-white text-2xl mt-5 drop-shadow-lg">
                        ด้วยประสบการณ์ที่สั่งสมมาหลายปี ผมมุ่งมั่นที่จะสร้างผลงานที่ไม่เพียงตอบโจทย์ แต่ยังเกินความคาดหวังของลูกค้า หากคุณกำลังมองหานักสร้างสรรค์ที่พร้อมเปลี่ยนไอเดียของคุณให้เป็นจริง ยินดีอย่างยิ่งที่จะได้ร่วมงานกัน
                    </p>

                    <p className="text-white text-2xl mt-5 drop-shadow-lg">
                        ติดต่อได้ที่:
                        <br />
                        อีเมล: dropem0001@gmail.com
                        <br />
                        Line : em175422
                        <br />
                        โทรศัพท์: 084-076-5558
                        <br />
                        🔗 <a href="https://www.facebook.com/em.kiattinan" target='_blank' className="hover:text-blue-500">Facebook</a>
                    </p>

                    <p className="text-white text-2xl mt-5 drop-shadow-lg">
                        <span class="text-black bg-yellow-300">"เพราะการเล่าเรื่องที่ดี คือพลังสำคัญในการสร้างแรงบันดาลใจให้ผู้คน"</span>
                    </p>

                        

                </div>
            </div>
        </div>
    );
}

export default AboutPage