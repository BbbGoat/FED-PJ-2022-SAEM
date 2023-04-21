// 패럴렉스 PJ JS - main.js

// 로드 이벤트
window.addEventListener("DOMContentLoaded", loadFn);

// 로드함수
function loadFn() {
    console.log("로딩완료!");

    // 1. 부드러운 스크롤 적용하기
    startSS();

    // 2. 공통선택자함수
    const qs = (x) => document.querySelector(x);
    const qsa = (x) => document.querySelectorAll(x);
    
    // 3. 등장위치리턴함수
    const retVal = (x) => {
        return x.getBoundingClientRect().top;
        // getBoundingClientRect().top -> top을 기준으로한 대상 위치값
        // -> 화면 위로 올라가면 마이너스값        
    };
    
    // 4. 보이는 화면 높이값 : 등장요소의 시작값이 이것임!
    const winH = window.innerHeight;
    console.log("winH",winH);

    // 5. 패럴렉스 수치범위 : 움직일값 설정
    const setH1 = 100;
    const setH2 = 200;

    // 6. 패럴렉스 대상선정
    // (1). 글자박스
    const tg1 = qsa(".txt");
    // (2). 아이콘
    const tg2 = qsa(".icon");

    // 7. 스크롤 이벤트함수 만들기
    window.addEventListener("scroll", ()=>{

        // 테스트 - 3번째 텍스트 위치값
        console.log(retVal(tg1[0]))    
        
    }); //////////// scroll 이벤트 ////////////////
    
} ////////////////////// loadFn 함수 ///////////////////
