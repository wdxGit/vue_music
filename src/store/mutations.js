/*
直接更新state的多个方法的对象
*/
import {
    RECEIVE_SONGLIST,
    RECEIVE_SEARCHLIST,
    RECEIVE_HOTSONGLIST,
    RECEIVE_PROTOSONGLIST
} from './mutation-types'

export default {

    [RECEIVE_SONGLIST](state, { songList }) { //歌曲列表 新歌
        state.songList = songList
    },

    [RECEIVE_HOTSONGLIST](state, { hotSongList }) { //存储热歌榜
        state.hotSongList = hotSongList
    },

    [RECEIVE_SEARCHLIST](state, { searchList }) { //搜索
        state.searchList = searchList
    },

    [RECEIVE_PROTOSONGLIST](state, { protoSongList }) { //歌曲列表 新歌 总
        state.protoSongList = protoSongList
    }
}