// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js

/**************************************** 
    [ 생성자함수로 묶어서 export 해준다! ]
    < 생성자함수로 변경할때 체크할점! >
    1. 일반함수(function)는 할당형 함수로 변경
    -> 함수명은 this키워드로 등록
    예) 
    (변경전)
    function my(){...}
    (변경후)
    this.my = () => {}

    2. 변수는 외부에 공개할 것만 this 키워드로 등록함
    -> 일반적으로 let,const를 모두 변경할 필요는 없고
    내가 인스턴스 생성시 접근해야할 변수만 this로 등록함!

    3. 할당형 변수는 호출 호이스팅이 불가하므로
    상단에서 바로 함수를 호출하거나 이벤트 등록한 경우,
    이를 생성자함수 하단으로 이동시킨다!
****************************************/
function AutoScroll() {


/**************************************** 
    대상 변수할당하기
****************************************/
// 전체 페이지번호
let pno = 0;
// 페이지 요소
const pg = $(".page");
// 전체 페이지개수
const pgcnt = pg.length;
console.log("페이지개수:", pgcnt, pg);
// 광실행금지변수
let prot = [];
// 광스크롤금지
prot[0] = 0;
// GNB 메뉴 li
const gnb = $(".gnb li");
// indic 메뉴 li
const indic = $(".indic li");
// 각 페이지별 등장요소
const minfo = $(".minfo");


/**************************************** 
    이벤트 등록하기
****************************************/
// 윈도우 휠이벤트 발생시
$(window).on("wheel", wheelFn);
// GNB메뉴 클릭시 : 대상 - .gnb a
$(".gnb a").click(chgMenu);
// 인디케이터 클릭시 : 대상 - indic a
$(".indic a").click(chgMenu);

// 새로고침시 스크롤위치 캐싱 변경하기(맨위로!)
$("html,body").animate({scrollTop:"0px"});

/**************************************** 
    함수명: wheelFn
    기능: 마우스휠 이벤트 발생시 호출됨
    -> 한페이지씩 자동스크롤 기능
****************************************/
function wheelFn() {

    // 광휠금지
    if (prot[0]) return;
    chkCrazy(0);

    console.log("휠~~~~~~");

    // 1. 휠 방향 알아내기
    let delta = event.wheelDelta;
    // console.log(delta);

    // 2. 방향에 따른 페이지번호 증감
    if (delta < 0) {
        pno++;
        if (pno === pgcnt) pno = pgcnt - 1;
        // 마지막 페이지번호에 고정!
    } // if ///////
    else {
        pno--;
        if (pno === -1) pno = 0;
        // 첫 페이지번호에 고정!
    } // else /////

    console.log(pno);

    // 3. 스크롤 이동하기 + 메뉴에 클래스"on" 넣기
    movePg();
    
} /////////// wheelFn 함수 ///////////////


// 광클 초기값
prot[1] = 0;
/**************************************** 
    함수명: chgMenu
    기능: 메뉴 클릭시 메뉴 변경과 페이지 이동
****************************************/
function chgMenu() {
    
    // 0. 광클금지
    if (prot[1]) return;
    chkCrazy(1);
    
    // 1. 클릭된 a요소의 부모 li 순번을 구함 === pno
    let idx = $(this).parent().index();
    
    console.log("나,클릭?",this,idx);

    // 2. 전역페이지번호에 순번 업데이트
    pno = idx;
    
    // 3. 페이지이동 + 메뉴에 클래스 "on" 넣기
    movePg();

} /////////// chgMenu 함수 ///////////////


/**************************************** 
    함수명: chkCrazy
    기능: 광적동작 체크하여 제어리턴
****************************************/
function chkCrazy(seq) { // 관리변수 순번
    prot[seq] = 1;
    setTimeout(() => (prot[seq] = 0), 800);
} /////////// chkCrazy 함수 //////////////

/**************************************** 
    함수명: movePg
    기능: 페이지이동 애니메이션
****************************************/
function movePg() {

    // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
    $("html,body").animate({
        scrollTop:($(window).height()*pno)+"px"
    },800,"easeOutBounce",showEle // 콜백함수 호출!
    );

    // 대상: GNB메뉴, 인디케이터 메뉴
    gnb.eq(pno).addClass("on").siblings().removeClass("on");
    indic.eq(pno).addClass("on").siblings().removeClass("on");
        

} ////////// movePg 함수 ////////////////

// 등장할 요소 초기화
minfo.css({
    opacity: 0,
    transform: "translate(-50%,50%)",
    transition: ".3s ease-out",
}); //////// css /////////////

/**************************************** 
    함수명: showEle
    기능: 페이지이동 후 요소 등장하기
****************************************/
function showEle() {

    // .minfo 페이지별 등장하기!
    pg.eq(pno).find(".minfo")
    .css({
        opacity: 1,
        transform: "translate(-50%,-50%)",
    }) //////// css /////////////
    .parents(".page").siblings().find(".minfo")
    .css({
        opacity: 0,
        transform: "translate(-50%,50%)",
        transition: ".3s ease-out",
    })

} ///////// showEle 함수 ////////////////

// 등장액션함수 최초호출 ////
setTimeout(showEle, 1000);


} ////////// AutoScroll 생성자함수 //////////////

// 생성자함수 내보내기
export default AutoScroll;
