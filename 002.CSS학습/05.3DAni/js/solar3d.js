// 3D 태양계 JS - solar3d.js //////

window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료!");

    /************************************************* 
        [ 구현내용 ]
        - 축소확대 버튼 클릭시 표기된 배율만큼
        태양계전체를 축소/확대 적용한다!
        - 이때 클릭된 메뉴는 오버시 변경색을 유지한다!
    *************************************************/
   
    // 1. 대상선정
    // 이벤트 대상 : 축소확대 메뉴 a요소들 .tit a
    const menu = document.querySelectorAll(".tit a");
    // 변경 대상 : 태양계 전체를 싸고 있는 부모요소 -> .scbx
    const scbx = document.querySelector(".scbx");

    // console.log(menu, scbx);

    // 2. 이벤트함수 셋팅하기
    for (let x of menu) { // x는 각각의 a
        x.onclick = () => {
            let btxt = x.innerText;
            console.log(btxt);
            
        }; /////// click 이벤트 ///////
    } //////// for of문 /////////
    
}); ////////////////// 로드구역 //////////////////////