// 간단한 WebSocket 채팅 서버
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

// HTTP 서버 생성
const server = http.createServer((req, res) => {
    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // 정적 파일 서빙
    let filePath = '.' + req.url;
    if (filePath === './') filePath = './chat.html';
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`서버 오류: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// WebSocket 서버 생성
const wss = new WebSocket.Server({ server });

// 연결된 클라이언트들을 저장
const clients = new Map();
let messageHistory = [];

// WebSocket 연결 처리
wss.on('connection', (ws, req) => {
    console.log('새 클라이언트 연결됨');
    
    // 클라이언트 정보 저장
    const clientId = Date.now() + Math.random();
    const clientInfo = {
        id: clientId,
        ws: ws,
        nickname: `사용자${clientId}`,
        lastActivity: Date.now()
    };
    
    clients.set(clientId, clientInfo);
    
    // 연결된 클라이언트 수 브로드캐스트
    broadcastUserCount();
    
    // 클라이언트에게 연결 성공 메시지 전송
    ws.send(JSON.stringify({
        type: 'connected',
        clientId: clientId,
        message: '채팅 서버에 연결되었습니다!'
    }));
    
    // 최근 메시지 히스토리 전송 (최근 50개)
    const recentMessages = messageHistory.slice(-50);
    ws.send(JSON.stringify({
        type: 'history',
        messages: recentMessages
    }));
    
    // 메시지 수신 처리
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            handleMessage(clientId, message);
        } catch (error) {
            console.error('메시지 파싱 오류:', error);
        }
    });
    
    // 연결 종료 처리
    ws.on('close', () => {
        console.log(`클라이언트 ${clientId} 연결 종료`);
        clients.delete(clientId);
        broadcastUserCount();
        
        // 다른 클라이언트들에게 사용자 퇴장 알림
        broadcastToOthers(clientId, {
            type: 'user_left',
            nickname: clientInfo.nickname,
            message: `${clientInfo.nickname}님이 채팅방을 떠났습니다.`
        });
    });
    
    // 에러 처리
    ws.on('error', (error) => {
        console.error(`클라이언트 ${clientId} 오류:`, error);
    });
});

// 메시지 처리 함수
function handleMessage(clientId, message) {
    const client = clients.get(clientId);
    if (!client) return;
    
    // 클라이언트 활동 시간 업데이트
    client.lastActivity = Date.now();
    
    switch (message.type) {
        case 'chat':
            handleChatMessage(clientId, message);
            break;
        case 'nickname':
            handleNicknameChange(clientId, message);
            break;
        case 'typing':
            handleTypingStatus(clientId, message);
            break;
        default:
            console.log('알 수 없는 메시지 타입:', message.type);
    }
}

// 채팅 메시지 처리
function handleChatMessage(clientId, message) {
    const client = clients.get(clientId);
    if (!client || !message.text) return;
    
    const chatMessage = {
        id: Date.now() + Math.random(),
        type: 'chat',
        nickname: client.nickname,
        text: message.text,
        timestamp: new Date().toISOString(),
        clientId: clientId
    };
    
    // 메시지 히스토리에 추가 (최대 1000개 유지)
    messageHistory.push(chatMessage);
    if (messageHistory.length > 1000) {
        messageHistory = messageHistory.slice(-1000);
    }
    
    // 모든 클라이언트에게 메시지 브로드캐스트
    broadcastToAll(chatMessage);
    
    console.log(`${client.nickname}: ${message.text}`);
}

// 닉네임 변경 처리
function handleNicknameChange(clientId, message) {
    const client = clients.get(clientId);
    if (!client || !message.nickname) return;
    
    const oldNickname = client.nickname;
    client.nickname = message.nickname;
    
    // 다른 클라이언트들에게 닉네임 변경 알림
    broadcastToOthers(clientId, {
        type: 'nickname_changed',
        oldNickname: oldNickname,
        newNickname: message.nickname,
        message: `${oldNickname}님이 ${message.nickname}으로 닉네임을 변경했습니다.`
    });
}

// 타이핑 상태 처리
function handleTypingStatus(clientId, message) {
    const client = clients.get(clientId);
    if (!client) return;
    
    // 다른 클라이언트들에게 타이핑 상태 브로드캐스트
    broadcastToOthers(clientId, {
        type: 'typing',
        nickname: client.nickname,
        isTyping: message.isTyping
    });
}

// 모든 클라이언트에게 메시지 브로드캐스트
function broadcastToAll(message) {
    const messageStr = JSON.stringify(message);
    clients.forEach((client) => {
        if (client.ws.readyState === WebSocket.OPEN) {
            client.ws.send(messageStr);
        }
    });
}

// 특정 클라이언트를 제외하고 브로드캐스트
function broadcastToOthers(excludeClientId, message) {
    const messageStr = JSON.stringify(message);
    clients.forEach((client, clientId) => {
        if (clientId !== excludeClientId && client.ws.readyState === WebSocket.OPEN) {
            client.ws.send(messageStr);
        }
    });
}

// 사용자 수 브로드캐스트
function broadcastUserCount() {
    const userCount = clients.size;
    broadcastToAll({
        type: 'user_count',
        count: userCount
    });
}

// 서버 시작
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`채팅 서버가 포트 ${PORT}에서 실행 중입니다.`);
    console.log(`http://localhost:${PORT} 에서 채팅을 이용하세요.`);
});

// 정리 작업
process.on('SIGINT', () => {
    console.log('\n서버를 종료합니다...');
    server.close(() => {
        console.log('서버가 종료되었습니다.');
        process.exit(0);
    });
});
