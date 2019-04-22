<template>
<div class='more-list'>
  <div class="wrapper">
    <h3>{{this.$route.query.title}}</h3>
    <v-scroll :on-refresh="onRefresh">
      <div class="info url log" v-for="(item, index) in protoSongList.song_list" :key="index">
        <div class="poster">
          <img :src="item.pic_big" :alt="item.title">
        </div>
        <div class="text-wrap">
          <div class="title">{{ item.title }}</div>
          <div class="author">{{ item.artist_name }}</div>
        </div>
      </div>
    </v-scroll>
  </div>
</div>
</template>

<script type='text/ecmascript-6'>
import scroll from '../components/Scroll'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      offset: 0
    };
  },
  mounted() {
    this.getList()
  },
  computed: {
    ...mapState(['protoSongList']),
  },
  methods: {
    getList() {
      this.$store.dispatch('getSongList', {
        method: 'baidu.ting.billboard.billList',
        type: this.$route.query.type,
        size: '12',
        offset: this.offset
      })
    },
    onRefresh(done) {
      this.getList()
      done() // call done
    }
  },
  watch: {
    songList() {
      this.$nextTick(() => {
        let songnum = this.protoSongList.billboard.billboard_songnum
        console.log(songnum)

        if (this.offset + 12 <= songnum ) {
          if(this.offset + 12 == songnum){
            this.offset = 0
          }else{
            this.offset = this.offset + 12
          }
        }else if(this.offset + 12 - songnum >= 12){
          this.offset = 0
        } else {
          this.offset = this.offset + 12 - songnum
        }
      })
    }
  },
  components: {
    'v-scroll': scroll
  }
}
</script>

<style scoped>
.wrapper {
  padding-top: 13px;
  text-align: center;
  margin-bottom: 10px;
  background: #fff;
  clear: both;
  overflow: hidden;
}

h3 {
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}

.wrapper .info {
  width: 46%;
  height: 400px;
  float: left;
  text-align: center;
  padding-left: 17px;
  display: block;
  text-align: left;
  margin-bottom: 10px;
}
</style>