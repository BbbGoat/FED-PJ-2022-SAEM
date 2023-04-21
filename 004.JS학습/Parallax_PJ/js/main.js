// 패럴렉스 PJ JS - main.js

// 로드 이벤트
window.addEventListener("DOMContentLoaded", loadFn);

// 로드함수
function loadFn() {
    console.log("로딩완료!");

    /**********************************************************/

    // 1. 부드러운 스크롤 적용하기
    startSS();

    // 만약 스크롤바를 직접 드래그할 경우
    // mouseup (즉, 스크롤바를 놓는경우)
    // 이벤트 발생시 y축 스크롤바 위치를
    // pos전역변수에 업데이트 한다!
    window.addEventListener("mouseup", () => {
        pos = window.scrollY;
        // console.log(pos);
    }); /////////// scroll ////////////
    // 키보드로 이동시
    window.addEventListener("keyup", () => {
        pos = window.scrollY;
        // console.log(pos);
    }); /////////// scroll ////////////

    /**********************************************************/

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

    // 7. 패럴렉스 이동함수 //
    const moveEl = (elpos,ele,setH) => {

        // 전달값: elpos - 요소위치값 / ele - 요소 / setH - 지정한범위

        
        // 패럴렉스 범위 : 윈도우높이값 ~ 0까지!
        // 화면에서 완전히 사라질때 범위는 0이 아니고
        // 요소의 -(마이너스)높이값만큼 이다! -> 적당히 -수치로 여유공간 주기!
        if (elpos < winH && elpos > 0-200) {

            // 1. 위치이동값 계산
            let x = setH - (elpos * setH) / winH;
            console.log("x:",-x);

            // 2. 해당요소에 위치이동 CSS 반영
            ele.style.cssText = `
                transform:translateY(${-x}px);
            `;
            // cssText 속성은 style 속성값을 직접 넣어준다!(css문법 그대로 사용)
            
            // 대상요소의 트랜스폼 Y축 이동
            // 위치이동 계산원리
            // -> 윈도우화면 : 위치값 = 지정한범위 : 실제이동값
            // -> 윈도우가 1000px : 약 500px쯤의 위치 = 상자범위 200px : x?
            // 실제이동값 = 위치값 * 지정한범위 / 윈도우화면
            // -> x = elpos * setH2 / winH
            // 이동수치는 0부터 서서히 증가해야 하므로 지정한범위수에서 빼준다!
            // -> x = setH2 - (elpos * setH2) / winH

        } ///// if : 패럴렉스 범위 ///////

    }; //////////// moveEl ///////////////


    // 8. 스크롤 이벤트함수 만들기
    window.addEventListener("scroll", () => {

        
        // 대상1 : 글자박스 패럴렉스호출!
        tg1.forEach((ele)=>{
            moveEl(retVal(ele),ele,setH2)
            // moveEl(위치값,요소,지정한범위)
        });
        // 대상2 : 아이콘 패럴렉스호출!
        tg2.forEach((ele)=>{
            moveEl(retVal(ele),ele,setH1)
            // moveEl(위치값,요소,지정한범위)
        });
        
    }); //////////// scroll 이벤트 ////////////////

    // 로딩시 맨위로 이동하기
    setTimeout(() => {
        // 맨위로 이동
        window.scrollTo(0,0);
        // 부드러운 스크롤 위치값 반영!
        pos = 0; // 안하면 새로고침시 튄다!
    },400);
    
} ////////////////////// loadFn 함수 ///////////////////
