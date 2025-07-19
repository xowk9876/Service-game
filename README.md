# Tae_system Portfolio Website

👨‍💻 **IT Server Engineer 개인 포트폴리오** - 깔끔하고 모던한 프로필 웹사이트

## ✨ 주요 기능

### 🎯 프로필 카드
- **깔끔한 프로필 이미지**: 심플하고 우아한 원형 프로필 프레임
- **개인 정보**: IT Server Engineer 직함과 연락처 정보
- **소셜 링크**: Instagram과 GitHub 프로필 연결
- **컬러 팔레트**: 인터랙티브한 색상 테마 변경 기능

### 🎮 레트로 게임 섹션
- **VIEW MORE 버튼**: 클릭 시 게임 섹션 토글
- **EmuOS 연동**: 수천 개의 고전 게임을 무료로 즐길 수 있는 EmuOS 사이트 연결
- **레트로 디자인**: 80-90년대 게임의 향수를 느낄 수 있는 디자인
- **인터랙티브 효과**: 호버 시 화려한 애니메이션과 파티클 효과

### 🎨 고급 UI/UX
- **글래스모피즘**: 반투명 유리 효과로 현대적인 디자인
- **그라데이션 애니메이션**: 다채로운 배경 색상 변화
- **파티클 시스템**: 배경에 떠다니는 파티클 효과
- **부드러운 애니메이션**: CSS3 기반의 자연스러운 전환 효과

## 🚀 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **디자인**: 글래스모피즘, 그라데이션, 파티클 효과
- **애니메이션**: CSS3 Animations, JavaScript
- **폰트**: Google Fonts (Inter)
- **아이콘**: Font Awesome 6.0
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

### 게임 섹션 특징
- **토글 기능**: VIEW MORE 버튼으로 섹션 표시/숨김
- **호버 효과**: 게임 카드 호버 시 3D 변형 효과
- **클릭 애니메이션**: 클릭 시 폭발 효과와 함께 EmuOS로 이동
- **파티클 배경**: 레트로 게임 섹션의 동적 배경 효과

## 🎨 디자인 특징

### 깔끔한 프로필 디자인
```css
.profile-photo {
    border: 4px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### 글래스모피즘 효과
```css
.profile-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
}
```

### 그라데이션 애니메이션
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}
```

### 파티클 시스템
- **배경 파티클**: 20개의 떠다니는 파티클
- **클릭 효과**: 프로필 이미지 클릭 시 폭발 효과
- **게임 카드 효과**: 레트로 게임 카드 클릭 시 특별한 애니메이션

## 📁 파일 구조

```
WebSite/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트 (깔끔한 프로필 디자인)
├── script.js           # JavaScript 기능 (인터랙티브 효과)
├── README.md           # 프로젝트 문서
└── image/
    └── profile.jpg     # 프로필 사진
```

## 🌐 배포

### GitHub Pages 배포 완료 ✅
- **배포 URL**: `https://username.github.io/repository-name/`
- **배포 방식**: GitHub Pages (main 브랜치, root 폴더)
- **자동 배포**: 코드 변경 시 자동으로 사이트 업데이트
- **HTTPS 지원**: 무료 SSL 인증서 제공

### 배포 과정
1. **Git 저장소 생성 및 파일 업로드**
2. **GitHub Pages 설정**: Settings → Pages → Source: Deploy from a branch
3. **브랜치 설정**: main, folder: / (root)
4. **배포 완료**: 몇 분 내에 사이트 활성화

## 🎯 성능 최적화

### JavaScript 최적화
- **이벤트 위임**: 메모리 효율적인 이벤트 처리
- **애니메이션 프레임**: 부드러운 애니메이션 처리
- **디바운싱**: 버튼 클릭 중복 방지

### CSS 최적화
- **GPU 가속**: transform, opacity 애니메이션 활용
- **CSS 변수**: 일관된 색상 및 크기 관리
- **미디어 쿼리**: 반응형 디자인 최적화

## 🔧 개발 환경

### 로컬 개발
1. **Python 웹서버 실행**:
   ```bash
   python -m http.server 8000
   ```

2. **브라우저에서 접속**:
   - `http://localhost:8000`
   - `http://127.0.0.1:8000`

### 프로덕션 환경
- **GitHub Pages**: 자동 배포 및 호스팅
- **CDN**: 전 세계 빠른 접속 속도
- **무료 호스팅**: 비용 없이 안정적인 서비스

## 🎨 인터랙티브 기능

### 프로필 카드
- **호버 효과**: 카드 전체에 부드러운 호버 애니메이션
- **이미지 클릭**: 프로필 이미지 클릭 시 폭발 효과
- **컬러 팔레트**: 색상 원형 클릭 시 배경 색상 변경

### VIEW MORE 버튼
- **토글 기능**: 클릭 시 레트로 게임 섹션 표시/숨김
- **아이콘 회전**: 활성화 시 화살표 아이콘 180도 회전
- **부드러운 전환**: CSS 애니메이션으로 자연스러운 전환

### 레트로 게임 섹션
- **3D 호버 효과**: 카드 호버 시 입체적인 변형
- **클릭 애니메이션**: 클릭 시 폭발 효과와 함께 EmuOS 이동
- **파티클 배경**: 동적인 배경 파티클 효과

## 📞 연락처

- **이메일**: bhd03014@gmail.com
- **인스타그램**: [@tae_system](https://www.instagram.com/tae_system/)
- **GitHub**: [@xowk9876](https://github.com/xowk9876)
- **위치**: South Korea

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**Tae_system** - IT Server Engineer Portfolio  
*깔끔하고 모던한 디자인으로 완성된 개인 포트폴리오*  
*🚀 GitHub Pages로 성공적으로 배포 완료*  
*✨ 최신 업데이트: 깔끔한 프로필 디자인과 GitHub 링크 추가* 