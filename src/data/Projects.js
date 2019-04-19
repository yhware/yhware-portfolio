// 진행 프로젝트 mini DB
// DBMS를 사용할수도 있지만 S3에 호스팅 해서 비용절감할 것 이기에 단순 js object 으로 대채
export default [
    {
        projectTitle: "공용PC 관리프로그램",
        link: "/projects/internetcafe",
        projectDetail: "의경부대 공용PC 사용시간을 사용자당 제어하고 실시간 감시하여 바이러스 감염 시 책임자를 찾기위해 만들었습니다",
        usedTechs: ["python", "c#", "react", "wpf", "flask", "aws"],
        projectImg: "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/internet-cafe/internet-cafe-title.png",
        carousel: [
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/internet-cafe/carousel-1.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/internet-cafe/carousel-2.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/internet-cafe/carousel-3.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/internet-cafe/carousel-4.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/internet-cafe/carousel-5.png"
        ],
        projectTags: [""],
        projectIntro: `의무경찰 행정 대원으로 군 복무 중 공용PC사용에 문제가 있었습니다.
                       선임 대원들이 장시간 사용으로 후임들의 사용 시간 부족,
                                            그리고 부주의한 사용으로 잦은 바이러스 감염이었습니다.
                                            해결책으로 PC방 관리프로그램이 필요했지만, 상용 소프트웨어는
                                            광고와 라이센싱 문제 때문에 사용이 힘들었습니다.
                                            이를 해결하기 위해 직접 프로그램을 만들게 되었습니다.`,
        projectBuildProcess: `첫 기획은 서버 없는 로컬 클라이언트로 사용 시간 제한만 하는 것이였습니다.
                                       하지만 경찰서 IT담당자와 논의 후 서울 내 모든 의경 부대가 사용할 수 있게 설계를 변경하였습니다.
                                       총 6가지 프로그램입니다: 클라이언트, 업데이터, 프로세스 보호기
                                     API 서버, WebSocket 서버, 관리자 웹사이트.
                                      클라이언트는 C#, WPF를 사용하였고 서버는 Python Flask, Tornado(WebSocket)를 사용했습니다.
                                      관리자 웹사이트는 React.js를 사용했습니다.`,
        projectFunc: ["사용자 회원가입/로그인", "실시간 사용 프로그램 모니터링", "프로세스 강제종료 보호",
            "NSIS 설치 패키지", "세션 시간 단축/연장", "그룹 정책(사용시간, 공지사항)"],
        githubLink: "https://github.com/yhware/antidote-client",
        projectSpecialPoints: [
            {
                specialPointTitle: "실시간 세션 유지의 어려움",
                specialPointImg: "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/internet-cafe/detail-1.png",
                specialPointBody: `지금까지 작업한 프로젝트들은 모두 Stateless 한 성격을 가진 HTTP 프로토콜만 사용하였습니다.
                    하지만 이 프로젝트는 서버와 PC사이에 Stateful한 실시간 Connection이 필요했기에 이 부분에서 어려움을 겪었습니다.
                    컴퓨터가 갑자기 꺼지거나, 프로세스가 예상치 못하게 꺼질경우 해당 세션을 폐기하고 해당 세션의 종료시간을 기록해야했기에 꼭 필요한 기능이였습니다.
                    이를 해결하기 위해 Redis와 WebSocket을 채용했습니다.
                    일반적으로 사용자 로그인으로 세션이 시작되면 PostgreSQL DB에 종료시간을 최대시간으로 입력합니다.
                    이 후 세션 정보를 Redis 에 EXPIRE 설정을 하여 저장하고 클라이언트와 WebSocket 연결을 하여 지속적으로 Redis
                    EXPIRE 시간을 리셋해주고 WebSocket 연결이 끊길 시 즉시 Redis 키를 삭제하고 DB를 업데이트 해줍니다.
                    세션관리에 Redis가 꼭 필요한건 아니지만 사용한 이유는 WebSocket 서버 다운 시 fail-over 하여 
                    세션 데이터를 잃지 않고 재부팅 시 Redis에서 다시 가져올 수 있기에 사용하였습니다.`
            },
            {
                specialPointTitle: "프로세스 강제종료 보호",
                specialPointBody: `부대 내부에서만 사용할 것 이면 문제가 되지 않지만 다양한 부대로 배포될 것 이였기 때문에 보호할 필요가 있었습니다.
                            우선 프로그램 2개(dummy, shield)를 만들어 클라이언트와 같이 실행시켰습니다. shield가 클라이언트 프로세스를 지속
                            모니터링 하고 꺼질경우 dummy를 이용해 클라이언트를 재실행 시킵니다. dummy를 사용하는 이유는 프로세스 트리 강제종료를
                            막기위해 클라이언트와 shield간의 관계를 끊어주는겁니다.
                            하지만 또한 우회 방법이 많았기에 근본적인 해결법인 SSDT Hooking을 도입했습니다. 이는 32bit 컴퓨터에서만
                            작동되는 기법이지만 경찰청 공용PC모두 32bit 를 사용하기에 적합한 해결법이였습니다. ObRegisterCallbacks 메소드를
                            이용해 보다 안정적으로 64bit까지 대비 할 수 있었지만 값비싼 Microsoft Driver Signing Certificate가 필요했기에
                            적용하지 못했습니다. 결과적으로 SSDT Hooking을 이용한 Kernel Driver를 사용해 shield 프로세스를 숨겨
                            프로그램을 보호 할 수 있었습니다.`
            }
        ]
    },
    {
        projectTitle: "차량관제시스템(FMS) 안드로이드 앱",
        link: "/projects/fmsandroid",
        projectDetail: `스카이오토넷 인턴 중 혼자 개발한 안드로이드 앱입니다.
                        차량 실시간 위치, 운행기록, 단말(차량에 설치된)설정,
                        차량예약 등 차량관제시스템 사용 고객사의 직원 및 관리자들이 모바일에 편하게 사용 할 수 있도록 고려하였습니다.`,
        projectIntro: `차량관제시스템 안드로이드 앱입니다. 
            실시간 차량 위치보기, 운행이력 등 웹 버전의 기능을 대부분 내장하면서 
            사용자가 모바일에서 관심있을 만한 기능 위주로 개발하였습니다.`,
        projectImg: "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-android/fms-android-title.png",
        carousel: [
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-android/carousel-1.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-android/carousel-2.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-android/carousel-3.png",
        ],
        projectBuildProcess: `FMS 사용 고객사에서 데스트톱 웹으로 매번 접속해서 차량을 예약하고 현위치 파악하는게 업무에 지장을 준다는 피드백을 접수했습니다.
            이에 대응하고자 안드로이드 앱 개발에 착수하였지만 기획,디자인,개발 모두 저 혼자 해내야했기에 어려운 프로젝트였지만 그만큼 제 역량을 키울수 있었던 경험이였습니다.
            기존 스프링 서버는 JSP를 사용하였기에 REST API가 없었고 서버 수정을 통해 json을 기반으로 하는 API도 지원하게 서버를 수정하였습니다.
            지도 관련 기능은 다음지도API를 사용하여 지도표시와 GPS->주소변환 작업을 진행했습니다. 
            Uber, Airbnb, 다음지도 앱 등을 참고해 사용자에게 친숙하고 편한 UX를 제공하였습니다.`,
        projectFunc: ["지도 위 차량 실시간 위치 표시", "차량 운행이력", "차량 예약", "차량에 부착된 단말기 설정조정"],
        playStoreLink: "https://play.google.com/store/apps/details?id=skynet.skyautonet.com.skynet",
        projectSpecialPoints: [
            {
                specialPointTitle: "RxJava를 통한 Reactive Programming",
                specialPointImg: "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-android/code-rxjava.png",
                specialPointBody: `앱을 만들며 모든 Activity 들이 알아야할 이벤트나 API 서버에서 오는 정보를 공유해야하는 일이 많았습니다.
                예로 설정 Activity에서 로그아웃을 할 경우 모든 Activity를 닫아야 했고 이를 전달할수 있어야 했습니다.
                또한, API Request/Response가 비동기 방식이였기에 이를 처리하는데도 필요했습니다.
                이 문제들을 해결하기 위해 RxJava의 PublishSubject을 Singleton 패턴으로 생성해 Activity들에서 Subscribe하였고 
                이벤트 발생 시 Observer들에게 이벤트와 해당 데이터가 전달되었습니다.`
            },
            {
                specialPointTitle: "REST API 지원 위해 기존 Spring 서버 수정",
                specialPointImg: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
                specialPointBody:
                    `안드로이드 앱 개발 전에는 백앤드 서버는 JSP만 지원하고 있었고 JSON 이나 XML 형태의 응답을 줄 수 있는
                    API 기능이 없었습니다. 이를 개선하기 위해 API 엔드포인트들을 추가했고 인증을 JWT로 진행하였습니다.`
            },
            {
                specialPointTitle: "Fabric을 통한 Crash 데이터 수집",
                specialPointImg: "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-android/fabric-icon.png",
                specialPointBody:
                    `많은 노력과 테스팅이 들어갔지만 안드로이드 생태계는 너무나도 환경이 다양하여 어디서 어떻게 문제가 발생할지 예상하기 힘듭니다.
                    그렇기에 Fabric 서비스를 이용해서 앱 Crash 데이터를 수집하였고 리포트에 Stack trace와 환경이 포함되어있어 디버깅에 큰 도움이 되었습니다.
                    또한 앱의 DAU 같은 기초적인 KPI는 물론 사용자가 어떤 기능을 자주 사용하는지도 수집하여 앱 기능 개선 우선 순위 
                    설정에 큰 도움이 되었습니다.`
            }
        ],
        usedTechs: ["java", "android"],
        projectTags: ["java", "android"]
    },
    {
        projectTitle: "차량관제시스템(FMS) 프론트앤드",
        link: "/projects/fmsfront",
        projectDetail: "기획부터 구현 및 출시까지 참여한 프로젝트입니다. 고객 최대관심사인 차량실시간위치 " +
            "jQuery로 개발하였다 성능문제로 React로 새로 개발하였지만 기존 백앤드와의 호환성 이슈로 처음 개발한 버전으로 돌아갔습니다.",
        projectIntro: `
            차량관제시스템의 웹버전 프론트앤드입니다. React 버전과 JSP 버전 2가지가 있습니다.
        `,
        carousel: [
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-react/carousel-1.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-react/carousel-2.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-react/carousel-3.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-react/carousel-4.png",
            "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-react/carousel-5.png",
        ],
        projectBuildProcess: `
            입사 시 Quantum Gate라는 이름으로 차량관제서비스가 운영되고 있었지만 직관적이지 못하고 느린 UI, 경쟁사 서비스와의 유사성 등을
            이유로 새로운 버전 개발에 착수하게 되었습니다.
            인턴이었지만 신버전 기획에 적극적으로 참여하였고 신규 디자인의 초안은 제 아이디어였습니다. 
            팀원분들의 지속적인 피드백을 받으며 기획을 완료하고 jQuery를 사용하여 개발을 시작하였습니다.
            하지만 다음지도를 배경으로 하고 메뉴마다 페이지 내 탭을 활용하여 로딩하는 디자인으로 인해 사용 불가능할 정도로 느려졌습니다.
            이를 해결하기 위해 SPA에 적합한 Angular와 React 중 고민을 하였고 프론트앤드에 집중한 '라이브러리'라는 점과 당시 Angular 2.0이 나온 지 얼마 안 된 점을 고려하여
            React를 선택하였습니다. 
            React와 Material-ui 라이브러리 덕분에 성능 저하 없는 결과물이 만들어 질 수 있었습니다.
            하지만 복합적 비기술적 사정으로 인해 React 버전은 사용되지 않았고 처음 개발한 jQuery 버전을 사용하되 각 메뉴를 iframe으로 불러오는 식으로 진행하였습니다.
            비록 신기술을 production에 사용하지는 못하였지만, 협업에 적절한 기술 선택과 레거시 시스템에 맞는 기술 적용이 얼마나 중요한지 배우는 경험이 되었습니다.
        `,
        projectFunc: ["지도 위 차량 실시간 위치 표시", "차량 운행이력", "차량 예약", "차량에 부착된 단말기 설정조정", "법인차운행기록부", "운행분석", "단말설정"],
        projectSpecialPoints: [],
        usedTechs: ["react", "redux", "javascript", "jquery", "webpack"],
        projectImg: "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/fms-react/fms-front-title.png",
        projectTags: [""]
    },
    {
        projectTitle: "포트폴리오 웹사이트",
        link: "/projects/portfolio",
        carousel: ["https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/portfolio/portfolio-carousel.png"],
        projectDetail: "제 개발 역량을 보여드리기 위한 웹사이트입니다. " +
            "React로 개발되었으며 용이한 관리를 위하여 Client-side로 렌더링되며 AWS S3에서 호스팅 됩니다." +
            "이전에는 Webpack, babel등 직접 설정하여 사용했지만 처음으로 create-react-app을 사용해봤습니다",
        projectIntro: `지금까지 제가 작업하였던 프로그램을 소개하는 웹사이트입니다.`,
        githubLink: "https://github.com/yhware/yhware-portfolio",
        travis: {
            travisLink: "https://travis-ci.org/yhware/yhware-portfolio",
            buildImg: "https://travis-ci.org/yhware/yhware-portfolio.svg?branch=master",
        },
        projectBuildProcess: `제가 개발한 작품들을 보기 좋게 한곳에 모아 사이트를 만들어봤습니다.
            AWS S3에 호스팅 되기에 Client-side 렌더링을 사용하였습니다.
            또한, 소스를 Github에 공개하여 Travis CI와 연동하여 Build 후 S3 버킷에 Deploy가 됩니다.
            Deploy 후 CloudFront를 통해 사용자에게 Deliver 됩니다 (커스텀 도메인 사용을 위해 CF를 사용하였습니다).
            이를 통해 수정사항이 있을 경우 보다 쉽게 사용할수 있도록 됬습니다.`,
        usedTechs: ["react", "javascript", "aws"],
        projectFunc: null,
        projectImg: "https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/portfolio-pics/portfolio-title.png",
        projectTags: [""]
    },

]