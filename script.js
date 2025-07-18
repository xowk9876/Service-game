// 전역 변수 및 성능 최적화
let animationFrameId = null;

// 성능 최적화를 위한 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    addParticleEffects();
});

// 파티클 효과 추가
function addParticleEffects() {
    const body = document.body;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(body);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: float ${10 + Math.random() * 20}s linear infinite;
    `;
    
    container.appendChild(particle);
    
    // 애니메이션 종료 후 파티클 제거 및 재생성
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, 30000);
}

// 레트로 게임 섹션 토글 (성능 최적화)
const toggleGameSection = debounce(function() {
    const gameSection = document.getElementById('gameSection');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    
    gameSection.classList.toggle('active');
    viewMoreBtn.classList.toggle('active');
    
    if (gameSection.classList.contains('active')) {
        viewMoreBtn.innerHTML = '<span>RETRO GAMES</span><i class="fas fa-chevron-up"></i>';
        // 레트로 게임 섹션이 열릴 때 파티클 효과
        createExplosionEffect(gameSection);
    } else {
        viewMoreBtn.innerHTML = '<span>VIEW MORE</span><i class="fas fa-chevron-down"></i>';
    }
}, 100);

// EmuOS 고전 게임 사이트 열기
function openEmuOS() {
    // 클릭 효과 생성
    createRetroClickEffect();
    
    // 잠시 후 새 탭에서 EmuOS 열기
    setTimeout(() => {
        window.open('https://emupedia.net/beta/emuos/', '_blank');
    }, 300);
}

// 레트로 클릭 효과
function createRetroClickEffect() {
    const retroCard = document.querySelector('.retro-game-card');
    const rect = retroCard.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 레트로 스타일 파티클 효과
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'retro-click-particle';
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
            --direction-x: ${Math.cos(i * 30 * Math.PI / 180)};
            --direction-y: ${Math.sin(i * 30 * Math.PI / 180)};
            animation: retroClickExplode ${0.8 + Math.random() * 0.4}s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
    
    // 카드 스케일 효과
    retroCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        retroCard.style.transform = '';
    }, 150);
}

// 폭발 효과 생성
function createExplosionEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
            animation: explode ${1 + Math.random()}s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// 프로필 편집 관련 변수
let profileEditData = {
    rotation: 0,
    brightness: 100,
    contrast: 100,
    originalImage: null
};

// 관리자 인증 관련 변수
let isAdminAuthenticated = false;
const ADMIN_PASSWORD = 'tae_system_2024'; // 실제 운영 시에는 더 복잡한 비밀번호 사용

// 관리자 인증 확인 및 편집기 열기
function checkAdminAndOpenEditor() {
    if (isAdminAuthenticated) {
        openProfileEditor();
    } else {
        openAdminAuth();
    }
}

// 관리자 인증 모달 열기
function openAdminAuth() {
    const modal = document.getElementById('adminAuthModal');
    modal.classList.add('active');
    
    // 비밀번호 입력 필드 포커스
    setTimeout(() => {
        document.getElementById('adminPassword').focus();
    }, 300);
}

// 관리자 인증 모달 닫기
function closeAdminAuth() {
    const modal = document.getElementById('adminAuthModal');
    modal.classList.remove('active');
    
    // 비밀번호 필드 초기화
    document.getElementById('adminPassword').value = '';
}

// 관리자 인증 처리
function authenticateAdmin() {
    const password = document.getElementById('adminPassword').value;
    
    if (password === ADMIN_PASSWORD) {
        isAdminAuthenticated = true;
        closeAdminAuth();
        openProfileEditor();
        showNotification('관리자 인증이 완료되었습니다!', 'success');
        
        // 30분 후 인증 만료
        setTimeout(() => {
            isAdminAuthenticated = false;
            showNotification('관리자 인증이 만료되었습니다.', 'info');
        }, 30 * 60 * 1000);
    } else {
        showNotification('잘못된 비밀번호입니다.', 'error');
        document.getElementById('adminPassword').value = '';
        document.getElementById('adminPassword').focus();
    }
}

// 인증 키보드 이벤트 처리
function handleAuthKeyPress(event) {
    if (event.key === 'Enter') {
        authenticateAdmin();
    } else if (event.key === 'Escape') {
        closeAdminAuth();
    }
}

// 프로필 편집 모달 열기
function openProfileEditor() {
    const modal = document.getElementById('profileEditModal');
    modal.classList.add('active');
    
    // 현재 이미지 상태 저장
    const profilePhoto = document.getElementById('profilePhoto');
    profileEditData.originalImage = profilePhoto.src;
    
    // 편집 도구 초기화
    resetEditTools();
}

// 프로필 편집 모달 닫기
function closeProfileEditor() {
    const modal = document.getElementById('profileEditModal');
    modal.classList.remove('active');
    
    // 편집 도구 숨기기
    document.getElementById('editTools').style.display = 'none';
}

// 사진 업로드
function uploadPhoto() {
    document.getElementById('photoUpload').click();
}

// 사진 업로드 처리
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profilePhoto = document.getElementById('profilePhoto');
            profilePhoto.src = e.target.result;
            profileEditData.originalImage = e.target.result;
            
            // 편집 도구 초기화
            resetEditTools();
            
            // 성공 메시지 표시
            showNotification('사진이 성공적으로 업로드되었습니다!', 'success');
        };
        reader.readAsDataURL(file);
    } else {
        showNotification('올바른 이미지 파일을 선택해주세요.', 'error');
    }
}

// 회전 기능
function rotatePhoto() {
    showEditTools('rotation');
}

// 자르기 기능
function cropPhoto() {
    showNotification('자르기 기능은 곧 추가될 예정입니다!', 'info');
}

// 밝기 조절
function adjustBrightness() {
    showEditTools('brightness');
}

// 대비 조절
function adjustContrast() {
    showEditTools('contrast');
}

// 사진 삭제
function deletePhoto() {
    if (confirm('정말로 현재 프로필 사진을 삭제하시겠습니까?')) {
        const profilePhoto = document.getElementById('profilePhoto');
        profilePhoto.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik03NSAzNUg2NVY0NUg3NVYzNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTc1IDU1SDY1VjY1SDc1VjU1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNNzUgNzVINjVWODVINzVWNzVaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik04NSA0NUg3NVY1NUg4NVY0NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTg1IDY1SDc1Vjc1SDg1VjY1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNODUgODVINzVWOTVIODVWODVaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
        profileEditData.originalImage = profilePhoto.src;
        
        showNotification('프로필 사진이 삭제되었습니다.', 'success');
    }
}

// 편집 도구 표시
function showEditTools(toolType) {
    const editTools = document.getElementById('editTools');
    editTools.style.display = 'block';
    
    // 해당 도구 활성화
    switch(toolType) {
        case 'rotation':
            document.getElementById('rotationSlider').focus();
            break;
        case 'brightness':
            document.getElementById('brightnessSlider').focus();
            break;
        case 'contrast':
            document.getElementById('contrastSlider').focus();
            break;
    }
}

// 회전 업데이트
function updateRotation(value) {
    profileEditData.rotation = parseInt(value);
    document.getElementById('rotationValue').textContent = value + '°';
    applyImageFilters();
}

// 밝기 업데이트
function updateBrightness(value) {
    profileEditData.brightness = parseInt(value);
    document.getElementById('brightnessValue').textContent = value + '%';
    applyImageFilters();
}

// 대비 업데이트
function updateContrast(value) {
    profileEditData.contrast = parseInt(value);
    document.getElementById('contrastValue').textContent = value + '%';
    applyImageFilters();
}

// 이미지 필터 적용
function applyImageFilters() {
    const profilePhoto = document.getElementById('profilePhoto');
    const filter = `rotate(${profileEditData.rotation}deg) brightness(${profileEditData.brightness}%) contrast(${profileEditData.contrast}%)`;
    profilePhoto.style.filter = filter;
}

// 변경사항 적용
function applyChanges() {
    // 현재 상태를 원본으로 저장
    profileEditData.originalImage = document.getElementById('profilePhoto').src;
    
    // 편집 도구 숨기기
    document.getElementById('editTools').style.display = 'none';
    
    showNotification('변경사항이 적용되었습니다!', 'success');
}

// 변경사항 초기화
function resetChanges() {
    const profilePhoto = document.getElementById('profilePhoto');
    profilePhoto.src = profileEditData.originalImage;
    profilePhoto.style.filter = '';
    
    resetEditTools();
    
    showNotification('변경사항이 초기화되었습니다.', 'info');
}

// 편집 도구 초기화
function resetEditTools() {
    profileEditData.rotation = 0;
    profileEditData.brightness = 100;
    profileEditData.contrast = 100;
    
    document.getElementById('rotationSlider').value = 0;
    document.getElementById('brightnessSlider').value = 100;
    document.getElementById('contrastSlider').value = 100;
    
    document.getElementById('rotationValue').textContent = '0°';
    document.getElementById('brightnessValue').textContent = '100%';
    document.getElementById('contrastValue').textContent = '100%';
    
    const profilePhoto = document.getElementById('profilePhoto');
    profilePhoto.style.filter = '';
}

// 알림 표시
function showNotification(message, type = 'info') {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 애니메이션 효과
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 자동 제거
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 모달 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
    const profileEditModal = document.getElementById('profileEditModal');
    const adminAuthModal = document.getElementById('adminAuthModal');
    
    if (event.target === profileEditModal) {
        closeProfileEditor();
    }
    
    if (event.target === adminAuthModal) {
        closeAdminAuth();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const profileEditModal = document.getElementById('profileEditModal');
        const adminAuthModal = document.getElementById('adminAuthModal');
        
        if (profileEditModal.classList.contains('active')) {
            closeProfileEditor();
        }
        
        if (adminAuthModal.classList.contains('active')) {
            closeAdminAuth();
        }
    }
}); 