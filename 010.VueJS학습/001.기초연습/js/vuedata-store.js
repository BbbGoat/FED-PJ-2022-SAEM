// 뷰JS 데이터처리 뷰엑스 스토어 JS - vuedata-store.js


const store = new Vuex.Store({
    // (1) 데이터 셋팅구역:
    state: {}, /////// state 구역 ////////

    // (2) 데이터 변경 메서드구역: 호출시 commit() 사용!
    mutations: {},

    // (3) 백엔드 관련 코딩 비동기 처리 메서드 구역:
    // 호출시 dispatch() 사용!
    actions: {}

}); ///////////// 뷰엑스 인스턴스 /////////////


// 내보내기
export default store;