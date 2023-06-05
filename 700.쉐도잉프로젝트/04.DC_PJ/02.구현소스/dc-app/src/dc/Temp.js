// Temp 모듈 : Temp.js
import $ from "jquery";
import "./css/temp.css";

// 제이쿼리 로드구역 함수 ////////////
function jqFn() {
    $(()=>{

    }); ///////////// jQB ///////////////////
} /////////////// jqFn 함수 ///////////////////////

function Temp() {
    return (
        <>
            {/* 모듈코드 */}

            {/* 빈 루트를 만들고 JS로드함수를 포함
            -> 깔끔하게 section 밖으로 정리해주기 위함! */}
            {jqFn()}
        </>
    );
}

export default Temp;