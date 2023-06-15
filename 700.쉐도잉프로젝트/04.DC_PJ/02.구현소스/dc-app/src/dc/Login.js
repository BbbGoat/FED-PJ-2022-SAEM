// 로그인 페이지 컴포넌트 - Login.js

// 회원가입과 디자인 동일
import { useState } from "react";
import "./css/member.css";

export default function LogIn(){

    
    // [ 후크 useState 메서드 셋팅하기 ]
    // [ 1. 입력요소 후크변수 ]
    // 1. 아이디변수
    const [userId, setUserId] = useState("");
    // 2. 비밀변호변수
    const [pwd, setPwd] = useState("");

    // [ 2. 에러상태값 후크변수 ]
    // -> 에러상태값변수 : 초기값은 에러 아님상태 (false)
    // 1. 아이디에러변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호에러변수
    const [pwdError, setPwdError] = useState(false);

    // [ 아이디관련 메시지 프리셋 ]
    const msgTxt = [
        "This is a required entry", // 필수입력
        "ID does not exist",
        "Password doesn't match",
    ];

    // 후크변수 메시지
    // 아이디메시지
    const [idMsg,setIdMsg] = useState(msgTxt[0]);
    // 비번메시지
    const [pwdMsg,setPwdMsg] = useState(msgTxt[0]);
    

    // [ 3. 유효성 검사 메서드 ]
    // 1. 아이디 유효성 검사
    const changeUserId = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setUserIdError(false);
        else setUserIdError(true);

        // 2. 입력값 반영하기
        setUserId(e.target.value);
    }; ///////////////// changeUserId ///////////////////

    // 2. 비밀번호 유효성 검사
    const changePwd = (e) => {
        // 1. 빈값 체크
        if (e.target.value !== "") setPwdError(false);
        else setPwdError(true);

        // 2. 입력값 반영하기
        setPwd(e.target.value);
    }; ///////////////// changePwd /////////////////////

    
    // 3. 전체 유효성 검사함수
    const totalValid = () => {

        // 모든 입력창 검사 (빈값일 경우 모두 에러를 후크변수에 전달!)
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);

        // 통과조건:
        // 1. 빈값이 아님
        // 2. 에러 후크 변수가 모두 false
        // 위의 2가지 만족시 true값 리턴
        if(userId && pwd && !userIdError && !pwdError) return true;
        else return false; // 하나라도 에러면 false값 리턴!

    }; ////////////////// totalValid ////////////////////
    
    
    
    
    return(
        <>
            <div className="outbx">
                {/* 모듈코드 */}
                <section className="membx" style={{minHeight:"300px"}}>
                    <h2>Log In</h2>

                    <form method="post" action="process.php">
                        <ul>
                            <li>
                                {/* 1.아이디 */}
                                <label>ID : </label>
                                <input
                                    type="text"
                                    maxLength="20"
                                    placeholder="Please enter your ID"
                                    value={userId}
                                    onChange={changeUserId}
                                />
                                {
                                    // 에러일 경우 메시지 보여주기
                                    // 조건문 && 요소 -> 조건 true일때 요소 출력
                                    // 후크 데이터 idMsg로 변경출력!
                                    userIdError && (
                                        <div className="msg">
                                            <small style={{ color: "red", fontSize: "10px" }}>
                                                {idMsg}
                                            </small>
                                        </div>
                                    )
                                }
                             
                            </li>

                            <li>
                                {/* 2.비밀번호 */}
                                <label>Password : </label>
                                <input
                                    type="password"
                                    maxLength="20"
                                    placeholder="Please enter your Password"
                                    value={pwd}
                                    onChange={changePwd}
                                />
                                {
                                    // 에러일 경우 메시지 보여주기
                                    // 조건문 && 요소 -> 조건 true일때 요소 출력
                                    pwdError && (
                                        <div className="msg">
                                            <small style={{ color: "red", fontSize: "10px" }}>
                                                {pwdMsg}
                                            </small>
                                        </div>
                                    )
                                }
                            </li>
                                
                         
                            <li style={{overflow:"hidden"}}>
                                {/* 6.버튼 */}
                                <button className="sbtn" onClick={onSubmit}>
                                    Submit
                                </button>
                                {/* input submit 버튼이 아니어도 form요소 
                                내부의 button은 submit기능이 있다! */}
                            </li>
                        </ul>
                    </form>
                </section>

            </div>
        </>
    );
} ///////////////////// LogIn 컴포넌트 /////////////////////