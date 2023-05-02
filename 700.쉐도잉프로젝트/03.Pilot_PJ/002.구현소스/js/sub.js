// 카테고리 서브페이지 JS - sub.js

// 메뉴기능 함수 가져오기
import menuFn from "./mainjs/menu.js";
// 공통 데이터 가져오기
import comData from "./tempData/data-common.js";


// ########### 상단영역 메뉴 뷰템플릿 셋팅하기 ########## //
// Vue.component(내가지은요소명,{옵션})
Vue.component("top-comp",{
    template: comData.tareaSub,
}); ////////////////// 상단영역 Vue component /////////////////

// ######### 상단영역 뷰 인스턴스 생성하기 ########## //
// new Vue({옵션})
new Vue({
    el: "#top",
    data:{},
    // created 실행구역 : DOM 연걸 전!!
    created: function(){
        // DOM 연결 전 데이터 가공 작업
        console.log("created구역");
    }, 
    // mounted 실행구역: DOM 연결 후!!
    mounted: function(){
        // 제이쿼리코드함수 호출
        console.log("mounted구역");
        // 메뉴기능 호출
        menuFn();
    }
}); ////////////// 상단영역 Vue 인스턴스 /////////////////////


// ########### 하단영역 메뉴 뷰템플릿 셋팅하기 ########## //
// 자식
Vue.component("foot-comp",{
    template: comData.barea
}); ////////////////// 하단영역 Vue component /////////////////

// ######### 하단영역 뷰 인스턴스 생성하기 ########## //
// 부모
new Vue({
    el: "#info",
    data:{},
    // created 실행구역 : DOM 연걸 전!!
    created: function(){
        // DOM 연결 전 데이터 가공 작업
        console.log("created구역");
    }, 
    // mounted 실행구역: DOM 연결 후!!
    mounted: function(){
        // 제이쿼리코드함수 호출
        console.log("mounted구역");
    }
}); ////////////// 하단영역 Vue 인스턴스 /////////////////////


