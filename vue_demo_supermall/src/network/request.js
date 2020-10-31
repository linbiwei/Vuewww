// 封装axios 创建 不过分依赖
import axios from 'axios'

export function request(config) {
    // 创建 axios 实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/h8/',
        timeout: 3333
    })

    // 发送的网络请求
    //  是 Promise
    return instance(config)

}
