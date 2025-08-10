# Tae_system Portfolio Website

👨‍💻 **IT Server Engineer 개인 포트폴리오** - 깔끔하고 모던한 프로필 웹사이트

## 🔍 SEO 개요 (업데이트)

- **메타 태그 강화**: `description`, `robots`, `author`, `theme-color` 추가
- **소셜 미리보기 최적화**: Open Graph, Twitter Card 메타 태그 추가로 공유 시 썸네일/제목/설명 최적화
- **정규 URL 설정**: `link rel="canonical"` 로 중복 URL 이슈 방지
- **퍼포먼스 향상**: Google Fonts `preconnect`/`dns-prefetch` 적용으로 초기 렌더링 시간 단축
- **구조화 데이터**: JSON-LD `Person` 스키마 추가로 검색엔진 이해도 향상
- **보안/SEO**: 외부 링크에 `rel="noopener noreferrer"` 적용
- **검색 크롤링**: `robots.txt`, `sitemap.xml` 추가

## ✨ 주요 기능

### 🎯 프로필 카드
- **깔끔한 프로필 이미지**: 심플하고 우아한 원형 프로필 프레임
- **개인 정보**: IT Server Engineer 직함과 연락처 정보
- **소셜 링크**: Instagram과 GitHub 프로필 연결 (GitHub 아이콘 SVG 지원)
- **컬러 팔레트**: 인터랙티브한 색상 테마 변경 기능

### 🎮 레트로 게임 섹션
- **VIEW MORE 버튼**: 클릭 시 게임 섹션 토글 (GitHub Pages 호환성 완벽 지원)
- **EMUPEDIA.NET 연동**: 수천 개의 고전 게임을 무료로 즐길 수 있는 EMUPEDIA.NET 베타 EmuOS 연결
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
- **아이콘**: Font Awesome 6.4.0 + SVG Fallback
- **호스팅**: GitHub Pages (무료 배포)
- **GitHub Pages 호환성**: 완벽한 온라인 배포 지원

## 📱 반응형 디자인

- **데스크톱**: 1920px 이상 최적화
- **태블릿**: 768px - 1024px 지원
- **모바일**: 320px - 767px 최적화
- **터치 인터페이스**: 모바일 터치 제스처 지원

## 🎮 레트로 게임 섹션

### EMUPEDIA.NET 베타 EmuOS 고전 게임
- **1000+ 게임**: 다양한 고전 게임 컬렉션
- **무료 플레이**: 별도 설치 없이 브라우저에서 바로 플레이
- **레트로 감성**: 80-90년대 게임의 향수
- **새 탭 열기**: 기존 작업을 방해하지 않는 새 탭 방식
- **베타 버전**: 최신 EmuOS 베타 기능 제공

### 게임 섹션 특징
- **토글 기능**: VIEW MORE 버튼으로 섹션 표시/숨김
- **닫기 버튼**: 우상단 X 버튼으로 섹션 닫기
- **호버 효과**: 게임 카드 호버 시 3D 변형 효과
- **클릭 애니메이션**: 클릭 시 폭발 효과와 함께 EMUPEDIA.NET 베타 EmuOS로 이동
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

### GitHub 아이콘 SVG 지원
```html
<svg class="github-svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
</svg>
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
├── index.html          # 메인 HTML 파일 (GitHub Pages 호환성 완벽 지원)
├── styles.css          # 스타일시트 (깔끔한 프로필 디자인)
├── script.js           # JavaScript 기능 (인터랙티브 효과)
├── README.md           # 프로젝트 문서
└── image/
    └── profile.jpg     # 프로필 사진
```

## 🌐 배포

### GitHub Pages 배포 완료 ✅
- **배포 URL**: `https://xowk9876.github.io/Service-game/`
- **배포 방식**: GitHub Pages (main 브랜치, root 폴더)
- **자동 배포**: 코드 변경 시 자동으로 사이트 업데이트
- **HTTPS 지원**: 무료 SSL 인증서 제공
- **GitHub Pages 호환성**: 완벽한 온라인 작동 보장

### 배포 과정
1. **Git 저장소 생성 및 파일 업로드**
2. **GitHub Pages 설정**: Settings → Pages → Source: Deploy from a branch
3. **브랜치 설정**: main, folder: / (root)
4. **배포 완료**: 몇 분 내에 사이트 활성화

## 🔎 SEO 구성 요소 상세

