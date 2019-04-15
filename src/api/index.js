/*
与后台交互模块 （依赖已封装的ajax函数）
包含n个接口请求函数的模块，函数的返回值是promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/baidu_music_api'

export const reqSongList = (method, type, size, offset) => ajax(BASE_URL, { method, type, size, offset }); //音乐列表
export const reqSearchList = (method, query) => ajax(BASE_URL, { method, query }); //搜索接口