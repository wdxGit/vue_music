<template>
<div class=''>
  内容
</div>
</template>

<script type='text/ecmascript-6'>
import {mapState} from 'vuex'
export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['hotSongList']),

    newHotSongList() {
      return this.hotSongList.filter((item,index) => {
        return index <= 5
      })
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>