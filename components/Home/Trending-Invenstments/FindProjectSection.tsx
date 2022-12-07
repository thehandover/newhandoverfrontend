import Image from "next/image";
import Link from "next/link";
import styles from "./FindProjectSection.module.css"
import UmmAlQuwain from "/public/assets/img/toparea/umm-al-quwain.jpg";
import Fujairah from "/public/assets/img/toparea/fujairah.jpg";
import Dubai from "/public/assets/img/toparea/dubai.jpg";
import AbuDhabi from "/public/assets/img/toparea/abu-dhabi.jpg";
import Ajman from "/public/assets/img/toparea/ajman.jpg";
import Sharjah from "/public/assets/img/toparea/sharjah.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { LinkButton } from "../../Shares/Buttons";

const LocationSection = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
          return '<span class="' + className + '">' + "</span>";
        },
    };

    return (
        <>
        {/* Start Neighbourhood Section  */}
        <div className="py-20" style={{backgroundColor: '#f7f7f7'}}>
            <div className="width mx-auto">
                <div className="title-box">
                    <h3 className="sub-title">TOP Trending Invenstment MARKETS</h3>
                    <h2 className="theme-color text-lg sm:text-3xl md:text-4xl font-semibold">Find Your Project</h2>
                </div>
            </div>
            <div className="width mx-auto pt-10 pb-5">
                {/* Swiper */}
                <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={pagination}
                breakpoints= {{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper">
                    <SwiperSlide>
                        <div className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <Image src={UmmAlQuwain.src} layout="fill" placeholder="blur" blurDataURL={UmmAlQuwain.blurDataURL} className="object-cover bg-gray-900 bg-opacity-50" alt={'Umm al-Quwain'} />
                                <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Umm al-Quwain</div></div>
                                <div className="arrow">
                                    {/* <Image src={UmmAlQuwain.src} width={UmmAlQuwain.width} height={UmmAlQuwain.height} alt={'Umm al-Quwain'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className={styles.slideBox}>
                                <div className={styles.slideContent}>
                                    <Image src={Fujairah.src} layout="fill" placeholder="blur" blurDataURL={Fujairah.blurDataURL} className="object-cover" alt={'Fujairah'} />
                                    <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Fujairah</div></div>
                                    <div className="arrow">
                                        {/* <Image src={Fujairah.src} width={Fujairah.width} height={Fujairah.height} alt={'Fujairah'} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: `url(${Dubai.src})` }} className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <Image src={Dubai.src} layout="fill" placeholder="blur" blurDataURL={Dubai.blurDataURL} className="object-cover" alt={'Dubai'} />
                                <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Dubai</div></div>
                                <div className="arrow">
                                    {/* <Image src={Dubai.src} width={Dubai.width} height={Dubai.height} alt={'Dubai'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div style={{ background: `url(${AbuDhabi.src})` }} className={styles.slideBox}>
                                <div className={styles.slideContent}>
                                    <Image src={AbuDhabi.src} layout="fill" placeholder="blur" blurDataURL={AbuDhabi.blurDataURL} className="object-cover" alt={'Abu Dhabi'} />
                                    <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Abu Dhabi</div></div>
                                    <div className="arrow">
                                        {/* <Image src={AbuDhabi.src} width={AbuDhabi.width} height={AbuDhabi.height} alt={'Abu Dhabi'} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: `url(${Ajman.src})` }} className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <Image src={Ajman.src} layout="fill" placeholder="blur" blurDataURL={Ajman.blurDataURL} className="object-cover" alt={'Ajman'} />
                                <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Ajman</div></div>
                                <div className="arrow">
                                    {/* <Image src={Ajman.src} width={Ajman.width} height={Ajman.height} alt={'Ajman'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: `url(${Sharjah.src})` }} className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <Image src={Sharjah.src}layout="fill" placeholder="blur" blurDataURL={Sharjah.blurDataURL} className="object-cover" alt={'Sharjah'} />
                                <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Sharjah</div></div>
                                <div className="arrow">
                                    {/* <Image src={Sharjah.src} width={Sharjah.width} height={Sharjah.height} alt={'Sharjah'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="width mx-auto text-center">
                <LinkButton href={"/opportunities"}>Explore More</LinkButton>
            </div>
        </div>
        {/* End Neighbourhood Section Here  */}
        </>
    );
};

export default LocationSection;