<template>

<div class="page">
  <TodayRecommend/>
  <br>
  <NewsMusic/>
  <br>
  <SwiperBanner/>
  <br>
  <MusicListNav/>
  
</div>

</template>

<script type="text/ecmascript-6">
import TodayRecommend from '../components/Today_Recommend'
import NewsMusic from '../components/News_Music'
import SwiperBanner from '../components/Swiper_Banner'
import MusicListNav from './musicList/music_listnav'
export default {
  data() {
    return {

    }
  },
  components: {
    TodayRecommend,
    NewsMusic,
    SwiperBanner,
    MusicListNav
  }
}
</script>

<style scoped>

</style>
