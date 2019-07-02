const proxy = [
    {
        context: '/api',
        target: 'https://github.com',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true
    }
];
module.exports = proxy;
