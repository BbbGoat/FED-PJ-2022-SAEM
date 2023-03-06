// JS로 구현한 자동페이지 휠 JS : js-autoScroll.js

// 새로고침할때 스크롤위치 캐싱 무시하고 맨위로 이동!
// scrollTo(가로,세로) -> 위치이동 메서드
setTimeout(() => {
    window.scrollTo(0,0);
}, 100);

// 로딩함수 호출 ///////////
window.addEventListener("DOMContentLoaded",loadFn);

function loadFn() {

    console.log("로딩완료!");

    /***************************************************
    
        [ 휠 이벤트를 이용한 페이지 이동 컨트롤하기! ]
        -> 휠 이벤트명 : wheel
        (예전엔 mousewheel 이벤트가 사용됨 - 공식적으로 폐기됨!)

        1. 사용법 : 이벤트속성에 함수를 할당
            (1) 이벤트속성에 함수를 할당
                요소.onwheel = 함수
            (2) 브라우저 이벤트에 등록함
                요소.addEventListener("wheel", 함수, {옵션})
        
        2. 포인트 :
            (1) 기존 휠이동 기능은 정지한다!
            -> event.preventDefault()
            (2) 휠 방향을 알아내어 기능과 매칭한다!
            -> event.wheelDelta (휠방향속성)
            (3) 페이지번호를 전역적으로 사용한다!
            -> let pgNum = 0

        3. 휠 이벤트 대상 :
            (1) 전체 스크롤바인 경우 : window
            (2) 개별박스인 경우 : 선택요소

        4. scroll 이벤트와 wheel 이벤트 비교
            (1) 공통점 : 스크롤되는 페이지의 위치이동
            (2) 차이점 :
                - 마우스 휠의 동작에만 반응하는 이벤트는 wheel
                - 스크롤바의 이동에 반응하는 이벤트는 scroll
        
    ***************************************************/

    // 1. 전체 휠 이벤트 설정하기
    window.addEventListener("wheel", wheelFn);

    // 2. 휠 이벤트 함수 만들기 //////////
    function wheelFn() {

        // 1. 호출확인
        console.log("휠~~~");


        
    } //////////////// wheelFn 함수 ////////////////

    
} ////////////////// loadFn 함수 ///////////////////