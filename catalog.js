window.ATLAS_CATALOG = {
  "date": "2026-10-15",
  "groups": [
    {
      "id": "product",
      "name": "제품과 서비스",
      "en": "Products & services",
      "color": "#b58bff",
      "desc": "일상의 문제에서 출발한 제품과 구상"
    },
    {
      "id": "infra",
      "name": "AI와 만드는 방식",
      "en": "Systems behind the work",
      "color": "#b8d965",
      "desc": "제품을 만드는 도구와 검증의 기반"
    },
    {
      "id": "idea",
      "name": "새로운 질문",
      "en": "Questions worth exploring",
      "color": "#ffad71",
      "desc": "아직 답을 찾아가는 사업의 질문들"
    },
    {
      "id": "archive",
      "name": "보관한 실험",
      "en": "Experiments & lessons",
      "color": "#ca92bf",
      "desc": "멈춘 구상도 다음 시도의 재료가 됩니다"
    },
    {
      "id": "related",
      "name": "이어지는 기록",
      "en": "Connected work",
      "color": "#8bb6c9",
      "desc": "데모, 웹사이트와 별도 조직·학습의 기록"
    }
  ],
  "projects": [
    {
      "id": "fate",
      "name": "The Fate · MEI",
      "short": "The Fate",
      "group": "product",
      "tag": "AI × Culture",
      "repo": "saju-paljja",
      "stage": "개발·검증",
      "lead": "같은 운명, 각자의 언어로.",
      "summary": "명리 계산 엔진에 AI 해석과 현지어 경험을 더하는 다국어 사주 서비스입니다.",
      "problem": "같은 사주 이야기도 언어와 문화에 따라 다르게 읽힙니다. 계산의 정확성과 자연스러운 현지어 경험을 함께 다루고자 합니다.",
      "approach": "공통 계산 엔진 위에 시장별 브랜드와 인터페이스를 구성합니다. 일본 MEI(命)에서 시작해 여러 언어로 확장하는 방향을 구상했습니다.",
      "features": [
        "절기 기반 사주 계산",
        "현지어 AI 해석",
        "시장별 브랜드와 웹 경험"
      ],
      "flow": [
        "생년월일시 입력",
        "공통 엔진 계산",
        "현지어 해석",
        "결과 읽기"
      ],
      "tech": [
        "JavaScript",
        "Cloudflare Workers",
        "다국어 UI"
      ],
      "note": "계산·해석·프론트엔드 코드와 개발 기록을 확인했습니다. 현재 결제와 외부 채널까지 연결된 상용 운영을 뜻하지는 않습니다.",
      "related": [
        "myfit",
        "loop"
      ],
      "why": "AI를 실제 사용자 경험으로 옮기는 실험",
      "notionTitle": "사주팔자 / The Fate (MEI)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/38c2ebe9000d81648924fd42a8127821",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/saju-paljja/blob/main/README.md",
          "access": "public"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": "엔진 완료",
      "repositories": [
        {
          "name": "saju-paljja",
          "branch": "main",
          "visibility": "public",
          "url": "https://github.com/kgg2512/saju-paljja"
        }
      ],
      "stageSummary": "계산 엔진과 다국어 경험을 구체화하는 개발·검증 단계입니다. 제품의 계산, 해석, 결제와 채널은 각각의 준비가 필요합니다."
    },
    {
      "id": "g2coin",
      "name": "G2 Coin",
      "short": "G2 Coin",
      "group": "archive",
      "tag": "Rewards",
      "repo": "g2-coin",
      "stage": "보류",
      "lead": "서비스의 활동을 보상으로 잇는 구상.",
      "summary": "여러 서비스의 이용 활동을 보상하는 생태계 리워드 토큰 실험입니다.",
      "problem": "개별 서비스에서 일어난 이용 활동을 하나의 보상 체계로 연결하는 방식을 탐색했습니다.",
      "approach": "고정 공급량 토큰과 Merkle 증명 기반 분배 구조를 검토했습니다. 기술 실험과 실제 발행·운영은 구분됩니다.",
      "features": [
        "생태계 리워드 구상",
        "ERC-20 실험",
        "Merkle 분배 구조"
      ],
      "flow": [
        "이용 활동",
        "보상 대상 정리",
        "분배 증명",
        "보상 실험"
      ],
      "tech": [
        "Solidity",
        "Hardhat"
      ],
      "note": "Notion에는 보류 상태로 기록되어 있습니다. 발행되거나 거래되는 투자상품으로 소개하지 않습니다.",
      "related": [
        "myfit",
        "cinderella",
        "arc",
        "fate"
      ],
      "notionTitle": "G2 Coin (G2C)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/38c2ebe9000d816bb623ee0f4c3fddc1",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/g2-coin/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "기각 프로젝트",
      "recordStatus": "보류",
      "repositories": [
        {
          "name": "g2-coin",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/g2-coin"
        }
      ],
      "stageSummary": "과거에 검토하거나 만들었던 실험을 보관합니다. 현재 주력 프로젝트와 구분하면서 다음 시도에 쓸 질문을 남깁니다."
    },
    {
      "id": "myfit",
      "name": "MyFit",
      "short": "MyFit",
      "group": "product",
      "tag": "Fashion tech",
      "repo": "MyFit",
      "stage": "개발 중",
      "lead": "한 벌을 사기 전에, 맞을지부터.",
      "summary": "내 신체 치수와 상품의 실측표를 비교해 어깨·가슴 등 부위별 핏을 예측합니다.",
      "problem": "온라인에서는 옷을 직접 입어볼 수 없습니다. 같은 사이즈 표기만으로는 나에게 어떻게 맞는지 알기 어렵습니다.",
      "approach": "자체 FitEngine으로 신체 치수와 상품 실측을 비교합니다. 이미지를 합성해 보여주는 초기 접근에서, 부위별로 어떻게 맞는지 설명하는 방향으로 전환했습니다.",
      "features": [
        "신체 치수와 실측표 비교",
        "부위별 핏 안내",
        "웹·모바일·브라우저 확장"
      ],
      "flow": [
        "내 치수",
        "상품 사이즈표",
        "FitEngine 비교",
        "부위별 핏"
      ],
      "tech": [
        "Next.js",
        "React",
        "FitEngine",
        "Chrome extension"
      ],
      "note": "공개 저장소의 신형·구형 구조와 현재 개발 방향을 대조했습니다. 아래 화면은 보존된 개발 화면입니다.",
      "image": "assets/myfit-engine.png",
      "caption": "공개 저장소에 보존된 2026년 7월 개발 화면. 이 홈페이지가 현재 상품의 핏을 계산하는 것은 아닙니다.",
      "related": [
        "cinderella",
        "cinderella2",
        "mytone",
        "expo"
      ],
      "featured": true,
      "notionTitle": "MyFit",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/38c2ebe9000d8171bdcae0d071d1a7bf",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/MyFit/blob/master/README.md",
          "access": "public"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "MyFit",
          "branch": "master",
          "visibility": "public",
          "url": "https://github.com/kgg2512/MyFit"
        }
      ],
      "stageSummary": "현재는 치수 기반 FitEngine과 웹·모바일·확장 경험을 다듬는 개발 단계입니다. 초기 이미지 합성 방식과 신형 접근은 분리해 보존합니다."
    },
    {
      "id": "welkor",
      "name": "WelKor",
      "short": "WelKor",
      "group": "archive",
      "tag": "Settlement",
      "repo": "welkor",
      "stage": "보관한 실험",
      "lead": "한국에 도착한 다음의 여정.",
      "summary": "외국인의 한국 정착 정보와 면허 전문가 연결을 함께 다루는 플랫폼입니다.",
      "problem": "비자, 주거, 세무 등 정착 과정의 정보가 서로 흩어져 있고 언어 장벽도 있습니다.",
      "approach": "비자별 정착 여정을 영어·한국어로 안내하고 필요한 전문가에게 연결하는 구조를 설계했습니다.",
      "features": [
        "비자별 정착 여정",
        "영어·한국어 정보",
        "전문가 연결 흐름"
      ],
      "flow": [
        "비자 선택",
        "여정 확인",
        "정보 탐색",
        "전문가 연결"
      ],
      "tech": [
        "Next.js",
        "next-intl",
        "Supabase"
      ],
      "note": "저장소와 과거 개발 기록이 있습니다. Notion에서는 기각 프로젝트로 분류되어 있어 현재 주력 서비스와 분리했습니다.",
      "related": [
        "kpop",
        "campus"
      ],
      "notionTitle": "웰코 (WelKor)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/38c2ebe9000d817b920dd55945060c24",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/welkor/blob/master/README.md",
          "access": "public"
        }
      ],
      "recordCategory": "기각 프로젝트",
      "recordStatus": "라이브",
      "repositories": [
        {
          "name": "welkor",
          "branch": "master",
          "visibility": "public",
          "url": "https://github.com/kgg2512/welkor"
        }
      ],
      "stageSummary": "과거에 검토하거나 만들었던 실험을 보관합니다. 현재 주력 프로젝트와 구분하면서 다음 시도에 쓸 질문을 남깁니다."
    },
    {
      "id": "arc",
      "name": "Adult Running Club",
      "short": "ARC",
      "group": "archive",
      "tag": "Community",
      "repo": "AdultRunningClub",
      "stage": "보관한 실험",
      "lead": "어느 대회에, 누구와 달릴까요?",
      "summary": "초대받은 멤버를 위한 대회 캘린더와 밋업 중심의 러닝 네트워크입니다.",
      "problem": "함께 달릴 사람과 대회 참여 일정을 연결하는 커뮤니티 경험을 탐색했습니다.",
      "approach": "초대코드 기반의 멤버 네트워크에서 대회 캘린더와 동행을 연결하는 방향을 설계했습니다.",
      "features": [
        "대회 캘린더",
        "Who’s Going",
        "Hub 밋업"
      ],
      "flow": [
        "멤버 입장",
        "대회 탐색",
        "참여 확인",
        "밋업"
      ],
      "tech": [
        "JavaScript",
        "PWA",
        "Supabase"
      ],
      "note": "V3와 V2 보존 구조를 확인했습니다. Notion의 기각 분류에 맞춰 보관한 실험으로 표시했습니다.",
      "related": [
        "synergizer",
        "campus"
      ],
      "notionTitle": "AdultRunningClub (ARC)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/38c2ebe9000d81929f86f1bbf0596a57",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/AdultRunningClub/blob/master/README.md",
          "access": "public"
        }
      ],
      "recordCategory": "기각 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "AdultRunningClub",
          "branch": "master",
          "visibility": "public",
          "url": "https://github.com/kgg2512/AdultRunningClub"
        }
      ],
      "stageSummary": "과거에 검토하거나 만들었던 실험을 보관합니다. 현재 주력 프로젝트와 구분하면서 다음 시도에 쓸 질문을 남깁니다."
    },
    {
      "id": "cinderella",
      "name": "Cinderella",
      "short": "Cinderella",
      "group": "product",
      "tag": "P2P × Luxury",
      "repo": "Cinderella",
      "stage": "프로토타입·개발",
      "lead": "소유와 경험 사이를 연결합니다.",
      "summary": "명품을 가진 사람과 필요한 순간 빌리고 싶은 사람을 연결하는 개인 간 대여 프로젝트입니다.",
      "problem": "구매하기에는 부담스럽지만 필요한 순간이 있습니다. 반대로 가진 물건을 자주 쓰지 않는 사람도 있습니다.",
      "approach": "탐색에서 대화, 대여 요청, 전달과 반납까지 이어지는 거래 흐름을 구체화합니다. 제품 화면과 운영·신뢰 설계의 일치를 함께 살펴봅니다.",
      "features": [
        "상품 탐색",
        "대화와 대여 요청",
        "전달·반납 상태 흐름"
      ],
      "flow": [
        "발견",
        "대화·요청",
        "전달",
        "반납"
      ],
      "tech": [
        "Next.js",
        "Supabase",
        "Capacitor"
      ],
      "note": "거래 흐름과 보존된 데모 화면을 확인했습니다. 현재 고객 거래, 매출 또는 품질 보증을 나타내는 자료는 아닙니다.",
      "image": "assets/cinderella-transaction.png",
      "caption": "공개 저장소의 2026년 7월 거래 흐름 데모. 실제 고객의 현재 거래가 아닙니다.",
      "related": [
        "cinderella-demo",
        "myfit",
        "bmd",
        "cinderella2"
      ],
      "featured": true,
      "notionTitle": "신데렐라 (Cinderella)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/38c2ebe9000d81cd94c6f21dd0c857a5",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/Cinderella/blob/master/README.md",
          "access": "public"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": "라이브",
      "repositories": [
        {
          "name": "Cinderella",
          "branch": "master",
          "visibility": "public",
          "url": "https://github.com/kgg2512/Cinderella"
        }
      ],
      "stageSummary": "탐색·대여·전달·반납으로 이어지는 거래 흐름을 구체화하고 있습니다. 신뢰와 운영 정책도 함께 검토하는 개발 프로젝트입니다."
    },
    {
      "id": "ard",
      "name": "ARD",
      "short": "ARD",
      "group": "infra",
      "tag": "AI evaluation",
      "repo": "ARD",
      "stage": "내부 개발 기록",
      "lead": "설치한 것과, 효과가 있는 것은 다릅니다.",
      "summary": "AI 조직과 도구의 역량을 파악하고, 근거로 평가·검증하는 내부 인프라입니다.",
      "problem": "도구나 스킬의 설치 수가 실제 품질 향상을 증명하지는 않습니다.",
      "approach": "파악·학습, 평가·검증, 개선의 세 축을 두고 검증을 통과한 결과만 다음 단계에 반영하는 구조를 다룹니다.",
      "features": [
        "역량 현황 파악",
        "증거 기반 평가",
        "검증 후 개선"
      ],
      "flow": [
        "파악",
        "검증",
        "판단",
        "개선"
      ],
      "tech": [
        "Python",
        "Evaluation",
        "Evidence"
      ],
      "note": "README와 Notion의 구조 설명을 확인했습니다. 모든 자동화가 현재 운영 중이라는 의미로 확대하지 않습니다.",
      "related": [
        "loop",
        "asd",
        "bmd"
      ],
      "featured": true,
      "notionTitle": "ARD (AI Resource Development)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/38f2ebe9000d81be8871e376ea1b8c6a",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/ARD/blob/master/README.md",
          "access": "public"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "ARD",
          "branch": "master",
          "visibility": "public",
          "url": "https://github.com/kgg2512/ARD"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "safe-ai",
      "name": "SAFE-AI",
      "short": "SAFE-AI",
      "group": "archive",
      "tag": "Security tool",
      "repo": "SAFE-AI",
      "stage": "미배포·보관",
      "lead": "AI로 만든 앱도, 실제 코드로 확인합니다.",
      "summary": "코드와 공개 저장소의 보안 실수·코딩 오류를 규칙 기반으로 살펴보는 진단 도구입니다.",
      "problem": "AI로 앱을 빠르게 만들더라도 노출된 키나 인증 누락 같은 문제를 알아차리기 어렵습니다.",
      "approach": "내부 ASD의 스캐너 역량을 외부 진단 도구로 구성합니다. 코드 위치와 근거를 보여주고 수정에 사용할 프롬프트를 제공하는 방향입니다.",
      "features": [
        "클라이언트 정적 분석",
        "문제 위치와 근거",
        "수정 프롬프트"
      ],
      "flow": [
        "코드 입력",
        "규칙 검사",
        "진단 리포트",
        "수정 검토"
      ],
      "tech": [
        "JavaScript",
        "Static analysis",
        "Expo"
      ],
      "note": "README의 초기 설계와 Notion의 이후 v1 기록에 차이가 있습니다. 이를 상용 출시나 서버측 원클릭 패치 완료로 표현하지 않았습니다.",
      "related": [
        "asd",
        "ard",
        "expo"
      ],
      "notionTitle": "SAFE-AI (세이파이)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/39b2ebe9000d8183bbd2d014099caa34",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/SAFE-AI/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "기각 프로젝트",
      "recordStatus": "미배포",
      "repositories": [
        {
          "name": "SAFE-AI",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/SAFE-AI"
        }
      ],
      "stageSummary": "과거에 검토하거나 만들었던 실험을 보관합니다. 현재 주력 프로젝트와 구분하면서 다음 시도에 쓸 질문을 남깁니다."
    },
    {
      "id": "asd",
      "name": "ASD",
      "short": "ASD",
      "group": "infra",
      "tag": "Security R&D",
      "repo": "ASD",
      "stage": "내부 개발 기록",
      "lead": "문제를 재현하고, 방어 지식으로 남깁니다.",
      "summary": "소유한 앱과 훈련용 샘플에서 보안 문제를 연구하고 스캐너 규칙을 축적하는 내부 R&D입니다.",
      "problem": "앱마다 같은 보안 실수가 반복됩니다. 일회성 지적을 재사용 가능한 탐지와 수정 역량으로 바꾸려 합니다.",
      "approach": "허용된 실험 환경에서 재현·방어·자동화를 반복하고, 축적한 규칙을 SAFE-AI 같은 제품의 기반으로 사용합니다.",
      "features": [
        "내부 보안 Lab",
        "탐지 룰과 샘플",
        "수정 역량 연구"
      ],
      "flow": [
        "재현",
        "탐지",
        "방어",
        "규칙 축적"
      ],
      "tech": [
        "Python",
        "SAST",
        "Scanner rules"
      ],
      "note": "내부 연구 프로젝트이며, 제3자 서비스에 대한 무단 실험을 수행하는 기능은 이 홈페이지에 없습니다.",
      "related": [
        "safe-ai",
        "ard"
      ],
      "notionTitle": "ASD (AI Security Development)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/39b2ebe9000d81a5ac06dc3101380186",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/ASD/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "ASD",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/ASD"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "bmd",
      "name": "BMD Validator",
      "short": "BMD",
      "group": "infra",
      "tag": "Business design",
      "repo": "BMD",
      "stage": "내부 도구",
      "lead": "주관적인 확신을, 고객의 증거로.",
      "summary": "사업 아이디어를 단계별 질문과 근거로 검토하는 사업모델 개발 도구입니다.",
      "problem": "그럴듯한 아이디어와 고객이 실제로 필요로 하는 사업은 다를 수 있습니다.",
      "approach": "MIT Disciplined Entrepreneurship의 단계 구조를 참고한 자체 구현으로 고객, 가치, 경제성을 차례로 살펴봅니다.",
      "features": [
        "단계별 사업 가설",
        "근거 유형 구분",
        "부족한 항목 확인"
      ],
      "flow": [
        "가설 작성",
        "근거 구분",
        "단계별 검토",
        "사업모델 수정"
      ],
      "tech": [
        "JavaScript",
        "Local storage",
        "Cloudflare Worker"
      ],
      "note": "자체 도구의 README와 Notion 기록을 대조했습니다. 다른 교육 플랫폼의 사설 화면이나 문구를 복제하지 않았습니다.",
      "related": [
        "cinderella",
        "govfit",
        "loop"
      ],
      "notionTitle": "BMD (Business Model Development)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3a22ebe9000d81698fc7ca130c88d688",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/BMD/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "BMD",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/BMD"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "g2-site",
      "name": "G2 웹사이트",
      "short": "G2 Website",
      "group": "infra",
      "tag": "Company site",
      "repo": "G2",
      "stage": "웹사이트 기록",
      "lead": "프로젝트가 모이는 첫 번째 입구.",
      "summary": "기존 G2 회사 소개와 프로젝트 링크를 모은 정적 웹사이트 기록입니다.",
      "problem": "서로 다른 프로젝트를 한곳에서 소개하고 찾아갈 수 있는 입구가 필요합니다.",
      "approach": "회사 소개와 프로젝트 목록을 정적 페이지로 구성했습니다. 과거 프로젝트 설명과 현재 방향은 구분합니다.",
      "features": [
        "회사 소개",
        "프로젝트 링크",
        "정적 페이지"
      ],
      "flow": [
        "회사 소개",
        "프로젝트 탐색",
        "개별 서비스"
      ],
      "tech": [
        "HTML",
        "GitHub Pages"
      ],
      "note": "2026년 6월 projects.json에는 MyFit의 폐기된 외부 합성 접근이 남아 있어 현재 소개에는 사용하지 않았습니다.",
      "related": [
        "personal-site",
        "g2-ops"
      ],
      "notionTitle": "G2 공식 웹사이트",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3a42ebe9000d81508f4ec3d926527a75",
          "access": "workspace"
        },
        {
          "label": "GitHub 프로젝트 목록",
          "url": "https://github.com/kgg2512/G2/blob/main/projects.json",
          "access": "public"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "라이브",
      "repositories": [
        {
          "name": "G2",
          "branch": "main",
          "visibility": "public",
          "url": "https://github.com/kgg2512/G2"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "govfit",
      "name": "govfit",
      "short": "govfit",
      "group": "infra",
      "tag": "Public affairs",
      "repo": "govfit",
      "stage": "규칙 엔진 개발",
      "lead": "공고의 조건을, 설명할 수 있는 판단으로.",
      "summary": "지원사업 공고의 조건과 법인 프로필을 대조하는 규칙 기반 판정 엔진 실험입니다.",
      "problem": "긴 공고문에서 자격요건을 찾고 개별 조건과 대조하는 데 반복적인 작업이 필요합니다.",
      "approach": "수집·파싱, 판정 엔진, 설계 보조를 구분하고 먼저 조건 대조의 규칙 코어를 구현했습니다.",
      "features": [
        "조건의 구조화",
        "항목별 대조",
        "사유와 근거 표시"
      ],
      "flow": [
        "공고 조건",
        "법인 프로필",
        "규칙 대조",
        "사유 확인"
      ],
      "tech": [
        "Python",
        "Rule engine"
      ],
      "note": "소스의 Phase 0 설명을 확인했습니다. 이 홈페이지는 최신 공고의 자격이나 법적 결론을 판정하지 않습니다.",
      "related": [
        "bmd",
        "g2-ops"
      ],
      "notionTitle": "govfit (정부지원 판정엔진)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3a42ebe9000d8165bf52df1ac09b24e8",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/govfit/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "govfit",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/govfit"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "expo",
      "name": "Expo Store Starter",
      "short": "App Starter",
      "group": "infra",
      "tag": "App foundation",
      "repo": "expo-store-starter",
      "stage": "템플릿 준비",
      "lead": "다음 앱이 같은 준비를 반복하지 않도록.",
      "summary": "Windows에서 모바일 앱을 준비하고 클라우드 빌드로 연결하기 위한 재사용 템플릿입니다.",
      "problem": "제품을 만들 때마다 앱 빌드와 제출 파이프라인의 토대를 다시 준비해야 합니다.",
      "approach": "Expo 앱 구조와 EAS 설정을 미리 구성하고, 실제 제품에 복제·적용하는 방식을 준비했습니다.",
      "features": [
        "앱 기본 구조",
        "클라우드 빌드 프로파일",
        "재사용 가능한 설정"
      ],
      "flow": [
        "템플릿",
        "제품별 적용",
        "빌드 준비",
        "제출 검토"
      ],
      "tech": [
        "Expo",
        "React Native",
        "EAS"
      ],
      "note": "토대와 실제 스토어 제출·심사는 구분됩니다. 계정 연결이나 심사 통과를 주장하지 않습니다.",
      "related": [
        "myfit",
        "safe-ai"
      ],
      "notionTitle": "expo-store-starter (앱 배포 템플릿)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3a42ebe9000d81ae8345d54d4d2eb475",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/expo-store-starter/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "expo-store-starter",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/expo-store-starter"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "loop",
      "name": "G2 Loop & Harness",
      "short": "Loop & Harness",
      "group": "infra",
      "tag": "Agent workflow",
      "repo": "g2-loop-harness",
      "stage": "내부 개발 기록",
      "lead": "반복보다 중요한 것은, 무엇을 통과시키는가.",
      "summary": "AI 작업의 수집·생성 결과를 실제 근거와 대조하는 검증 구조를 다룹니다.",
      "problem": "결과를 만들었다는 설명만으로 작업이 끝났다고 판단하면 잘못된 내용이 반복될 수 있습니다.",
      "approach": "수확한 자료의 쓸모를 거르고, 주장과 검증을 구분해 실제 관측이 있는지 확인하는 하네스를 구성합니다.",
      "features": [
        "자료의 쓸모 확인",
        "주장과 근거 분리",
        "검증 후 다음 단계"
      ],
      "flow": [
        "수집",
        "생성",
        "검증",
        "반영"
      ],
      "tech": [
        "Python",
        "Evidence gates"
      ],
      "note": "README의 내부 검증 설계를 확인했습니다. 홈페이지의 가이드 애니메이션은 이 운영 시스템에 연결되어 있지 않습니다.",
      "related": [
        "ard",
        "asd",
        "bmd",
        "g2-ops"
      ],
      "notionTitle": "G2 Loop & Harness (루프/하네스 증거 엔진)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3a42ebe9000d81f5a3f1d705a917aca9",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/g2-loop-harness/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "g2-loop-harness",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/g2-loop-harness"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "kls",
      "name": "Kang & LeeS Solution",
      "short": "KLS",
      "group": "related",
      "tag": "Related organization",
      "repo": "KangLeeS-Solution",
      "stage": "관련 조직 기록",
      "lead": "서로 다른 조직의 경계를 분명하게.",
      "summary": "별도 조직의 운영 문서와 프로젝트 포인터를 모은 저장소입니다.",
      "problem": "조직이 다르면 자산과 업무의 귀속도 구분되어야 합니다.",
      "approach": "운영 문서와 지정된 프로젝트의 포인터를 별도로 관리하는 구조를 기록했습니다.",
      "features": [
        "운영 문서",
        "프로젝트 포인터",
        "조직 경계"
      ],
      "flow": [
        "조직 구분",
        "운영 기록",
        "프로젝트 연결"
      ],
      "tech": [
        "Documentation"
      ],
      "note": "README는 G2와 별도 조직이라고 명시합니다. Graper Labs 소유 제품으로 합쳐 표시하지 않았습니다.",
      "related": [
        "popup"
      ],
      "notionTitle": "Kang & LeeS Solution 운영 레포",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3ad2ebe9000d8108a41fe9fccfc56463",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/KangLeeS-Solution/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "KangLeeS-Solution",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/KangLeeS-Solution"
        }
      ],
      "stageSummary": "별도 조직의 운영 문서와 프로젝트 포인터를 관리하는 기록입니다. Graper Labs의 제품과 구분해 살펴볼 수 있습니다."
    },
    {
      "id": "cinderella-demo",
      "name": "Cinderella Demo",
      "short": "Cinderella Demo",
      "group": "related",
      "tag": "Demo artifact",
      "repo": "cinderella-demo",
      "stage": "시연용 아티팩트",
      "lead": "실서비스와 분리된, 보여주기 위한 흐름.",
      "summary": "Cinderella의 투자자·심사위원 시연을 위한 별도 데모 저장소입니다.",
      "problem": "데모를 수정하는 일이 실제 서비스의 코드와 데이터에 영향을 주지 않아야 합니다.",
      "approach": "고정된 목업과 화면 흐름을 사용하고 로그인·데이터베이스·결제를 연결하지 않는 시연 모드로 분리했습니다.",
      "features": [
        "고정 목업",
        "거래 화면 시연",
        "백엔드와 분리"
      ],
      "flow": [
        "데모 입장",
        "상품 탐색",
        "미리 구성한 대화",
        "거래 흐름"
      ],
      "tech": [
        "Next.js",
        "Mock data"
      ],
      "note": "독립 제품의 운영 실적이 아니라 Cinderella의 시연 아티팩트입니다.",
      "related": [
        "cinderella"
      ],
      "notionTitle": "신데렐라 투자자 데모 (cinderella-demo)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3ad2ebe9000d811ea171ed4dece2d59f",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/cinderella-demo/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": "라이브",
      "repositories": [
        {
          "name": "cinderella-demo",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/cinderella-demo"
        }
      ],
      "stageSummary": "미리 구성한 화면과 거래 시나리오를 보여주는 별도 시연 아티팩트입니다. 실서비스의 데이터와 분리되어 있습니다."
    },
    {
      "id": "g2-ops",
      "name": "G2 운영 계층",
      "short": "Operations",
      "group": "infra",
      "tag": "Operations",
      "repo": "G2-Company-Ltd",
      "stage": "내부 운영 기록",
      "lead": "제품을 만드는 방식도, 기록으로 남깁니다.",
      "summary": "회사 운영 규칙, 검증 게이트와 감사·실행 기록을 관리하는 운영 저장소입니다.",
      "problem": "제품이 여러 개로 늘어나면 판단과 실행의 맥락이 흩어지기 쉽습니다.",
      "approach": "제품 코드와 운영 계층을 구분하고, 규칙·검증·보고 자료를 한곳에서 관리하는 방식을 기록했습니다.",
      "features": [
        "운영 규칙",
        "검증 게이트",
        "감사와 실행 기록"
      ],
      "flow": [
        "기준",
        "실행",
        "확인",
        "기록"
      ],
      "tech": [
        "Documentation",
        "Python",
        "Automation design"
      ],
      "note": "README의 24시간 자율 운영 문구를 현재 작동 증거로 사용하지 않았습니다. 내부 운영 세부 정보와 자격 증명도 제외했습니다.",
      "related": [
        "loop",
        "ard",
        "g2-site"
      ],
      "notionTitle": "G2 본체 운영 레포 (헌법·게이트·감사)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3ad2ebe9000d814d9b2ce69da840de57",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/G2-Company-Ltd/blob/master/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "내부 프로젝트",
      "recordStatus": "개발 중",
      "repositories": [
        {
          "name": "G2-Company-Ltd",
          "branch": "master",
          "visibility": "private",
          "url": "https://github.com/kgg2512/G2-Company-Ltd"
        }
      ],
      "stageSummary": "제품을 만드는 도구와 기준을 축적하는 내부 프로젝트입니다. 구현된 구조와 이후에 확장할 방향을 함께 기록합니다."
    },
    {
      "id": "pet-care",
      "name": "반려동물 케어 스케줄링",
      "short": "Pet Care",
      "group": "archive",
      "tag": "Care",
      "stage": "기각한 구상",
      "lead": "케어의 시점을 놓치지 않도록.",
      "summary": "병원 방문, 미용과 예방접종 같은 케어 일정을 안내하는 플랫폼 구상이었습니다.",
      "problem": "보호자가 여러 케어 일정을 스스로 챙겨야 한다는 문제에서 출발했습니다.",
      "approach": "일정과 알림을 제안했지만, 기록·알림만으로 독립 사업이 성립하는지 검토한 뒤 기각했습니다.",
      "features": [
        "케어 일정 구상",
        "알림",
        "사업성 검토"
      ],
      "flow": [
        "케어 항목",
        "일정",
        "안내"
      ],
      "note": "발제와 검토 기록이며 코드·저장소는 없습니다.",
      "related": [
        "plants"
      ],
      "notionTitle": "반려동물 케어 스케줄링",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3b02ebe9000d811ba422c242ca2ced97",
          "access": "workspace"
        }
      ],
      "recordCategory": "신사업개발",
      "recordStatus": "기각",
      "tech": [],
      "repositories": [],
      "stageSummary": "과거에 검토하거나 만들었던 실험을 보관합니다. 현재 주력 프로젝트와 구분하면서 다음 시도에 쓸 질문을 남깁니다."
    },
    {
      "id": "scent",
      "name": "방한 외국인 향수·핸드크림",
      "short": "Scent & Korea",
      "group": "idea",
      "tag": "Brand × Travel",
      "stage": "보류",
      "lead": "한국에서의 경험을, 향으로 남기는 구상.",
      "summary": "방한 외국인 관광객을 위한 향수·핸드크림 브랜드 아이디어입니다.",
      "problem": "한국 여행객의 소비와 브랜드 경험이라는 시장에서 출발한 구상입니다. 구체적인 고객 문제는 더 정의해야 합니다.",
      "approach": "소프트웨어와 다른 실물 브랜드의 유통·재고·운영 조건을 함께 검토했습니다.",
      "features": [
        "여행객 타깃",
        "실물 브랜드 구상",
        "유통 조건 검토"
      ],
      "flow": [
        "타깃 정의",
        "브랜드 구상",
        "유통 검토"
      ],
      "note": "제품과 유통을 준비한 단계가 아니라 보류한 사업 아이디어입니다.",
      "related": [
        "kpop",
        "mytone"
      ],
      "notionTitle": "방한 외국인 향수·핸드크림",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3b02ebe9000d8152bb36f23f796f7e19",
          "access": "workspace"
        }
      ],
      "recordCategory": "신사업개발",
      "recordStatus": "보류",
      "tech": [],
      "repositories": [],
      "stageSummary": "문제와 사업의 조건을 좁혀가는 탐색 단계입니다. 구체적인 고객과 실행 방식은 더 확인해야 합니다."
    },
    {
      "id": "investment",
      "name": "비상장기업 투자",
      "short": "Startup Capital",
      "group": "idea",
      "tag": "Business exploration",
      "stage": "검토 중인 구상",
      "lead": "초기기업과 작은 자금이 만나는 경로.",
      "summary": "자금이 필요한 초기기업과 개인·소규모 출자자를 연결하는 사업 방향을 검토한 기록입니다.",
      "problem": "초기기업과 개인 자금이 만나는 통로에 대한 질문에서 출발했습니다.",
      "approach": "거래소형 앱을 바로 만드는 대신 투자 업의 형태와 운영 조건을 먼저 검토했습니다.",
      "features": [
        "대상 고객 탐색",
        "사업 형태 검토",
        "운영 조건"
      ],
      "flow": [
        "문제 정의",
        "사업 형태",
        "필요 조건"
      ],
      "note": "소프트웨어 제품이나 실제 투자 모집·운용 서비스가 아닙니다. 법적 요건과 수치를 이 소개에서 확정하지 않습니다.",
      "related": [
        "bmd",
        "patent"
      ],
      "notionTitle": "비상장기업 투자",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3b02ebe9000d81aaa6bccc99c9224a40",
          "access": "workspace"
        }
      ],
      "recordCategory": "신사업개발",
      "recordStatus": "스크리닝",
      "tech": [],
      "repositories": [],
      "stageSummary": "문제와 사업의 조건을 좁혀가는 탐색 단계입니다. 구체적인 고객과 실행 방식은 더 확인해야 합니다."
    },
    {
      "id": "chamyeon",
      "name": "참연",
      "short": "참연",
      "group": "archive",
      "tag": "Trust × Relationships",
      "stage": "보류",
      "lead": "만남 이후의 신뢰를 묻습니다.",
      "summary": "소개팅이나 결혼정보회사 만남 뒤, 서로 밝힌 정보가 맞는지 확인하는 사후 검증 서비스 구상입니다.",
      "problem": "만남 전에 제시한 정보와 실제 경험 사이의 신뢰 문제에 주목했습니다.",
      "approach": "매칭 자체와 사후 확인을 구분하고, 사후 검증만으로 독립적인 제품이 될 수 있는지 검토했습니다.",
      "features": [
        "만남 이후의 피드백",
        "상호 확인 구상",
        "신뢰 문제 탐색"
      ],
      "flow": [
        "만남",
        "상호 확인",
        "신뢰 정보"
      ],
      "note": "발제와 1차 검토 단계이며 구현된 매칭 서비스가 아닙니다.",
      "related": [
        "campus"
      ],
      "notionTitle": "참연",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3b02ebe9000d81c3a4a5ce885523ed07",
          "access": "workspace"
        }
      ],
      "recordCategory": "기각 프로젝트",
      "recordStatus": "보류",
      "tech": [],
      "repositories": [],
      "stageSummary": "과거에 검토하거나 만들었던 실험을 보관합니다. 현재 주력 프로젝트와 구분하면서 다음 시도에 쓸 질문을 남깁니다."
    },
    {
      "id": "plants",
      "name": "식물 구독 서비스",
      "short": "Plant Subscription",
      "group": "archive",
      "tag": "Subscription",
      "stage": "기각한 구상",
      "lead": "정기배송이, 다시 필요한 이유가 될까요?",
      "summary": "반려식물과 화분을 정기 배송하는 구독 아이디어를 검토한 기록입니다.",
      "problem": "구독 방식 자체가 반복 구매의 동기를 만들 수 있는지 질문했습니다.",
      "approach": "정기배송의 가치와 생물 물류의 부담을 함께 검토한 뒤 기각했습니다.",
      "features": [
        "구독 모델 검토",
        "반복 구매 동기",
        "물류 조건"
      ],
      "flow": [
        "구상",
        "수요 검토",
        "운영 조건"
      ],
      "note": "코드나 운영 서비스 없이 남은 아이디어 검토 기록입니다.",
      "related": [
        "pet-care",
        "bmd"
      ],
      "notionTitle": "식물 구독 서비스",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3b02ebe9000d81cebeeaec7f32fb3bc3",
          "access": "workspace"
        }
      ],
      "recordCategory": "신사업개발",
      "recordStatus": "기각",
      "tech": [],
      "repositories": [],
      "stageSummary": "과거에 검토하거나 만들었던 실험을 보관합니다. 현재 주력 프로젝트와 구분하면서 다음 시도에 쓸 질문을 남깁니다."
    },
    {
      "id": "used-price",
      "name": "중고 가격비대칭 해소",
      "short": "Resale Signals",
      "group": "idea",
      "tag": "Market intelligence",
      "stage": "카테고리 탐색",
      "lead": "같은 물건의 가격이 다른 이유.",
      "summary": "중고 제품의 시세와 상태 등급을 표준화할 수 있는 카테고리를 찾는 구상입니다.",
      "problem": "동일 모델도 판매자에 따라 가격과 상태 설명이 달라 비교하기 어렵습니다.",
      "approach": "등급 표준화, 가격 차이, 단가와 거래 빈도 등을 기준으로 카테고리를 좁히는 방식입니다.",
      "features": [
        "시세 비교",
        "상태 등급 구상",
        "카테고리 선별"
      ],
      "flow": [
        "카테고리",
        "상태 기준",
        "가격 비교",
        "검토"
      ],
      "note": "카테고리 선정과 검토 단계입니다. 자동 시세 서비스가 구현되었다고 표시하지 않았습니다.",
      "related": [
        "cinderella",
        "bmd"
      ],
      "notionTitle": "중고 가격비대칭 해소",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3b02ebe9000d81d0bbb6eb945c41359b",
          "access": "workspace"
        }
      ],
      "recordCategory": "신사업개발",
      "recordStatus": "스크리닝",
      "tech": [],
      "repositories": [],
      "stageSummary": "문제와 사업의 조건을 좁혀가는 탐색 단계입니다. 구체적인 고객과 실행 방식은 더 확인해야 합니다."
    },
    {
      "id": "patent",
      "name": "미유통 특허 유통",
      "short": "Patent Bridge",
      "group": "idea",
      "tag": "Knowledge × Business",
      "stage": "문제 탐색",
      "lead": "쓰이지 않는 기술과, 필요한 기업 사이.",
      "summary": "활용되지 않는 특허의 발굴·매칭 문제를 좁혀보는 사업 구상입니다.",
      "problem": "등록된 기술이 실제 수요 기업과 만나지 못하는 원인이 무엇인지 살펴봅니다.",
      "approach": "매물 발굴, 가치평가, 자금 문제를 구분하고 어떤 공백을 다룰지 먼저 탐색했습니다.",
      "features": [
        "원인 분해",
        "수요·기술 매칭 구상",
        "기존 업무 조사"
      ],
      "flow": [
        "특허 정보",
        "수요 문제",
        "매칭 가능성"
      ],
      "note": "아이디어와 탐색 기록이며 현재 기술거래나 평가 서비스를 운영하는 것은 아닙니다.",
      "related": [
        "education",
        "investment"
      ],
      "notionTitle": "미유통 특허 유통",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3b02ebe9000d81f7ae77e70c5158ed4a",
          "access": "workspace"
        }
      ],
      "recordCategory": "신사업개발",
      "recordStatus": "스크리닝",
      "tech": [],
      "repositories": [],
      "stageSummary": "문제와 사업의 조건을 좁혀가는 탐색 단계입니다. 구체적인 고객과 실행 방식은 더 확인해야 합니다."
    },
    {
      "id": "popup",
      "name": "PopUp-Pass",
      "short": "PopUp-Pass",
      "group": "related",
      "tag": "Experience platform",
      "stage": "기획안",
      "lead": "팝업을 찾는 순간부터, 방문하는 순간까지.",
      "summary": "팝업스토어의 정보·후기·웨이팅 경험을 소비자 관점에서 연결하는 플랫폼 구상입니다.",
      "problem": "정보가 흩어져 있고, 실제로 방문했을 때의 경험을 미리 파악하기 어렵습니다.",
      "approach": "무료 정보 탐색, 실방문 후기와 코스 경험, 향후 웨이팅·예약으로 이어지는 구조를 기획했습니다.",
      "features": [
        "팝업 정보",
        "방문 후기 구상",
        "웨이팅·예약 방향"
      ],
      "flow": [
        "발견",
        "방문 계획",
        "현장 경험",
        "후기"
      ],
      "note": "Notion 본문은 KLS 관련 기획안으로 설명합니다. DB의 Graper Labs 속성과 차이가 있어 관련 프로젝트로 구분했습니다.",
      "related": [
        "kls",
        "kpop"
      ],
      "notionTitle": "팝업패스 (PopUp-Pass)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3c02ebe9000d813e9427c1b317b9f2de",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": "발제",
      "tech": [],
      "repositories": [],
      "stageSummary": "정보·방문·후기로 이어지는 소비자 경험을 담은 관련 조직의 사업 기획안입니다."
    },
    {
      "id": "cinderella2",
      "name": "Cinderella 2",
      "short": "Cinderella 2",
      "group": "product",
      "tag": "Wedding × Direct",
      "repo": "cinderella2",
      "stage": "주제 제안",
      "lead": "플래너 없이, 원하는 드레스샵으로.",
      "summary": "신부가 드레스샵을 찾아 피팅을 예약하고 본식 드레스를 대여하는 B2C 플랫폼 후보입니다.",
      "problem": "신부가 원하는 샵과 드레스를 직접 비교하고 선택하는 과정에 주목했습니다.",
      "approach": "샵 탐색·피팅 예약·대여를 연결하고, MyFit의 치수 기반 핏 안내를 활용하는 가능성을 제안했습니다.",
      "features": [
        "드레스샵 탐색",
        "피팅 예약 구상",
        "치수 기반 안내 방향"
      ],
      "flow": [
        "샵 비교",
        "피팅 예약",
        "드레스 선택",
        "본식 대여"
      ],
      "note": "GitHub README는 2026년 가을 수업의 주제 후보·팀 합의 전 제안으로 설명합니다. 현재 팀의 소개팅 앱과 같은 프로젝트로 합치지 않았습니다.",
      "related": [
        "myfit",
        "cinderella",
        "course-hub"
      ],
      "notionTitle": "신데렐라2 (웨딩드레스, 한복, 수영복)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3c52ebe9000d802dbd62c0a91b648a7f",
          "access": "workspace"
        },
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/cinderella2/blob/main/README.md",
          "access": "private"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": null,
      "tech": [],
      "repositories": [
        {
          "name": "cinderella2",
          "branch": "main",
          "visibility": "private",
          "url": "https://github.com/kgg2512/cinderella2"
        }
      ],
      "stageSummary": "수업에서 논의하기 위해 작성한 주제 후보입니다. 제안의 가설과 팀의 최종 프로젝트는 구분합니다."
    },
    {
      "id": "kpop",
      "name": "KPOP-PASS",
      "short": "KPOP-PASS",
      "group": "product",
      "tag": "Travel × Culture",
      "stage": "사업 기획",
      "lead": "정보를, 실제 방문과 경험으로.",
      "summary": "방한 외국인에게 언어와 맥락에 맞는 정보, 방문 인증과 리워드를 제공하는 여행 플랫폼 구상입니다.",
      "problem": "자신의 언어로 정보를 찾고 실제 방문까지 연결하는 과정이 매끄럽지 않을 수 있습니다.",
      "approach": "출신지·언어 기반 정보와 방문 인증·리워드를 하나의 흐름으로 기획합니다.",
      "features": [
        "언어별 정보",
        "방문 인증 구상",
        "경험과 리워드"
      ],
      "flow": [
        "정보 발견",
        "방문",
        "인증",
        "리워드"
      ],
      "note": "사업 기획 자료를 바탕으로 구성했습니다. 별도 저장소나 출시된 앱을 확인한 것으로 표시하지 않았습니다.",
      "related": [
        "popup",
        "welkor",
        "scent"
      ],
      "featured": true,
      "notionTitle": "케이팝패스 (KPOP-PASS)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3ca2ebe9000d81a2888cf68dc7ac96d4",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": "발제",
      "tech": [],
      "repositories": [],
      "stageSummary": "대상 고객과 정보·방문 인증·리워드 구조를 구체화하는 사업 기획 단계입니다."
    },
    {
      "id": "campus",
      "name": "캠퍼스 통합 네트워크",
      "short": "Campus Network",
      "group": "product",
      "tag": "Community",
      "stage": "초기 구상",
      "lead": "학부생부터 졸업생까지, 끊기지 않는 연결.",
      "summary": "학부생·석박사생·졸업생을 연결하는 통합 네트워킹 커뮤니티 아이디어입니다.",
      "problem": "학적 단계가 바뀌어도 이어질 수 있는 네트워크의 가능성을 탐색합니다.",
      "approach": "학부생, 대학원생, 졸업생을 연결하는 커뮤니티를 구상합니다. 구체적인 참여 방식과 기능은 아직 정하지 않았습니다.",
      "features": [
        "학부생",
        "석박사생",
        "졸업생 연결"
      ],
      "flow": [
        "대상 집단",
        "네트워크 구상",
        "요구사항 탐색"
      ],
      "note": "원제는 “(가칭) 에브리타임+김박사넷”입니다. 기존 서비스의 기능을 구현하거나 연동했다는 뜻은 아닙니다.",
      "related": [
        "arc",
        "synergizer",
        "education"
      ],
      "notionTitle": "(가칭) 에브리타임+김박사넷",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3cd2ebe9000d80b4915ed15d4e39fd89",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": null,
      "tech": [],
      "repositories": [],
      "stageSummary": "연결하고 싶은 대상 집단을 정리한 초기 구상입니다. 구체적인 참여 흐름과 기능은 다음 질문으로 남아 있습니다."
    },
    {
      "id": "synergizer",
      "name": "Synergizer",
      "short": "Synergizer",
      "group": "product",
      "tag": "Co-focus",
      "stage": "서비스 구상",
      "lead": "함께 있을 때 시작되는 집중.",
      "summary": "공개 집중 공간, 얼굴을 대신하는 AI 아바타와 타이머를 결합한 서비스 구상입니다.",
      "problem": "혼자 집중을 시작하기 어렵고, 얼굴과 공간을 드러내는 화상 연결도 부담이 될 수 있습니다.",
      "approach": "조용히 함께 공부하고 일하는 감각을 주는 참여 흐름과 아바타 방식을 탐색합니다.",
      "features": [
        "공개 집중 공간",
        "AI 아바타 구상",
        "집중 타이머"
      ],
      "flow": [
        "공간 참여",
        "아바타",
        "집중 세션",
        "함께 마무리"
      ],
      "note": "현재 확인한 것은 서비스 아이디어와 참여 흐름입니다. 실시간 아바타와 운영 중인 집중방을 주장하지 않습니다.",
      "related": [
        "campus",
        "arc"
      ],
      "featured": true,
      "notionTitle": "시너자이저(시너지+에너자이저)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3d82ebe9000d80469bb5e87ed71c0ed7",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": null,
      "tech": [],
      "repositories": [],
      "stageSummary": "집중 공간에 참여하는 흐름과 아바타 표현 방식을 탐색하고 있습니다."
    },
    {
      "id": "classical",
      "name": "클래식 뮤직 브런치·서퍼",
      "short": "Music & Brunch",
      "group": "product",
      "tag": "Offline experience",
      "stage": "아이디어 기록",
      "lead": "음악과 식사가 만나는 경험.",
      "summary": "호텔 행사를 중심으로 등록된 클래식 음악 브런치·서퍼 아이디어입니다.",
      "problem": "음악과 식사를 함께 즐기는 경험을 탐색합니다. 어떤 고객을 위한 행사인지부터 구체화할 단계입니다.",
      "approach": "클래식 음악과 식사를 엮는 호텔 행사 경험을 구상했습니다. 세부 프로그램과 협력 장소는 아직 정해지지 않았습니다.",
      "features": [
        "클래식 음악",
        "브런치·서퍼",
        "호텔 행사 구상"
      ],
      "flow": [
        "행사 구상",
        "대상 정의",
        "프로그램 검토"
      ],
      "note": "본문이 비어 있는 초기 기록입니다. 공연·장소·파트너가 확정된 행사로 표현하지 않았습니다.",
      "related": [
        "popup"
      ],
      "notionTitle": "클래식 뮤직 브런치/서퍼",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3d82ebe9000d804989d6cc57b13c560d",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": null,
      "tech": [],
      "repositories": [],
      "stageSummary": "호텔 행사라는 방향을 기록한 초기 구상입니다. 대상과 프로그램은 아직 정해지지 않았습니다."
    },
    {
      "id": "funeral",
      "name": "장례식장 플랫폼",
      "short": "Funeral Care",
      "group": "product",
      "tag": "Life services",
      "stage": "아이디어 기록",
      "lead": "비교하기 어려운 선택에 필요한 정보.",
      "summary": "장례식장을 미리 비교하고 비용을 살펴보는 플랫폼 아이디어입니다.",
      "problem": "장례식장을 미리 비교하고 비용을 살펴볼 수 있는 정보에 주목했습니다.",
      "approach": "구체적인 비교 항목, 정보 수집 방식과 서비스 범위는 아직 정의되지 않았습니다.",
      "features": [
        "사전 비교 구상",
        "비용 정보 방향",
        "서비스 범위 탐색"
      ],
      "flow": [
        "필요 정보",
        "비교 기준",
        "서비스 정의"
      ],
      "note": "제목과 한 줄 소개만 있는 기록입니다. 현재 시설 데이터나 예약 기능이 있는 서비스가 아닙니다.",
      "related": [
        "bmd"
      ],
      "notionTitle": "장례식장 플랫폼",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3d82ebe9000d807a8b5fd13a8a16a513",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": null,
      "tech": [],
      "repositories": [],
      "stageSummary": "사전 비교라는 방향을 적어둔 초기 구상입니다. 비교 기준과 서비스 범위는 더 정의해야 합니다."
    },
    {
      "id": "education",
      "name": "교육 온톨로지",
      "short": "Learning Graph",
      "group": "product",
      "tag": "Knowledge design",
      "stage": "아이디어 기록",
      "lead": "개념 사이의 연결이, 이해를 돕도록.",
      "summary": "온톨로지로 이해를 돕는 교육 경험에 대한 초기 프로젝트 기록입니다.",
      "problem": "온톨로지를 통해 이해를 돕는 방법을 탐색합니다. 대상 학습자와 구체적인 문제는 아직 정의할 단계입니다.",
      "approach": "개념과 관계를 어떤 방식으로 보여줄지 살펴보는 초기 구상입니다. 구현 범위는 아직 정해지지 않았습니다.",
      "features": [
        "개념 연결 방향",
        "이해를 돕는 표현",
        "교육 경험 탐색"
      ],
      "flow": [
        "개념",
        "관계",
        "이해"
      ],
      "note": "Notion 본문은 비어 있습니다. 학습 효과, AI 튜터나 구축된 지식 엔진을 가정하지 않았습니다.",
      "related": [
        "campus",
        "ard",
        "patent"
      ],
      "notionTitle": "교육 온톨로지(이해를 돕는)",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3e02ebe9000d804b94aae85f59941b03",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": null,
      "tech": [],
      "repositories": [],
      "stageSummary": "이해를 돕는 온톨로지라는 질문을 남겨둔 초기 기록입니다. 구체적인 학습 경험과 기능은 다음 탐색 과제입니다."
    },
    {
      "id": "mytone",
      "name": "My Tone",
      "short": "My Tone",
      "group": "product",
      "tag": "Personal style",
      "stage": "발제",
      "lead": "나에게 더 잘 맞는 톤을 찾습니다.",
      "summary": "체형·피부·이미지·헤어스타일을 고려해 화장품과 패션을 추천하는 앱 아이디어입니다.",
      "problem": "하나의 기준만으로 개인에게 맞는 스타일과 색을 선택하기 어렵다는 질문에서 출발합니다.",
      "approach": "다양한 개인 요소를 종합해 톤을 찾고, 그 톤에 맞는 화장품과 패션을 추천하는 방향입니다.",
      "features": [
        "다양한 개인 요소",
        "톤 찾기",
        "화장품·패션 추천 구상"
      ],
      "flow": [
        "개인 요소",
        "톤 탐색",
        "스타일 제안"
      ],
      "note": "향 추천은 원문에서 확장 아이디어로만 언급됩니다. 확정 기능이나 분석 정확도를 주장하지 않았습니다.",
      "related": [
        "myfit",
        "scent"
      ],
      "notionTitle": "마이톤 My Tone",
      "sources": [
        {
          "label": "Notion 프로젝트 기록",
          "url": "https://app.notion.com/3ed2ebe9000d8127b906e05c59ccffd9",
          "access": "workspace"
        }
      ],
      "recordCategory": "메인 프로젝트",
      "recordStatus": "발제",
      "tech": [],
      "repositories": [],
      "stageSummary": "개인에게 맞는 톤과 추천 경험을 탐색하는 발제 단계입니다. 향 추천은 별도의 확장 아이디어입니다."
    },
    {
      "id": "personal-site",
      "name": "Gyunggoo’s Atlas",
      "short": "Personal Atlas",
      "group": "related",
      "tag": "Personal website",
      "stage": "공개 홈페이지",
      "lead": "사람과 프로젝트를 연결하는 개인의 지도.",
      "summary": "본인의 경험과 프로젝트를 서로 연결해 탐색하는 개인 홈페이지입니다.",
      "problem": "나와 프로젝트를 단순한 링크 목록보다 맥락 있게 소개하고 싶었습니다.",
      "approach": "관계도, 전체 목록과 개별 상세 페이지를 같은 자료로 연결합니다.",
      "features": [
        "관계 탐색",
        "프로젝트 상세",
        "개인 소개"
      ],
      "flow": [
        "탐색",
        "연결",
        "상세 기록"
      ],
      "tech": [
        "HTML",
        "CSS",
        "JavaScript",
        "SVG"
      ],
      "note": "GitHub Pages에 공개한 개인 홈페이지입니다. 프로젝트 기록을 바탕으로 관계 지도와 개별 상세 페이지를 구성했습니다.",
      "related": [
        "g2-site",
        "course-hub"
      ],
      "repo": "kgg2512.github.io",
      "repositories": [
        {
          "name": "kgg2512.github.io",
          "branch": "main",
          "visibility": "public",
          "url": "https://github.com/kgg2512/kgg2512.github.io"
        }
      ],
      "sources": [
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/kgg2512.github.io/blob/main/README.md",
          "access": "public"
        }
      ],
      "notionTitle": null,
      "stageSummary": "프로젝트와 생각을 연결해 소개하는 개인 홈페이지입니다. 관계 지도, 프로젝트 목록과 개별 상세 페이지에서 탐색할 수 있습니다."
    },
    {
      "id": "course-hub",
      "name": "KAIST 수업 프로젝트 허브",
      "short": "Course Hub",
      "group": "related",
      "tag": "Learning reference",
      "stage": "수업 저장소 포크",
      "lead": "함께 만드는 수업 프로젝트의 입구.",
      "summary": "KAIST BIZ.69911 수업 프로젝트와 구성원을 연결하는 원본 저장소의 개인 포크입니다.",
      "problem": "수업의 프로젝트와 구성원을 한곳에서 찾아갈 수 있도록 구성된 자료입니다.",
      "approach": "개인이 만든 독립 제품과 구분해 학습·참고 저장소로 표시했습니다.",
      "features": [
        "학기별 프로젝트",
        "구성원 목록",
        "수업 자료 연결"
      ],
      "flow": [
        "학기",
        "프로젝트",
        "구성원"
      ],
      "tech": [
        "Markdown",
        "GitHub"
      ],
      "note": "수업 허브 원작자의 작업을 본인의 제품으로 주장하지 않습니다.",
      "related": [
        "cinderella2",
        "personal-site"
      ],
      "repo": "kaist.biz.69911.projects",
      "repositories": [
        {
          "name": "kaist.biz.69911.projects",
          "branch": "main",
          "visibility": "public",
          "url": "https://github.com/kgg2512/kaist.biz.69911.projects"
        }
      ],
      "sources": [
        {
          "label": "GitHub README",
          "url": "https://github.com/kgg2512/kaist.biz.69911.projects/blob/main/README.md",
          "access": "public"
        }
      ],
      "notionTitle": null,
      "stageSummary": "원본 수업 허브를 개인 계정으로 포크한 학습·참고 저장소입니다."
    }
  ],
  "relations": [
    [
      "asd",
      "safe-ai",
      "기반 역량을 제공",
      "Notion·README"
    ],
    [
      "cinderella",
      "cinderella-demo",
      "시연용 데모",
      "Notion·README"
    ],
    [
      "myfit",
      "cinderella2",
      "핏 안내 활용 제안",
      "GitHub 제안 문서"
    ],
    [
      "bmd",
      "cinderella",
      "사업 검토 적용",
      "Notion"
    ],
    [
      "loop",
      "ard",
      "검증 구조 연결",
      "README"
    ],
    [
      "kls",
      "popup",
      "관련 조직의 기획",
      "Notion 본문"
    ],
    [
      "myfit",
      "expo",
      "앱 기반 적용 방향",
      "README"
    ],
    [
      "g2coin",
      "myfit",
      "리워드 대상 구상",
      "Notion"
    ],
    [
      "g2coin",
      "cinderella",
      "리워드 대상 구상",
      "Notion"
    ],
    [
      "g2coin",
      "arc",
      "리워드 대상 구상",
      "Notion"
    ],
    [
      "g2coin",
      "fate",
      "리워드 대상 구상",
      "Notion"
    ]
  ],
  "profile": {
    "name": "강경구",
    "en": "Kang Gyunggoo",
    "role": "Founder, Graper Labs",
    "summary": "사람과 데이터, 서비스를 연결해 새로운 가능성을 만듭니다. 공공기관에서 쌓은 기획·재무 경험을 바탕으로 AI와 함께 제품을 만들고 있습니다.",
    "quote": "실패를 두려워하지 않고, 함께 배우고 성장하고 나누고 싶습니다.",
    "journey": [
      {
        "title": "서울대학교",
        "subtitle": "Manager · 2019–2026",
        "body": "재무·회계, 기획·전략, 기금·예산과 인사 업무를 경험했습니다."
      },
      {
        "title": "KAIST PMBA",
        "subtitle": "13기",
        "body": "경험을 경영의 언어로 다시 살펴보고, 배움을 제품을 만드는 실험으로 연결합니다."
      },
      {
        "title": "Graper Labs",
        "subtitle": "Founder",
        "body": "Grape + Maker + Laboratory. 하나의 제품이 다음 연결로 이어지는 실험실을 만듭니다."
      }
    ]
  }
};
