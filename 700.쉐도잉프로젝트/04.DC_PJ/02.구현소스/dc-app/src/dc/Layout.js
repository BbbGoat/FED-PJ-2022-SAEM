// 메인 레이아웃 컴포넌트
import Logo from "./Logo";
import "./css/layout.css";
import { Link, Outlet } from "react-router-dom";
import { gnb_data, bmenu } from "./data/common";

// 폰트어썸 임포트
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


/********************************************************* 
    [ 리액트 라우터와 연결하여 사용되는 라우터 컴포넌트 ]
    1. <Link to="/경로명"></Link>
    -> to속성의 경로는 <Route path="/경로명">과 일치함!

    2. <Outlet />
    -> 라우터 연결 컴포넌트 출력자리 컴포넌트
*********************************************************/

const Layout = () => {

    // 자식컴포넌트 값 전달 테스트 함수
    const callMe = (x) => {
        console.log("누구?",x);
    }; /////////// callMe /////////////////

    // 로그인 상태 Hook 변수 : 로컬쓰 "minfo" 초기할당!
    const [logSts,setLogSts] = useState(localStorage.getItem("minfo"));
    // 로그인 환영메시지 Hook 변수
    const [logMsg,setLogMsg] = useState("");
    // 로그인 환영메시지 스타일
    const logStyle = {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
    }; ////////// logStyle //////////////

    // 로그인 셋팅함수 //////////
    const setLogin = () => {
        // 1. 로그인 Hook변수 업데이트하기
        setLogSts(localStorage.getItem("minfo"));

        // 2. 로컬스 값이 null이 아니면 메시지 뿌리기
        if (localStorage.getItem("minfo")){
            // 메시지 셋팅하기 : 객체안의 "unm"속성이 사용자이름!
            setLogMsg("Welcome "+JSON.parse(localStorage.getItem("minfo"))["unm"]);
        } ///////////// if //////////////
    }

    return (
        <>
            {/* 1. 상단영역 */}
            <header className="top">

                {/* 로그인 환영 메시지 : 조건 - logSts값이 logsts */}
                {
                    logSts !== null &&
                    <div className="logmsg" style={{logStyle}}>
                        {logMsg}
                    </div>


                }
                
                {/* 네비게이션 파트 */}
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link to="/main">
                                <Logo gb="top" tt={callMe} />
                            </Link>
                        </li>
                        {
                            gnb_data.map((v,i) =>
                                <li key={i}>
                                    <Link to={v.link}>{v.txt}</Link>
                                    {/* v.sub가 없으면 undefined */}
                                    {/* {console.log(v.sub)} */}
                                    {
                                        // 조건식 && 출력코드
                                        // 조건 : sub데이터가 없지 않으면
                                        // undefined - 정의되지 않은 값
                                        // null - 빈값
                                        // 위의 두가지는 데이터가 없다는 값임!
                                        v.sub != undefined &&
                                        <div className="smenu">
                                            <ol>
                                                {
                                                    v.sub.map((v,i)=>
                                                        <li key={i}>
                                                            <Link to={v.link}>{v.txt}</Link>
                                                        </li>
                                                    )
                                                }
                                            </ol>
                                        </div>
                                    }
                                </li>
                            )
                        }
                        <li style={{marginLeft: "auto"}}>
                            <FontAwesomeIcon icon={faSearch} />
                        </li>
                        <li>
                            <Link to="/mem">
                                JOIN US
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                LOG IN
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* 2. 메인영역 */}
            <main className="cont">
                {/* 출력파트 : 각 페이지의 컴포넌트가 출력됨 */}
                <Outlet />
            </main>
            {/* 3.하단영역 */}
            <footer className="info">
                <ul>
                    <li>
                        <Logo gb="bottom" tt={callMe} />
                    </li>
                    <li>
                        <ol className="bmenu">
                            {
                                bmenu.map((v,i)=>
                                    <li key={i}>
                                        <a href={v.link} target="_blank">{v.tit}</a>
                                    </li>
                                )
                            }
                        </ol>
                    </li>
                    <li></li>
                </ul>
                
                All Site Content © &amp; TM DC, unless otherwise noted here.
                <br /> 
                All rights reserved. 
            </footer>
        </>
    );
}; ///////////////// Layout 컴포넌트 /////////////////

// 내보내기
export default Layout;