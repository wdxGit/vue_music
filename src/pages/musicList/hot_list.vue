<template>
  <div class=''>
    热歌榜
    <MusicList :url="url"/>
  </div>
</template>

<script type='text/ecmascript-6'>
import MusicList from '../../components/Music_list'
export default {
  data() {
    return {
      url: 'method=baidu.ting.billboard.billList&type=2&size=10&offset=0'
    };
  },
  components: {
    MusicList
  }
}
</script>

<style scoped>

</style>