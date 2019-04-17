<template>

<div class='moreList'>

</div>

</template>

<script type='text/ecmascript-6'>
import {mapState} from 'vuex'
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.$store.dispatch('getSongList',{
      method:'baidu.ting.billboard.billList',type:this.$route.query.type,size:'10',offset:'0'
    })
  },
  computed: {
    ...mapState(['songList'])
  },
  components: {

  }
}
</script>

<style scoped>

</style>