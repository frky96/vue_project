<template>
  <div id="app">
    <!-- 每个页面都有的组件 -->
    <Header></Header> 
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("home/getCateList");
  },
};
</script>

<style>
</style>
