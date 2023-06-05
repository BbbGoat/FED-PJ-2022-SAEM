// 메뉴 버튼 모듈 : MenuBtn.js
import $ from "jquery";
import "./css/menubtn.css";

// 제이쿼리 로드구역 함수 ////////////
function jqFn() {
    $(()=>{

    }); ///////////// jQB ///////////////////
} /////////////// jqFn 함수 ///////////////////////

function MenuBtn() {
    return (
        <>
            <section className="menubtn">
                <div className="imbx">
                    <img src="" alt="" />
                </div>
                <div className="titbx">
                    <h3>//</h3>
                    <h2>//</h2>
                </div>
                <div className="btnbx">
                    <button>//</button>
                </div>
            </section>
            {/* 빈 루트를 만들고 JS로드함수를 포함
            -> 깔끔하게 section 밖으로 정리해주기 위함! */}
            {jqFn()}
        </>
    );
}

export default MenuBtn;