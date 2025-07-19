// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 프로필 이미지 클릭 이벤트
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('click', function() {
            createClickEffect(event);
        });
    }

    // VIEW MORE 버튼 토글 기능
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const gameSection = document.getElementById('gameSection');
    
    if (viewMoreBtn && gameSection) {
        viewMoreBtn.addEventListener('click', function() {
            toggleGameSection();
        });
    }

    // 컬러 팔레트 클릭 이벤트
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            changeThemeColor(this);
        });
    });

    // 파티클 효과 생성
    createParticles();

    // 프로필 카드 호버 효과
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        profileCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
});

// 게임 섹션 토글 함수
function toggleGameSection() {
    const gameSection = document.getElementById('gameSection');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    
    if (gameSection && viewMoreBtn) {
        if (gameSection.classList.contains('active')) {
            gameSection.classList.remove('active');
            viewMoreBtn.classList.remove('active');
        } else {
            gameSection.classList.add('active');
            viewMoreBtn.classList.add('active');
        }
    }
}

// EmuOS 게임 플랫폼 열기
function openEmuOS() {
    // 게임 카드 클릭 효과
    const gameCard = event.target.closest('.retro-game-card');
    if (gameCard) {
        createGameCardClickEffect(gameCard, event);
    }

    // EmuOS 플랫폼으로 리다이렉트
    setTimeout(() => {
        window.open('https://xowk9876.github.io/Service-game/', '_blank');
    }, 500);
}

// 클릭 효과 생성
function createClickEffect(event) {
    const clickEffect = document.createElement('div');
    clickEffect.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: explode 0.6s ease-out forwards;
        --direction-x: ${Math.random() > 0.5 ? 1 : -1};
        --direction-y: ${Math.random() > 0.5 ? 1 : -1};
    `;
    
    clickEffect.style.left = (event.clientX - 10) + 'px';
    clickEffect.style.top = (event.clientY - 10) + 'px';
    
    document.body.appendChild(clickEffect);
    
    setTimeout(() => {
        document.body.removeChild(clickEffect);
    }, 600);
}

// 게임 카드 클릭 효과
function createGameCardClickEffect(gameCard, event) {
    const rect = gameCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const clickEffect = document.createElement('div');
    clickEffect.style.cssText = `
        position: absolute;
        width: 30px;
        height: 30px;
        background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        animation: retroClickExplode 0.8s ease-out forwards;
        --direction-x: ${Math.random() > 0.5 ? 1 : -1};
        --direction-y: ${Math.random() > 0.5 ? 1 : -1};
    `;
    
    clickEffect.style.left = x + 'px';
    clickEffect.style.top = y + 'px';
    
    gameCard.appendChild(clickEffect);
    
    setTimeout(() => {
        if (gameCard.contains(clickEffect)) {
            gameCard.removeChild(clickEffect);
        }
    }, 800);
}

// 테마 색상 변경
function changeThemeColor(swatch) {
    const colors = {
        'blue': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'teal': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'pink': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'purple': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    };
    
    const colorClass = Array.from(swatch.classList).find(cls => colors[cls]);
    if (colorClass) {
        // 배경 그라데이션 변경
        document.body.style.background = colors[colorClass];
        
        // 애니메이션 효과
        swatch.style.transform = 'scale(1.3)';
        setTimeout(() => {
            swatch.style.transform = 'scale(1)';
        }, 200);
    }
}



// 파티클 효과 생성
function createParticles() {
    const body = document.body;
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        body.appendChild(particle);
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes explode {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg) translateX(calc(100px * var(--direction-x, 1))) translateY(calc(100px * var(--direction-y, 1)));
            opacity: 0;
        }
    }

    @keyframes retroClickExplode {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg) translateX(calc(60px * var(--direction-x, 1))) translateY(calc(60px * var(--direction-y, 1)));
            opacity: 0;
        }
    }

    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }

    .color-swatch:hover {
        transform: scale(1.2) !important;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .profile-photo:hover {
        transform: scale(1.05) !important;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
        filter: brightness(1.05) !important;
        border-color: rgba(255, 255, 255, 1) !important;
    }

    .retro-game-card:hover {
        transform: translateY(-15px) scale(1.03) !important;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3) !important;
        border-color: rgba(255, 255, 255, 0.4) !important;
    }

    .retro-game-card:hover .retro-game-icon {
        transform: scale(1.1) rotate(5deg) !important;
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4) !important;
    }

    .retro-game-card:hover .retro-cta i {
        transform: translateX(5px) !important;
    }

    .retro-game-card:hover .feature-tag {
        background: rgba(255, 255, 255, 0.3) !important;
        transform: translateY(-2px) !important;
    }

    .retro-game-card:hover .retro-cta {
        background: rgba(255, 255, 255, 0.3) !important;
        transform: translateY(-3px) !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
    }
`;
document.head.appendChild(style);

// 페이지 로드 완료 후 초기화
window.addEventListener('load', function() {
    // 프로필 카드 로딩 애니메이션
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(30px)';
        setTimeout(() => {
            profileCard.style.transition = 'all 0.8s ease';
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 300);
    }

    // 프로필 이미지 로딩 애니메이션
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.style.opacity = '0';
        profilePhoto.style.transform = 'scale(0.8)';
        setTimeout(() => {
            profilePhoto.style.transition = 'all 0.6s ease';
            profilePhoto.style.opacity = '1';
            profilePhoto.style.transform = 'scale(1)';
        }, 500);
    }

    // VIEW MORE 버튼 로딩 애니메이션
    const viewMoreBtn = document.querySelector('.view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.style.opacity = '0';
        viewMoreBtn.style.transform = 'translateY(20px)';
        setTimeout(() => {
            viewMoreBtn.style.transition = 'all 0.6s ease';
            viewMoreBtn.style.opacity = '1';
            viewMoreBtn.style.transform = 'translateY(0)';
        }, 700);
    }
}); 