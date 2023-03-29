// 2023캘린더

// 모듈 불러오기 : import
import MakeDallyeok from "./calendar.js";
// 현재 같은 위치일지라도 ./ 를 반드시 써야 불러옴!

// 생성자함수를 인스턴스로 호출하기
// 인스턴스 생성이란 특정메모리 구역에
// 모듈을 로딩시켜서 개별화 기능이 적용되게 하는것!

// 우리가 만든 달력 생성자함수에서 전달값을 받는 것은?
// 달력을 넣을 요소의 선택자정보임!
// 달력넣을 요소 : .calbx
let calbx = new MakeDallyeok(".calbx");
// 초기화함수를 호출함!
calbx.initDallyeok();
// 다음달 달력호출하기
// calbx.nextCal();

// 다른요소에 달력 추가생성하기!
let calbx2 = new MakeDallyeok(".calbx2");
// 초기화함수 호출
calbx2.initDallyeok();
// 다음달 달력 호출하기
calbx2.nextCal();

/// 제이쿼리 라이브러리를 html페이지 상단에 호출후 사용!
$(".myipt").click(function(){
    console.log(this);
    // 해당박스 달력보이기
    $(this).next().find(".calender").show();
}); ///////// click /////////////

// on(이벤트명,함수) -> 이벤트명을 띄어쓰기로 여러개 셋팅 가능!
// -> addEventListener에서는 원래 이벤트 종류별로 하나씩 셋팅해야하는데 제이쿼리는 다중 가능! 
$(".calender").on("mouseenter click",function(){
    console.log("이벤트!!");
    // 하위 날짜박스인 .date를 클릭이벤트 설정한다!
    // this -> .calender 
    $(this).find(".date").click(()=>{
        // 일반익명함수일때 this -> .date
        // 이벤트를 싸고있는 이벤트 대상을 this로 만들고 싶을때
        // -> 화살표함수를 사용한다! -> 싸고 있는 .calender가 this임!
        // -> 화살표함수는 this가 부모를 대상으로 한다!
        // (상위에서 화살표함수가 아닌 함수를 찾아 부모로함)
        console.log("화살표함수에서 this:",this);
        // this -> .calender!!!
        
        let val = $(this).find(".dinfo").val();
        // val() 메서드 - input의 value값을 읽어온다
        $(this).parents().prev().val(val);
        // val(값) -> input에 내용 넣기
        $(this).hide();

    }); /////// click ////////////

}); ///////// click ////////////