 
const crypto = require('crypto');

app.get('/api/wx-config', (req, res) => {
    const nonceStr = generateNonceStr();
    const timestamp = Math.floor(Date.now() / 1000);
    const url = req.query.url; // 当前页面URL
    
    // 生成签名
    const signature = generateSignature({
        nonceStr,
        timestamp,
        url,
        jsapi_ticket: '从微信服务器获取的jsapi_ticket'
    });
    
    res.json({
        appId: '你的appId',
        timestamp,
        nonceStr,
        signature
    });
});