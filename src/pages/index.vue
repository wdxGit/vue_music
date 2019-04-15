<template lang="html">
  <div class="index">
    <ul>
      <li>
        <router-link to="/">
          <img src="../assets/logo-ea5.png" alt="">
        </router-link>
      </li>
      <li>
        <router-link to="/index/artiset">
          歌手
        </router-link>
      </li>
      <li>
        <router-link to="/index/listcate">
          榜单
        </router-link>
      </li>
      <li>
        <router-link to="/index/ucenter">
          我的
        </router-link>
      </li>
      <li>
        <router-link to="/index/search">
          搜索
        </router-link>
      </li>
    </ul>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.index ul{
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #f9f9f9;
}
.index ul img{
  width: 26px;
  height: 26px;
  margin: 12px 0 0 50px;
}
.index ul li {
  flex: 1;
  line-height: 50px;
  font-size: 16px;
}
.index ul li a {
  color: #999999;
}

</style>
