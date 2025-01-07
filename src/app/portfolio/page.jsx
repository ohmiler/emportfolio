"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioPage() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="relative overflow-hidden bg-cover bg-center h-full bg-gray-500">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div data-aos="fade-up" className="container mx-auto mt-[100px] relative z-10 py-8">
                <div className='m-5'>
                    <h1 className="text-white text-6xl font-bold">Portfolio</h1>
                    <p className="text-white text-2xl mt-5 mb-3">
                        ผลงาน Creative Content  และการถ่ายทำ และตัดต่อ
                    </p>
                </div>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="420" src="https://www.youtube.com/embed/80C69aW72wU?si=V7GYPGR-0mYfCKLN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="420" src="https://www.youtube.com/embed/-lAs4ejtsOc?si=z3f_RhNYJCXH5xRc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/VckJG3sdkUk?si=_pDIq-iKEzaqOxsB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/JfAYH8AimvA?si=HjUux2fR7xGvq0Of" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/U4MxjSqkbk0?si=FL1R3zuC4qrFRXj9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/z6QACaGqZzE?si=ST2n2Jy6QyBF4eob" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/a6rY8jJWF-s?si=0Y50bU7vaW1DDLRc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/KdCccTT_d-o?si=SkIG2V1Ued9WHoY5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/Unk4FLwZJHc?si=gal48HqOV_d2p5mi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/vnqS6O4rzXA?si=tfTQ1_KsnItR9YZR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/avs0ZxV6L-w?si=i0MlPkeEuhoKkToB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/7X6VxWUxo-w?si=21mXLEZI7OOCRtV2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/omGsOnzpuqQ?si=EmcYucapu-Qd9vI2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="rounded-lg shadow-lg">
                        <iframe width="100%" height="280" src="https://www.youtube.com/embed/NDVJLXSYgmw?si=YyuVhJ813PMVnOov" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <div className="rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/2">
                        <iframe width="100%" height="420" src="https://www.youtube.com/embed/ks1IoP0kdYA?si=4_9yVk3GaD3IUsC1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
                    <div>
                        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@topboutique_th/video/7409983683974712583" data-video-id="7409983683974712583" style={{ maxWidth: '605px', minWidth: '325px' }} > <section> <a target="_blank" title="@topboutique_th" href="https://www.tiktok.com/@topboutique_th?refer=embed">@topboutique_th</a> รังนกเนื้อแน่นๆ!! โปรโมชั่น!! ซื้อ 3 แถม 1 🥳 รังนกพรีเมี่ยม ในราคาสุดคุ้ม สินค้ารังนกจากประเทศไทย 🥳 ของแท้และพรีเมี่ยมสุดๆ หากสนในสามารถสั่งซื้อได้ที่ LAZADA , Shopee หรือ Line : @ninest_thailand   หรือสอบถามเพิ่มเติม Inbox ได้เลยค่ะ.😘 เบอร์ 083 -782 -8595 https:&#47;&#47;www.lazada.co.th&#47;shop&#47;ninest-thailand https:&#47;&#47;shopee.co.th&#47;toplaytex2 <a title="รังนกแท้" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81%E0%B9%81%E0%B8%97%E0%B9%89?refer=embed">#รังนกแท้</a> <a title="เครื่องดื่มเพื่อสุขภาพ" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E?refer=embed">#เครื่องดื่มเพื่อสุขภาพ</a> <a title="เครื่องดื่ม" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1?refer=embed">#เครื่องดื่ม</a> <a title="เทรนวันนี้" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89?refer=embed">#เทรนวันนี้</a> <a title="ของดีบอกต่อ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B5%E0%B8%9A%E0%B8%AD%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%AD?refer=embed">#ของดีบอกต่อ</a> <a title="รังนก" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81?refer=embed">#รังนก</a> <a title="ของขวัญวันเกิด" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%A7%E0%B8%B1%E0%B8%8D%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94?refer=embed">#ของขวัญวันเกิด</a> <a title="ของฝาก" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9D%E0%B8%B2%E0%B8%81?refer=embed">#ของฝาก</a> <a target="_blank" title="♬ อยู่เฉยๆ ก็น่ารัก - น้ำ นาราภัทร" href="https://www.tiktok.com/music/อยู่เฉยๆ-ก็น่ารัก-6969918888521304066?refer=embed">♬ อยู่เฉยๆ ก็น่ารัก - น้ำ นาราภัทร</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                    <div>
                        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@topboutique_th/video/7408776193266191623" data-video-id="7408776193266191623" style={{ maxWidth: '605px', minWidth: '325px' }} > <section> <a target="_blank" title="@topboutique_th" href="https://www.tiktok.com/@topboutique_th?refer=embed">@topboutique_th</a> นอกจากดูแลตัวเองที่ภายนอกแล้ว...อย่าลืมดูแลตัวเองที่ภายในด้วยนะคะ โปรแรง Flash Sale ช้าหมด อดน้าาา ลดมากสูงถึง 10 % โปรเริ่มวันที่ 31 สิงหาคม 2567 เวลา 12.00 - 17.59 น. เท่านั้น!!🥳🥳🥰 รังนกพรีเมี่ยม ในราคาสุดคุ้ม สินค้ารังนกจากประเทศไทย 🥳 ของแท้และพรีเมี่ยมสุดๆ หากสนในสามารถสั่งซื้อได้ที่ LAZADA , Shopee หรือ Line : @ninest_thailand   หรือสอบถามเพิ่มเติม Inbox ได้เลยค่ะ.😘 เบอร์ 083 -782 -8595 <a title="รังนกแท้" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81%E0%B9%81%E0%B8%97%E0%B9%89?refer=embed">#รังนกแท้</a><a title="รังนก" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81?refer=embed">#รังนก</a> <a title="tiktokshopช้อปกันวันเงินออก" target="_blank" href="https://www.tiktok.com/tag/tiktokshop%E0%B8%8A%E0%B9%89%E0%B8%AD%E0%B8%9B%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%81?refer=embed">#tiktokshopช้อปกันวันเงินออก</a> <a title="เครื่องดื่มเพื่อสุขภาพ" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E?refer=embed">#เครื่องดื่มเพื่อสุขภาพ</a> <a title="เครื่องดื่มสุขภาพ" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E?refer=embed">#เครื่องดื่มสุขภาพ</a> <a title="เทรนวันนี้มาแรง" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B8%A1%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%87?refer=embed">#เทรนวันนี้มาแรง</a> <a target="_blank" title="♬ บุษบา - เมนทอล" href="https://www.tiktok.com/music/บุษบา-7395925483776903184?refer=embed">♬ บุษบา - เมนทอล</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                    <div>
                        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@topboutique_th/video/7420715663704050951" data-video-id="7420715663704050951" style={{ maxWidth: '605px', minWidth: '325px' }} > <section> <a target="_blank" title="@topboutique_th" href="https://www.tiktok.com/@topboutique_th?refer=embed">@topboutique_th</a> รังนก Ninest ยกลัง!!😆🥰😆 เปย์ตัวเองแบบสุขภาพดี 💸 ซื้อรังนก Ninest ลดจุกๆ สุขภาพปังๆ ก่อนใคร! <a title="รังนก" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81?refer=embed">#รังนก</a> <a title="รังนกแท้" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81%E0%B9%81%E0%B8%97%E0%B9%89?refer=embed">#รังนกแท้</a> <a title="เครื่องดื่มเพื่อสุขภาพ" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E?refer=embed">#เครื่องดื่มเพื่อสุขภาพ</a> <a title="เทรนด์วันนี้" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89?refer=embed">#เทรนด์วันนี้</a> <a title="ninest_thailand" target="_blank" href="https://www.tiktok.com/tag/ninest_thailand?refer=embed">#ninest_thailand</a>  สามราถสั่งซื้อได้ที่ @bird_ninest <a target="_blank" title="♬ 原声 - Ninest Thailand - Top Boutique International" href="https://www.tiktok.com/music/原声-Ninest-Thailand-7420715724664064769?refer=embed">♬ 原声 - Ninest Thailand - Top Boutique International</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                    <div>
                        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@topboutique_th/video/7417762806600174866" data-video-id="7417762806600174866" style={{ maxWidth: '605px', minWidth: '325px' }} > <section> <a target="_blank" title="@topboutique_th" href="https://www.tiktok.com/@topboutique_th?refer=embed">@topboutique_th</a> Xylitol คืออะไรและมีประโยชน์อย่างไร. สดชื่นยิ่งกว่าเดิม! 🌴✨ กับรังนกแท้ Ninest สูตรมะพร้าวน้ำหอม หอมหวานลงตัว จิบแล้วฟินเหมือนอยู่บนชายหาด 🌊🌴 ใครยังไม่ลอง ถือว่าพลาดนะ! <a title="รังนกninest" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81ninest?refer=embed">#รังนกninest</a> <a title="รังนกแท้" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%81%E0%B9%81%E0%B8%97%E0%B9%89?refer=embed">#รังนกแท้</a> <a title="เครื่องดื่มเพื่อสุขภาพ" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E?refer=embed">#เครื่องดื่มเพื่อสุขภาพ</a> <a title="เทรนด์วันนี้" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B5%E0%B9%89?refer=embed">#เทรนด์วันนี้</a> <a target="_blank" title="♬ original sound - alfiemoff2𖣂" href="https://www.tiktok.com/music/original-sound-7266190379857365793?refer=embed">♬ original sound - alfiemoff2𖣂</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                    </div>
                </div>
                <p className="text-white text-2xl mt-5 mb-3">
                    ผลงานภาพถ่าย
                </p>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/01-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/02-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/03-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/04-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/05-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/06-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/07-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/08-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/09-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/10-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/11-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/12-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/13-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/14-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/16-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/17-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/18-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/19-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/20-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/21-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/22-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/23-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/24-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/25-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/26-photo.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/27-photo.jpg" alt="" />
                    </div>
                </div>

                <p className="text-white text-2xl mt-5 mb-3">
                    ผลงานกราฟิก
                </p>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/01-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/02-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/03-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/04-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/05-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/06-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/07-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/08-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/09-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/10-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/11-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/12-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/13-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/14-ghp.jpg" alt="" />
                    </div>
                    <div className="shadow-lg">
                        <img className='rounded-lg' src="/img/15-ghp.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage