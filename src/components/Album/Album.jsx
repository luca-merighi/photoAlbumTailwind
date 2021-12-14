import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import SwiperCore, { Autoplay, Pagination, Navigation, Keyboard } from 'swiper'
import Main from '../Main/Main'

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const headerProps = {
    title: 'Album',
    icon: 'image'
}

SwiperCore.use([ Autoplay, Pagination, Navigation, Keyboard ])

export default function Album() {
    return (
        <Main {...headerProps}>
            <div className="bg-white h-full w-full px-3 py-4 shadow-xl flex flex-col gap-3 items-center justify-start 
                animation-appear md:gap-5 notebook:items-start notebook:px-5 notebook:py-6">
                <header className="flex items-center justify-center">
                    <p className="text-xl font-medium text-gray-800 w-3/4 md:w-full notebook:text-3xl ">
                        Álbum de fotos com Swiper <span className="bg-yellow-400 py-0.5 px-1 font-bold rounded">JS</span>
                    </p>
                </header>
                <div className="w-72 border-blue-500 border-4 shadow-xl md:w-96 lg:w-large">
                    <Swiper 
                        spaceBetween={100}
                        slidesPerView={1}
                        centeredSlides={true}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        navigation={true}
                        pagination={{ "clickable": true }}
                        keyboard={{ "enabled": true }}
                        loop={true}
                        className="bg-gray-800 "
                        >
                        <SwiperSlide>
                            <img src="https://picsum.photos/1000/550" 
                                alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://picsum.photos/1000/551" 
                                alt="" />
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </Main>
    )
}