<template>
  <div class="mod-albums">
    <div class="hd log url">
        <h2>新歌速递</h2>
        <router-link tag="div" :to="{name:'/index/moreList',query:{type:'2',title:'新歌速递'}}">更多</router-link>
    </div>

    <div class="container">
      <div class="gallery">
        <div class="scroller">
          <div class="card url" v-for="(item,index) in newHotSongList" :key="index">
            <div class="album">
              <img :src="item.pic_big" :alt="item.title">
              <div class="name">{{ item.title }}</div>
              <div class="author">{{ item.artlist_name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['hotSongList']),

    newHotSongList() {
      return this.hotSongList.filter((item,index) => {
        return index <= 5
      })
    }
  },
  mounted() {
    this.$store.dispatch('getSongList',{
      method:'baidu.ting.billboard.billList',type:'2',size:'10',offset:'0'
    })
  },
  components: {

  }
}
</script>

<style scoped>
.mod-albums {
    background-color: #fff;
    padding: 10px 17px 30px;
}

.hd {
    display: flex;
    margin: 14px 0 18px 0;
}

.hd h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
}

.hd div {
    width: 64px;
    font-size: 12px;
    text-align: right;
}

.mod-albums .gallery {
    overflow: hidden;
    margin: 0 -5px;
}

 .mod-albums .gallery .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
}

.mod-albums .gallery .card .album {
  position: relative;
}

.mod-albums .gallery .card img {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
}

.mod-albums .gallery .card .name {
    height: 18px;
    align-items: 18px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
}
</style>
