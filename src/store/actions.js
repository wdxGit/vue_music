/*
Action:通过操作mutation间接更新state的多个方法的对象
 */
import {
    RECEIVE_SONGLIST,
    RECEIVE_SEARCHLIST,
    RECEIVE_HOTSONGLIST
} from './mutation-types'

// api接口
import {
    reqSongList,
    reqSearchList
} from '../api'

export default {
    async getSongList({ commit }, { method, type, size, offset }) { //音乐列表
        const result = await reqSongList(method, type, size, offset)
        if (type === '1') {
            const songList = result.song_list
            commit(RECEIVE_SONGLIST, { songList })
        } else if (type === '2') {
            const hotSongList = result.song_list
            commit(RECEIVE_HOTSONGLIST, { hotSongList })
        }
    },

    async getSearchList({ commit }, { method, query }) { //搜索列表
        const result = await reqSearchList(method, query)
        const searchList = result.song;
        commit(RECEIVE_SEARCHLIST, { searchList })
    }
}