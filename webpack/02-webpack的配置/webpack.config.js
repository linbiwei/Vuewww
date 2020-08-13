// 导入模块
// npm init
const path = reauire('path')

module.exports = {
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        // 路径
        path: path.resolve(__dirname, 'dist'),
        // 文件名
        filename: 'bundle,js'
    }
}