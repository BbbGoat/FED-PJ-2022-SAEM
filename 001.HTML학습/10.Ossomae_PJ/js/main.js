// 옷소매 갤러리 JS - main.js

///////////////// 로딩구역 ///////////////////////
window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료!");
    const gbx = document.querySelector(".gbx");

    /********************************** 
        함수명: goSlide
        기능: 이동방향에 따른 요소 이동하기
    **********************************/
    const goSlide = (dir) => { // dir - 버튼구분(1-오른쪽, 0-왼쪽)
        // 1. 호출확인
        console.log("나야ddddd나!",dir);
        
        
    }; ////////// goSlide 함수 ////////////
    
    // 오른쪽버튼
    document.querySelector(".rb").onclick = () => {

        goSlide(1);

        console.log("오른쪽!");

        // 이동대상 : .gbx > div
        let tg = gbx.querySelectorAll("div");

        // 첫번째 자식요소 div 맨뒤로이동
        // appendChild(첫번째요소)
        gbx.appendChild(tg[0]);

    }; ///////// click ///////////////////

    // 왼쪽버튼
    document.querySelector(".lb").onclick = () => {
        console.log("왼쪽!");

        goSlide(0);

        // 이동대상 : .gbx > div
        let tg = gbx.querySelectorAll("div");

        // 마지막 자식요소 div 맨앞이동
        // insertBefore(마지막요소,첫번째요소)
        gbx.insertBefore(tg[tg.length-1],tg[0]);

    }; ///////// click ///////////////////
    
}); ///////////// 로딩구역 //////////////////////
/////////////////////////////////////////////////