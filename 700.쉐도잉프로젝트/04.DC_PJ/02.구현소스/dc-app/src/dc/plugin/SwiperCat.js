import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
/* 제이쿼리넣기 */
import $ from 'jquery';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import "./swipercat.css";

// import required modules
import { Navigation } from "swiper";
// 데이터 가져오기
import cat_data from "../data/cat";

export default function SwiperCat(props) {
    // 데이터 셋팅
    const sdt = cat_data;

    // 비디오보이기 함수
    const showVid = (src,tit) => { 
        // src-비디오경로, tit-비디오제목
        console.log(src,tit);

        let ifr = $(".playvid iframe");
        // 1. 아이프레임 src넣기
        ifr.attr("src",src+"?autoplay=1");
        // 2. 비디오 타이틀 넣기
        $(".ifrtit").text(tit); 

        let vbx = $(".vidbx");
        // 3. 비디오 전체박스 보이기
        vbx.fadeIn(300);
        // 4. 닫기버튼 셋팅
        $(".cbtn").click(()=>{
            vbx.fadeOut(300);
            ifr.attr("src","");
        });
    }; //////////// showVid ///////////////////

    
    return (
        <>
            <Swiper
                // 한화면당 개수를 Hook변수사용!
                // slidesPerView={2}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    200: {
                        slidesPerView: 4,
                    },
                    700: {
                        slidesPerView: 5,
                    },
                    1000: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                }}
                className="mySwiper">
                {sdt.map((v, i) => (
                    <SwiperSlide key={i}>
                        <section className="swinbx" 
                        onClick={()=>showVid(v.vsrc,v.tit)}>
                            {/* 동영상이미지영역 */}
                            <div className="vidimg">
                                <img src={v.isrc} alt={v.tit}></img>
                                <FontAwesomeIcon icon={faPlayCircle} 
                                style={{
                                    position:"absolute",
                                    bottom:"55%",
                                    left:"10%",
                                    color:"#fff",
                                    fontSize:"50px"
                                    }} />
                            </div>
                            {/* 동영상타이틀영역 */}
                            <div className="vidtit">
                                <h4>{v.cat}</h4>
                                <h3>{v.tit}</h3>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}