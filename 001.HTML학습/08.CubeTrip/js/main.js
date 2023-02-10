// 큐브트립 메인 JS ///////////////////////

/******************************************* 
    [ 구현 요구사항 ]
    - 도시별 메뉴버튼을 클릭시 해당도시의 
    데이터를 큐브회전후 도시와 매칭하여
    정보를 화면에 출력한다!
*******************************************/

// 로딩구역 //
window.addEventListener("DOMContentLoaded",loadFn);

////////////////// 로드함수 ////////////////
function loadFn() {
    console.log("로딩완료!");

    // 1. 대상선정
    // 1-1. 이벤트대상 : .city a
    const menu = document.querySelectorAll(".city a");

    // 1-2. 변경대상1 : .cube
    const cube = document.querySelector(".cube");
    
    // 1-3. 변경대상2 : .cbx
    const cbx = document.querySelector(".cbx");

    // console.log(menu);
    // console.log(cube);
    // console.log(cbx);

    // 2. 메뉴에 클릭 이벤트 설정하기
    // for of문
    for (let x of menu){ // x는 각각의 a요소
        // 1. 클릭이벤트설정
        x.onclick = () => {
            // 1. 메뉴 텍스트 읽기
            let mtxt = x.innerText;
            console.log(mtxt);
            // 2. 회전값 셋팅하기
            // 회전값변수
            let setval;
            // switch case문
            switch(mtxt){
                case "출발" : setval = "rotateX(0deg) rotateY(0deg)"; break;
                case "서울" : setval = "rotateX(-90deg) rotateY(-360deg)"; break;
                case "뉴욕" : setval = "rotateX(360deg) rotateY(-90deg)"; break;
                case "파리" : setval = "rotateX(-360deg) rotateY(90deg)"; break;
                case "베를린" : setval = "rotateX(720deg) rotateY(-180deg)"; break;
                case "런던" : setval = "rotateX(450deg) rotateY(360deg)"; break;
                default : setval = "rotateX(0deg) rotateY(0deg)";
            } ////// switch case //////
            
        }; /////// click 이벤트함수 ///////
        
        
    } /////// for of문 ////////

} ///////////////// loadFn 함수 /////////////////