# 익명 실시간 채팅 배포 가이드

## 🚀 배포 방법

### 1. GitHub Pages (프론트엔드)
- 이 저장소를 GitHub에 푸시
- Settings > Pages에서 GitHub Pages 활성화
- Source를 "Deploy from a branch"로 설정
- Branch를 "main" 또는 "master"로 선택

### 2. WebSocket 서버 호스팅 (백엔드)

#### 옵션 1: Railway (추천)
1. [Railway.app](https://railway.app)에 가입
2. "New Project" > "Deploy from GitHub repo" 선택
3. 이 저장소 선택
4. `chat-server.js`를 메인 파일로 설정
5. 환경변수 설정:
   - `PORT`: 자동 설정됨
6. 배포 후 URL을 `chat.html`의 WebSocket URL로 업데이트

#### 옵션 2: Render
1. [Render.com](https://render.com)에 가입
2. "New Web Service" 선택
3. GitHub 저장소 연결
4. 설정:
   - Build Command: `npm install`
   - Start Command: `node chat-server.js`
5. 배포 후 URL 업데이트

#### 옵션 3: Heroku
1. [Heroku.com](https://heroku.com)에 가입
2. "Create new app" 선택
3. GitHub 연결 후 배포
4. `Procfile` 생성: `web: node chat-server.js`

### 3. WebSocket URL 업데이트

배포된 서버 URL을 `chat.html`에 반영:

```javascript
// chat.html의 connectWebSocket 함수에서
const wsUrl = 'wss://your-deployed-server-url.com';
```

## 📁 파일 구조
```
/
├── index.html          # 메인 페이지
├── chat.html          # 채팅 페이지
├── chat-server.js     # WebSocket 서버
├── package.json       # Node.js 의존성
├── styles.css         # 스타일시트
├── script.js          # 클라이언트 스크립트
└── image/             # 이미지 폴더
```

## 🔧 로컬 테스트
```bash
# 의존성 설치
npm install

# 서버 실행
node chat-server.js

# 브라우저에서 접속
http://localhost:3000
```

## 🌐 배포 후 접속
- 프론트엔드: `https://your-username.github.io/portfolio`
- 채팅: `https://your-username.github.io/portfolio/chat.html`

## ⚠️ 주의사항
- WebSocket 서버는 HTTPS에서만 작동
- 무료 호스팅 서비스는 일정 시간 후 슬립 모드로 전환될 수 있음
- 동시 접속자 수 제한이 있을 수 있음
