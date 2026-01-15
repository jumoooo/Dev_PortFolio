# Vue3 Firebase 게시판 프로젝트

Vue 3 Composition API와 Quasar Framework를 사용한 게시판 중심의 개인 포트폴리오 웹 애플리케이션입니다.

**배포 주소**: [https://thehamo.com](https://thehamo.com)

---

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [페이지 구조](#페이지-구조)
- [컴포넌트 아키텍처](#컴포넌트-아키텍처)
- [테스트](#테스트)
- [성능 최적화](#성능-최적화)
- [설치 및 실행](#설치-및-실행)

---

## 프로젝트 소개

게시판 기능을 중심으로 한 개인 포트폴리오 웹 애플리케이션입니다.

### 주요 특징

- Vue 3 Composition API 기반 SPA
- Quasar Framework UI 컴포넌트 사용
- Firebase Firestore 데이터베이스 연동
- Algolia 검색 엔진 통합
- Vue I18n 다국어 지원 (한글/영어)
- 반응형 레이아웃 구현
- Vitest 테스트 환경 구축 (30개 테스트)

---

## 주요 기능

### 게시판

- 게시글 작성/수정/삭제
- 카테고리 분류 (QnA, 커뮤니티, 공지사항)
- 태그 기반 필터링 (다중 선택)
- Tiptap 에디터 (이미지, 링크 삽입)
- 댓글 작성 및 삭제
- 정렬 (최신순/조회순/좋아요순)

### 사용자

- Firebase Authentication (이메일/비밀번호)
- 회원가입 및 이메일 인증
- 비밀번호 찾기
- 프로필 수정 (닉네임, 이메일, 아바타)
- 좋아요/북마크
- 마이페이지 (프로필, 북마크, 설정)

### 검색

- Algolia 검색 엔진 연동
- 카테고리별 필터링
- 태그 조합 검색

### 기타

- Intersection Observer 무한 스크롤
- 모바일/태블릿/데스크톱 반응형
- i18n 다국어 (한글/영어)

---

## 기술 스택

### Frontend

- Vue 3.3.4 (Composition API)
- Quasar Framework 2.12.0
- Pinia (상태 관리)
- Vue Router (파일 기반 자동 라우팅 - unplugin-vue-router)
- Vue I18n (다국어)
- Tiptap 2.11.5 (에디터)
- VueUse 13.0.0

### Backend & Services

- Firebase 11.4.0
  - Authentication (사용자 인증)
  - Firestore (데이터베이스)
  - Storage (이미지 업로드)
  - Hosting (배포)
- Algolia 5.23.0 (검색)

### Development & Testing

- Vitest 2.1.9 (테스트)
- @vue/test-utils 2.4.6
- ESLint 8.42.0
- Prettier 2.8.8

---

## 페이지 구조

### 파일 기반 자동 라우팅

`unplugin-vue-router`를 사용하여 `src/pages/` 폴더 구조가 자동으로 라우트로 변환됩니다.

```
src/pages/
├── index.vue              → /              (홈: 게시판)
├── about.vue              → /about         (소개: 포트폴리오)
├── mypage.vue             → /mypage        (마이페이지)
│   ├── profile.vue        → /mypage/profile
│   ├── password.vue       → /mypage/password
│   └── bookmark.vue       → /mypage/bookmark
├── posts/
│   └── [id]/
│       ├── index.vue      → /posts/:id
│       └── edit.vue       → /posts/:id/edit
├── carrer/
│   └── lisner.vue         → /carrer/lisner (경력 상세)
├── search/
│   └── index.vue          → /search        (검색)
└── [...path].vue          → /*             (404)
```

### 주요 페이지

| 경로              | 설명                              |
| ----------------- | --------------------------------- |
| `/`               | 게시판 메인 (게시글 목록, 필터링) |
| `/about`          | 포트폴리오 (소개, 경력, 프로젝트) |
| `/posts/:id`      | 게시글 상세                       |
| `/posts/:id/edit` | 게시글 수정                       |
| `/search`         | 검색                              |
| `/mypage`         | 마이페이지 (프로필, 북마크, 설정) |
| `/carrer/lisner`  | 회사 경력 상세                    |

---

## 컴포넌트 아키텍처

### 재사용 가능한 컴포넌트

#### Base Components

```
src/components/base/
├── BaseCard.vue               # 기본 카드 래퍼
└── SettingFormCard.vue        # 설정 폼 카드 (제목, 입력, 저장)
```

#### Layout Components

```
src/components/layout/
├── SidebarMenu.vue            # 사이드바 네비게이션 메뉴
└── ThreeColumnLayout.vue      # 3단 레이아웃 (Left-Center-Right)
```

#### App Components

```
src/components/
├── apps/
│   ├── post/
│   │   ├── PostList.vue       # 게시글 목록
│   │   ├── PostItem.vue       # 게시글 아이템
│   │   ├── PostForm.vue       # 게시글 폼
│   │   ├── PostIcon.vue       # 게시글 아이콘
│   │   └── PostWriteDialog.vue # 글쓰기 다이얼로그
│   └── comment/
│       ├── CommentList.vue    # 댓글 목록
│       └── CommentItem.vue    # 댓글 아이템
├── auth/
│   ├── AuthDialog.vue         # 인증 다이얼로그
│   ├── SignInForm.vue         # 로그인 폼
│   ├── SignUpForm.vue         # 회원가입 폼
│   └── FindPasswordForm.vue   # 비밀번호 찾기
└── tiptap/
    ├── TiptapEditor.vue       # 리치 텍스트 에디터
    └── TiptapViewer.vue       # 뷰어
```

### 컴포넌트 설계 원칙

- 단일 책임 원칙 적용
- Base/Layout 컴포넌트로 코드 중복 제거
- Props/Emit 패턴 사용
- Composition API와 composables 활용
- defineAsyncComponent로 지연 로딩

---

## 테스트

### 테스트 환경

- Vitest 2.1.9
- @vue/test-utils 2.4.6
- jsdom 27.4.0

### 테스트 현황

```
총 30개 테스트
├── Composables: 9개
├── Utils: 13개
├── Components: 7개
└── Integration: 1개
```

### 테스트 구조

```
src/__tests__/
├── unit/                      # 단위 테스트
│   ├── composables/           # Composable 테스트
│   │   └── useTag.test.js
│   ├── utils/                 # 유틸리티 함수 테스트
│   │   └── validate-rules.test.js
│   └── components/            # 컴포넌트 테스트
│       └── BaseCard.test.js
└── integration/               # 통합 테스트
    └── example.test.js
```

### 테스트 명령어

```bash
# 전체 테스트 실행
npm run test

# Watch 모드 (개발 중)
npm run test:watch

# UI 모드 (브라우저)
npm run test:ui

# 단위 테스트만
npm run test src/__tests__/unit

# 통합 테스트만
npm run test src/__tests__/integration

# 커버리지 리포트
npm run test:coverage
```

---

## 성능 최적화

### 적용된 최적화 기법

- 파일 기반 라우팅을 통한 자동 코드 분할
- defineAsyncComponent를 활용한 컴포넌트 지연 로딩
- browser-image-resizer로 이미지 리사이징
- Intersection Observer API로 무한 스크롤 구현
- VueUse의 debounce/throttle 활용
- Firestore 인덱스 최적화 및 페이지네이션

---

## 설치 및 실행

### 요구사항

- Node.js 16.x ~ 18.x
- npm >= 6.13.4 또는 yarn >= 1.21.1

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/vue3-firebase-app.git
cd vue3-firebase-app

# 의존성 설치
npm install
# 또는
yarn install
```

### 환경 변수 설정

`.env.example`을 참고하여 `.env` 파일 생성

```bash
# Firebase 설정
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Algolia 설정 (선택사항)
VITE_ALGOLIA_APP_ID=your_algolia_app_id
VITE_ALGOLIA_API_KEY=your_algolia_api_key
```

### 개발 서버 실행

```bash
# 개발 모드 (Hot-reload)
npm run dev
# 또는
quasar dev
```

브라우저에서 http://localhost:9000 접속

### 빌드

```bash
# 프로덕션 빌드
npm run build
# 또는
quasar build
```

### 코드 품질

```bash
# Lint 검사
npm run lint

# Lint 자동 수정
npm run lint -- --fix

# 코드 포맷팅
npm run format
```

---

## 프로젝트 구조

```
vue3-firebase-app/
├── public/                    # 정적 파일
├── src/
│   ├── assets/                # 이미지, 폰트 등
│   ├── boot/                  # Quasar 부트 파일
│   │   ├── firebase.js        # Firebase 초기화
│   │   ├── i18n.js            # 다국어 설정
│   │   └── navigation-guards.js # 라우터 가드
│   ├── components/            # Vue 컴포넌트
│   │   ├── base/              # Base 컴포넌트
│   │   ├── layout/            # Layout 컴포넌트
│   │   ├── apps/              # App 컴포넌트
│   │   ├── auth/              # 인증 관련
│   │   └── tiptap/            # 에디터
│   ├── composables/           # Composition API
│   │   ├── useBookmark.js     # 북마크 관리
│   │   ├── useLike.js         # 좋아요 관리
│   │   ├── usePostQuery.js    # 게시글 쿼리
│   │   └── useTag.js          # 태그 관리
│   ├── css/                   # 전역 스타일
│   ├── layouts/               # 페이지 레이아웃
│   ├── pages/                 # 페이지 컴포넌트
│   ├── router/                # 라우터 설정
│   ├── services/              # API 서비스
│   │   ├── auth.js            # 인증 서비스
│   │   ├── post.js            # 게시글 서비스
│   │   ├── comment.js         # 댓글 서비스
│   │   └── user.js            # 사용자 서비스
│   ├── stores/                # Pinia 스토어
│   ├── utils/                 # 유틸리티
│   │   ├── firebase/          # Firebase 유틸
│   │   └── i18n/              # 다국어 사전
│   └── __tests__/             # 테스트
├── .env.example               # 환경 변수 예시
├── quasar.config.js           # Quasar 설정
├── vitest.config.js           # Vitest 설정
└── package.json
```

---

## 주요 기술 결정사항

### 파일 기반 라우팅

- `unplugin-vue-router` 사용
- 파일 시스템 구조가 자동으로 라우트로 변환
- 라우터 설정 파일 불필요, 자동 코드 분할

### 컴포넌트 설계

- Base/Layout 컴포넌트로 코드 재사용
- `BaseCard`, `SettingFormCard`, `SidebarMenu`, `ThreeColumnLayout`

### Firebase

- 백엔드 개발 없이 빠른 프로토타이핑
- Authentication, Firestore, Storage, Hosting 통합

### Algolia

- 전문 검색 엔진 연동
- 실시간 검색 결과 제공

---

---

## 작성자

김준모

- Email: bruce.lean17@gmail.com
- Website: https://thehamo.com
- GitHub: https://github.com/jumoooo
- Notion: https://purple-paint-fa5.notion.site/1cb89dd2fd714917845c3410716b55d7
