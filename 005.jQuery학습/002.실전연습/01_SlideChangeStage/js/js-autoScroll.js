// JS로 구현한 자동페이지 휠 JS : js-autoScroll.js

// 새로고침할때 스크롤위치 캐싱 무시하고 맨위로 이동!
// scrollTo(가로,세로) -> 위치이동 메서드
setTimeout(() => {
    window.scrollTo(0,0);
}, 100);

// 로딩함수 호출 ///////////
window.addEventListener("DOMContentLoaded",loadFn);


/******************************************** 
    함수명: loadFn
    기능: 페이지 로딩시 함수 기능 수행
********************************************/
function loadFn() {
    
    console.log("로딩완료!");
    
    // 이벤트 연결 대상선정하기 ////
    // GNB메뉴
    const gnb = document.querySelectorAll(".gnb a");
    console.log(gnb);

    // 이벤트 연결 함수등록하기 ////
    // GNB메뉴 이벤트연결
    gnb.forEach((ele,idx) => { // ele - 요소, idx - 순번
        ele.addEventListener("click",() => movePg(idx));
    }); ////////// forEach ////////////////

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

        ____________________________________________________

        [ addEventListener 메서드의 옵션에 관하여 ]

        기존 addEventListener의 3번째 파라미터로 캡쳐링/버블링 여부를 
        제어할 수 있는 부분이 EventListenerOptions이라는 객체형태의 
        추가 옵션을 받을수 있음

        EventListenerOptions 사용 전
        document.addEventListener('touchstart', handler, false);

        EventListenerOptions 사용 후
        document.addEventListener("touchstart", handler, {
            capture: false,
            once: false,
            passive: false
        });

        ※ 현재 크롬에서 지원하는 EventListenerOptions 옵션은 다음과 같다.

        (1) capture: 이벤트 캡쳐링 적용 여부. 크롬 49부터 지원
        (2) once: 이벤트를 한번만 호출하고 해제되는 옵션. 크롬 55부터 지원
        (3) passive: 스크롤 성능 향상을 위한 옵션으로 true일 경우, 
                스크롤을 위해 블록되는 것을 방지함. 이 경우, 
                preventDefault를 사용할 수 없음. 크롬 51부터 지원
                이 중, passive 속성은 성능향상을 위해, 
                브라우저의 기능을 프로그래밍으로 제어할수 있음
                -> 최근 업데이트된 브라우저는 passive기본값이
                true로 셋팅되므로 window, document, body 이 세가지
                객체에 대해 스크롤 막기 기능을 비활성화 하였다!!!
                따라서 기본기능을 막고자 하면 passive:false로
                기능을 활성화 해야한다!!!
        
    ***************************************************/

    // 0. 변수 설정하기
    // (1) 전체 페이지 변수
    let pgnum = 0; // 현재 페이지번호(첫페이지 0)
    // (2) 전체 페이지 수
    const pgcnt = document.querySelectorAll(".page").length;
    console.log("전체페이지수", pgcnt);
    // (3) 광스크롤 금지변수 (0이면 허용, 1이면 불허용)
    let prot_sc = 0;
                
    // 1. 전체 휠 이벤트 설정하기
    window.addEventListener("wheel", wheelFn, {passive:false});

    // 2. 휠 이벤트 함수 만들기 //////////
    function wheelFn(e) {

        // (0) 기본기능 멈추기
        // addEventListener 옵션 {passive:false}필수!
        e.preventDefault();

        // 광스크롤막기! /////////
        console.log(prot_sc)
        if (prot_sc === 1) return; // 1일경우 걸러준다!
        prot_sc = 1; // 들어오면 0에서 1로 재할당!
        setTimeout(() => {
            console.log("settimeout")
            prot_sc = 0;
        }, 800); // 0.8초의 시간후 다시 허용상태전환
        
        // (1) 호출확인
        // console.log("휠~~~");

        // (2) 휠 방향 알아내기
        // 이벤트객체.wheelDelta
        let dir = e.wheelDelta;
        // console.log("방향:", dir);
        // 휠내리면 마이너스(올리면 플러스)

        // (3) 방향에 따른 페이지번호 증감
        // 스크롤 아랫방향 : 페이지번호 증가
        if (dir < 0) {
            // 페이지번호 1씩증가
            pgnum++;
            // 한계수 : 페이지 끝번호 (페이지수 - 1)
            if (pgnum > pgcnt - 1) pgnum = pgcnt - 1;
        } //// if /////
        // 스크롤 윗방향 : 페이지번호 감소
        else {
            // 페이지번호 1씩감소
            pgnum--;
            // 한계수 : 페이지 첫번호 -> 0
            if (pgnum < 0) pgnum = 0;
        } //// else /////

        console.log("페이지번호", pgnum);

        // (4) 페이지 이동하기
        // scrollTo(가로,세로)
        window.scrollTo(0, window.innerHeight * pgnum);
        // 세로 이동위치: 윈도우높이값 * 페이지번호
        
    } //////////////// wheelFn 함수 ////////////////


    /***************************************** 
        함수명: movePg
        기능: 메뉴 클릭시 해당위치로 이동하기
    *****************************************/
    function movePg(seq) { // seq - 순번(idx)
        // 기본기능막기
        event.preventDefault();
        // 호출확인
        console.log("이동!", seq);
    } //////////////// movePg 함수 /////////////////
    
} ////////////////// loadFn 함수 ///////////////////