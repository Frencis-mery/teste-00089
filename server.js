const agentToken = process.env.AGENT_TOKEN;
const secretKey = process.env.SECRET_KEY;
const userCode = 'teste0209@email.com';
const gameCode = '126';
const userBalance = 100.5;
const lang = 'pt';

const payload = {
    agentToken,
    secretKey,
    user_code: userCode,
    game_code: gameCode,
    game_original: true,
    user_balance: userBalance,
    lang
};

fetch('https://api.playfivers.com/api/v2/games/start', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