- **Meta Description**: 사이트 핵심 요약 제공으로 CTR 개선
- **Open Graph/Twitter**: SNS 공유 미리보기 품질 향상
- **Canonical URL**: 동일 컨텐츠의 중복 색인 방지
- **Schema.org (JSON-LD)**: `Person` 타입으로 작성자/프로필 구조화
- **Robots & Sitemap**: 검색 엔진 크롤링/인덱싱 경로 제공

### 파일 위치

```
WebSite/
├── index.html       # SEO 메타/OG/Twitter/JSON-LD/Canonical 반영
├── robots.txt       # 검색 엔진 크롤링 정책
└── sitemap.xml      # 정적 사이트맵
```

### 수동 검증 방법

- 크롬 개발자도구 → Lighthouse → SEO: 점수 확인 및 권장사항 반영
- 페이스북 공유 디버거, 트위터 카드 밸리데이터로 미리보기 확인
- `https://search.google.com/test/rich-results`에서 구조화 데이터 테스트

## 🎯 성능 최적화

### JavaScript 최적화
- **이벤트 위임**: 메모리 효율적인 이벤트 처리
- **애니메이션 프레임**: 부드러운 애니메이션 처리
- **디바운싱**: 버튼 클릭 중복 방지
- **GitHub Pages 호환성**: 온라인 환경 최적화

### CSS 최적화
- **GPU 가속**: transform, opacity 애니메이션 활용
- **CSS 변수**: 일관된 색상 및 크기 관리
- **미디어 쿼리**: 반응형 디자인 최적화
- **SVG 아이콘**: 벡터 기반 아이콘으로 선명한 표시

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
- **CDN**: 전 세계 빠른 접속 속도
- **무료 호스팅**: 비용 없이 안정적인 서비스
- **온라인 호환성**: 모든 브라우저에서 완벽 작동

## 🎨 인터랙티브 기능

### 프로필 카드
- **호버 효과**: 카드 전체에 부드러운 호버 애니메이션
- **이미지 클릭**: 프로필 이미지 클릭 시 폭발 효과
- **컬러 팔레트**: 색상 원형 클릭 시 배경 색상 변경

### 레이아웃 변경 (업데이트)
- **VIEW MORE 버튼 제거**: 게임 섹션은 기본으로 표시됩니다.
- **프로필 바로 하단에 노출**: `🎮 Retro Gaming Experience`가 프로필 카드 아래에 항상 표시됩니다.

### 레트로 게임 섹션
- **3D 호버 효과**: 카드 호버 시 입체적인 변형
- **클릭 애니메이션**: 클릭 시 폭발 효과와 함께 EMUPEDIA.NET 베타 EmuOS 이동
- **파티클 배경**: 동적인 배경 파티클 효과
- **완전한 토글**: 표시/숨김 기능 완벽 구현

## 🔧 최신 업데이트

### EMUPEDIA.NET 베타 EmuOS 연동 ✅
- **게임 플랫폼 변경**: EmuOS → EMUPEDIA.NET 베타 EmuOS
- **URL 업데이트**: `https://emupedia.net/beta/emuos/`로 연결
- **베타 기능**: 최신 EmuOS 베타 버전 기능 제공

### GitHub 아이콘 문제 해결 ✅
- **Font Awesome 업데이트**: 6.0.0 → 6.4.0
- **SVG 대체 아이콘**: Font Awesome 로드 실패 시 SVG 아이콘 표시
- **가시성 개선**: 흰색 아이콘으로 명확한 표시

### VIEW MORE 버튼 문제 해결 ✅
- **GitHub Pages 호환성**: 온라인 환경에서 완벽 작동
- **이벤트 충돌 해결**: JavaScript 이벤트 중복 문제 완전 해결
- **토글 기능 완성**: 게임 섹션 표시/숨김 완벽 구현

### 코드 최적화 ✅
- **불필요한 코드 제거**: 중복 함수 및 이벤트 리스너 정리
- **에러 처리 강화**: try-catch로 모든 예외 상황 대응
- **성능 향상**: 메모리 효율적인 코드 구조

## 📞 연락처

- **이메일**: bhd03014@gmail.com
- **인스타그램**: [@tae_system](https://www.instagram.com/tae_system/)
- **GitHub**: [@xowk9876](https://github.com/xowk9876)
- **위치**: South Korea

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**Tae_system** - IT Server Engineer Portfolio  
*✨ 최신 업데이트: EMUPEDIA.NET 베타 EmuOS 연동 및 VIEW MORE 버튼 완벽 작동*  
*🌐 온라인 호환성: 로컬과 GitHub Pages 모두에서 완벽 작동* 