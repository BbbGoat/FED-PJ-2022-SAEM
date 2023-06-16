// 공통데이터 - 상단,하단영역 : common.js


// GNB메뉴 데이터 구성하기
const gnb_data = [
    // {
    //     txt:"Home",
    //     link:"/",
    // },
    {
        txt:"CHARACTERS",
        link:"/ct",
    },
    {
        txt:"COMICS",
        link:"/co1",
        sub: [
            {
                txt:"LATEST COMICS",
                link:"/co1",
            },
            {
                txt:"DC UNIVERSE INFINITE",
                link:"/co2",
            },
            {
                txt:"ALL COMICS SERIES",
                link:"/co3",
            },
        ]
    },
    {
        txt:"MOVIES & TV",
        link:"/mv",
        sub: [
            {
                txt:"DC MOVIES",
                link:"/mv",
            },
            {
                txt:"DC SERIES",
                link:"/mv",
            },
            {
                txt:"DC ON HBO MAX",
                link:"/mv",
            },
        ]
    },
    {
        txt:"GAMES",
        link:"/gm",
    },
    {
        txt:"NEWS",
        link:"/nw",
    },
    {
        txt:"VIDEO",
        link:"/vd",
    },
];

/* 하단링크 데이터 셋업! */
const bmenu = [
    {
        tit: "PRIVACY POLICY",
        link: "https://www.warnermediaprivacy.com/policycenter/b2c/WM/",
    },
    {
        tit: "TERMS",
        link: "https://www.dcuniverseinfinite.com/terms",
    },
    {
        tit: "AD CHOICES",
        link: "https://www.warnermediaprivacy.com/policycenter/b2c/wm/",
    },
    {
        tit: "ACCESSIBILITY",
        link: "https://policies.warnerbros.com/terms/en-us/#accessibility",
    },
    {
        tit: "COOKIE SETTINGS",
        link: "#compliance-link",
    },
];


export { gnb_data, bmenu };