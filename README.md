# Tae_system Portfolio Website

🎮 **레트로 게임 포트폴리오 웹사이트** - IT Server Engineer의 개인 포트폴리오

## ✨ 주요 기능

### 🎯 레트로 게임 경험
- **EmuOS 연동**: 수천 개의 고전 게임을 무료로 즐길 수 있는 EmuOS 사이트 연결
- **글래스모피즘 디자인**: 현대적인 UI와 레트로 감성의 조화
- **파티클 효과**: 클릭 시 화려한 파티클 애니메이션
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험

### 📸 프로필 편집 시스템
- **관리자 인증**: 보안을 위한 비밀번호 기반 인증
- **사진 업로드**: 드래그 앤 드롭으로 간편한 사진 업로드
- **이미지 편집**: 회전, 밝기, 대비 조절 기능
- **실시간 미리보기**: 편집 결과를 즉시 확인

### 🎨 고급 UI/UX
- **글래스모피즘**: 반투명 유리 효과로 현대적인 디자인
- **그라데이션 애니메이션**: 다채로운 색상 변화
- **파티클 시스템**: 배경에 떠다니는 파티클 효과
- **부드러운 애니메이션**: CSS3 기반의 자연스러운 전환 효과

## 🚀 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **디자인**: 글래스모피즘, 그라데이션, 파티클 효과
- **애니메이션**: CSS3 Animations, JavaScript
- **보안**: 관리자 인증 시스템
- **호스팅**: GitHub Pages (무료 배포)

## 📱 반응형 디자인

- **데스크톱**: 1920px 이상 최적화
- **태블릿**: 768px - 1024px 지원
- **모바일**: 320px - 767px 최적화
- **터치 인터페이스**: 모바일 터치 제스처 지원

## 🎮 레트로 게임 섹션

### EmuOS 고전 게임
- **1000+ 게임**: 다양한 고전 게임 컬렉션
- **무료 플레이**: 별도 설치 없이 브라우저에서 바로 플레이
- **레트로 감성**: 80-90년대 게임의 향수
- **새 탭 열기**: 기존 작업을 방해하지 않는 새 탭 방식

## 🔧 프로필 편집 기능

### 관리자 인증
- **비밀번호 보안**: 관리자만 편집 가능
- **세션 관리**: 30분 자동 만료
- **보안 경고**: 인증 필요성 안내

### 이미지 편집 도구
- **회전**: 0-360도 자유 회전
- **밝기 조절**: 0-200% 범위 조절
- **대비 조절**: 0-200% 범위 조절
- **실시간 미리보기**: 변경사항 즉시 반영

## 🎨 디자인 특징

### 글래스모피즘 효과
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### 그라데이션 애니메이션
```css
background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
background-size: 300% 300%;
animation: rainbowShift 2s ease infinite;
```

### 파티클 시스템
- **배경 파티클**: 50개의 떠다니는 파티클
- **클릭 효과**: 레트로 게임 카드 클릭 시 폭발 효과
- **섹션 전환**: VIEW MORE 버튼 클릭 시 파티클 효과

## 📁 파일 구조

```
WebSite/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 기능
├── README.md           # 프로젝트 문서
├── .gitignore          # Git 제외 파일
└── image/
    └── 프로필.jpg      # 프로필 사진
```

## 🚀 로컬 실행

1. **Python 웹서버 실행**:
   ```bash
   python -m http.server 8000
   ```

2. **브라우저에서 접속**:
   - `http://localhost:8000`
   - `http://192.168.219.110:8000` (네트워크 접속)

## 🌐 배포

### GitHub Pages 배포
1. **Git 저장소 생성**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **GitHub에 푸시**:
   ```bash
   git remote add origin https://github.com/username/repository.git
   git push -u origin main
   ```

3. **GitHub Pages 활성화**:
   - Settings → Pages → Source: Deploy from a branch
   - Branch: main, folder: / (root)

## 🔐 보안 기능

### 관리자 인증
- **비밀번호**: `tae_system_2024` (실제 운영 시 변경 필요)
- **세션 만료**: 30분 후 자동 로그아웃
- **입력 검증**: XSS 방지를 위한 입력 필터링

### 파일 업로드 보안
- **파일 타입 검증**: 이미지 파일만 허용
- **크기 제한**: 브라우저 메모리 제한 내에서 처리
- **로컬 처리**: 서버 업로드 없이 클라이언트에서 처리

## 🎯 성능 최적화

### JavaScript 최적화
- **디바운싱**: 버튼 클릭 중복 방지
- **애니메이션 프레임**: 부드러운 애니메이션 처리
- **이벤트 위임**: 메모리 효율적인 이벤트 처리

### CSS 최적화
- **GPU 가속**: transform, opacity 애니메이션 활용
- **CSS 변수**: 일관된 색상 및 크기 관리
- **미디어 쿼리**: 반응형 디자인 최적화

## 📞 연락처

- **이메일**: bhd03014@gmail.com
- **인스타그램**: [@tae_system](https://www.instagram.com/tae_system/)
- **위치**: South Korea

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**Tae_system** - IT Server Engineer Portfolio  
*레트로 게임과 현대적 디자인의 조화로운 만남* 