import Vue from 'vue'
import Vuex from 'vuex'
import {shuffle} from '@/assets/js/util'

Vue.use(Vuex)

let playMode = { //播放模式，
  sequence: 0,
  loop: 1,
  random: 2
}

export default new Vuex.Store({
  state: {
    playing: false, //播放状态
    mode: playMode.sequence, //播放模式，这种写法更语义化
    playlist: [], //播放列表
    sequencelist: [], //顺序播放列表
    currentIndex: -1, //当前播放索引
    fullScreen: false, //播放页面是否折叠
    other: {}, //其他选项,
    mylikeSongs: localStorage['mylikeSongs'] ? JSON.parse(localStorage['mylikeSongs']) : [],
    playHistory: localStorage['playHistory'] ? JSON.parse(localStorage['playHistory']) : [],
    searchHistory: localStorage['searchHistory'] ? JSON.parse(localStorage['searchHistory']) : [],
  },
  getters: {
    currentSong(state) {
      let Song = {
        ...state.playlist[state.currentIndex]
      } || {}
      if (Song.mid) {
        
        Song.url = `https://v1.itooi.cn/tencent/url?id=${Song.mid}&quality=128`
      }
      return Song || {}
    }
  },


  mutations: {
    //播放状态
    setPlayingState(state, flag) {
      state.playing = flag
    },
    //播放器全屏
    setFullScreenState(state, flag) {
      state.fullScreen = flag
    },
    //播放列表
    setPlaylist(state, list) {
      //当setPlaylist和setSequencelist引用同一个list时，改变其中一个会影响另一个
      state.playlist = list
    },
    //播放队列
    setSequencelist(state, list) {
      state.sequencelist = list
    },
    //播放状态
    setModeState(state, mode) {
      state.mode = mode
    },
    //当前播放的歌曲index
    setCurrentIndex(state, index) {
      state.currentIndex = index
    },
    //其他设置
    setOther(state, option) {
      state.other = Object.assign(state.other, option)
    },
    //加入添加播放记录和缓存
    addItem(state, payload) {
      //载荷传入key和song
      state[payload.key].push(payload.song)
      localStorage.setItem(payload.key, JSON.stringify(state[payload.key]))
    },
    //加入缓存
    addItemPosition(state, payload) {
      state[payload.key].splice(payload.index, 0, payload.song)
      localStorage.setItem(payload.key, JSON.stringify(state[payload.key]))
    },
    //删除缓存
    removeItem(state, payload) {
      //载荷传入key和index
      state[payload.key].splice(payload.index, 1)
      localStorage.setItem(payload.key, JSON.stringify(state[payload.key]))
    },
    //清除列表
    clearList(state, key) {
      state[key] = []
      localStorage.setItem(key, JSON.stringify(state[key]))
    }
  },

  //Action 一般做异步处理，或将多个mutation封装
  actions: {
    selectPlay({
      commit,
      state
    }, {
      list,
      index
    }) {
      commit('setSequencelist', list)
      if (state.mode === playMode.random) {
        let randomList = shuffle(list)
        commit('setPlaylist', randomList)
        //打乱数组后index也会变化
        let oindex = index
        index = randomList.findIndex((item) => {
          return item.id === list[oindex].id
        })
      } else {
        commit('setPlaylist', list)
      }
        commit('setCurrentIndex', index)
        commit('setPlayingState', true)
    }
  }
})