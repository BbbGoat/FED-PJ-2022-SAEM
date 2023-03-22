// 데이터 처리하기 위한 JS - textData.js

// 1. 중제목 데이터
const mTitle = "모듈을 이용한 구현";

// 2. 소제목 데이터
const sTitle = "이것은 리액트의 기초입니다!";

// 3. 사람 데이터 : [이름,나이]
const personInfo = [
    ["준현",23],
    ["정희",33],
    ["성락",45],
    ["진경",22],
]; ////// 배열 ////////////


// 다중변수 전송 -> 중괄호사용, 콤마로 구분
export {mTitle,sTitle,personInfo};
/**************************************************** 
    export 형식:
    1. export {변수,변수,변수};
    -> 여러개의 변수를 내보낼 경우 사용

    2. export default 변수;
    -> 단일한 변수를 내보낼때 사용
    -> default 단 하나의 변수만 내보내는 형식 제한!
****************************************************/